using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

var apiKey = builder.Configuration["GO_TRANSIT_API_KEY"];

var app = builder.Build();


app.MapGet("/api/trips", async (
    string Date,
    string StartCode,
    string StopCode,
    string startTime
) =>
{
    var url = $"https://api.openmetrolinx.com/OpenDataAPI/api/V1/Schedule/Journey/{Date}/{StartCode}/{StopCode}/{startTime}/3?key={apiKey}";
    var client = new HttpClient();
    var response = await client.GetAsync(url);

    if (!response.IsSuccessStatusCode)
        return Results.Problem("Failed to fetch GO Transit data");

    var json = await response.Content.ReadAsStringAsync();
    var doc = JsonDocument.Parse(json);

    var journeys = doc.RootElement.GetProperty("SchJourneys")[0].GetProperty("Services").GetArrayLength();

    string[] time = new string[journeys];

    for(int i = 0; i < journeys; i++)
    {
        time[i] = doc.RootElement.GetProperty("SchJourneys")[0]
        .GetProperty("Services")[i]
        .GetProperty("StartTime")
        .GetString()
        .Substring(11, 5);
    }

    time = time.Distinct().ToArray();


       //Console.WriteLine(time.Length);
       //Console.WriteLine(journeys);
    

    return Results.Json(time);
});

app.Run();
