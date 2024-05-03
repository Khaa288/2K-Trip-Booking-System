using tkpm_API.DTO.Response;

namespace tkpm_API.Services.Admin
{
    public interface IAdminManager
    {
        Task<List<DriverResponse>> GetDrivers();
    }
}
