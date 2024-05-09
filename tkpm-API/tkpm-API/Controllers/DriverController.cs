using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tkpm_API.DTO.Response;
using tkpm_API.Services.Authentication;

namespace tkpm_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly IUserManager _userManager;

        public DriverController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<List<DriverResponse>> GetDrivers()
        {
            return await _userManager.GetDrivers();
        }
    }
}
