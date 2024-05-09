using tkpm_API.DTO.Response;

namespace tkpm_API.Services.Locations
{
    public interface ILocationManager
    {
        Task<List<LocationResponse>> GetLocation();
        Task<bool> AddLocation(string name);
        Task<bool> ValidateLocation(string name);
    }
}
