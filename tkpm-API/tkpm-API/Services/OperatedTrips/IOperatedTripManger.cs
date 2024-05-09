using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;

namespace tkpm_API.Services.OperatedTrips
{
    public interface IOperatedTripManger
    {
        Task<List<OperatedTripResponse>> GetTrips();
        Task<OperatedTripResponse> BookTrip(OperatedTripBookingRequest request);
        Task<bool> CoordinateDriver(int operatedTripId, int driverId);
    }
}
