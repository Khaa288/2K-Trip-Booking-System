using tkpm_API.DTO.Response;

namespace tkpm_API.Services.VehicleTypes
{
    public interface IVehicleTypeManager
    {
        Task<List<VehicleTypeResponse>> GetVehicleTypes();
    }
}
