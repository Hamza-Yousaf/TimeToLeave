namespace SmartLeave.Api.Dtos;

public record TripRequest
(
    String StopCode,
    String StartCode,
    DateTime Time,
    String TransportType
);