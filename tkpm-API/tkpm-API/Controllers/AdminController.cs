using Microsoft.AspNetCore.Mvc;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Services.Admin;

namespace tkpm_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminManager _adminManager;

        public AdminController(IAdminManager adminManager)
        {
            _adminManager = adminManager;
        }
        [HttpGet("drivers")]
        public async Task<List<DriverResponse>> GetDrivers()
        {
            var driver = await _adminManager.GetDrivers();
            return driver;
        }

        [HttpGet("activeDrivers")]
        public async Task<int> CountActiveDriver()
        {
            var driver = await _adminManager.CountActiveDriver();
            return driver;
        }

        [HttpGet("tripStatus")]
        public async Task<int[]> CountTrip()

        {
            var tripCompleted = await _adminManager.CountTrip();
            return tripCompleted;
        }
        
        [HttpGet("users")]

        public async Task<List<UserResponse>> GetUsers()
        {
            var user = await _adminManager.GetUsers();
            return user;
        }

        [HttpGet("revenue")]
        public async Task<double> GetRevenueDaily(DateTime date)
        {
            var revenue = await _adminManager.GetRevenueDaily(date);

            return revenue;
        }
        [HttpPost("addDriver")]

        public async Task AddDriver([FromBody] AddDriverRequest request)
        {
            await _adminManager.AddNewDriver(request.Username, request.FullName, request.IDCard, request.Email, request.PhoneNumber, request.VehicleTypeID);
        }

        [HttpPut("verifyDriver")]
        public async Task<bool> VerifyDriver(int driverID)
        {
            var result = await _adminManager.VerifyDriver(driverID);
            return result;
        }

        [HttpGet("revenue/monthly")]
        public async Task<IActionResult> GetMonthlyRevenue(int year)
        {
            var revenue = await _adminManager.GetMonthlyRevenue(year);
            return Ok(revenue);
        }
    }
}
