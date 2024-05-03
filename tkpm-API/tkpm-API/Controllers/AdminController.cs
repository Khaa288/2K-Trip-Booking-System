using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public async Task<List<DriverResponse>> GetDrivers()
        {
            var driver = await _adminManager.GetDrivers();
            return driver;
        }
    }
}
