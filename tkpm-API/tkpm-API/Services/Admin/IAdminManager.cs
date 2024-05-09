using tkpm_API.DTO.Response;
using tkpm_API.Entities;

namespace tkpm_API.Services.Admin
{
    public interface IAdminManager
    {
        Task<List<DriverResponse>> GetDrivers();
        Task AddNewDriver(string userName, string fullName, string idCard, string email, string phoneNumber, int vehicleTypeID);
        Task<List<UserResponse>> GetUsers();
        Task<int> CountActiveDriver();
        Task<double> GetRevenueDaily(DateTime date);
        Task<bool> VerifyDriver(int driverID);
        Task<int[]> CountTrip();
        Task<Dictionary<int, double>> GetMonthlyRevenue(int year);
    }
}
