using Microsoft.AspNetCore.Mvc;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Services.Authentication;

namespace tkpm_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserManager _userManager;

        public AuthController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login ([FromBody] LoginRequest request)
        {
            var user = await _userManager.GetLoginUser(request.Username, request.Password);
            return user is not null ? Ok(user) : BadRequest();
        }

        [HttpPost("register/customer")]
        public async Task<ActionResult> RegisterCustomer([FromBody] RegisterRequest request)
        {
            var user = await _userManager.GetRegisterUser(request.Username, request.Email);

            if (request.Password != request.ConfirmPassword)
            {
                return BadRequest();
            }

            if (user is not null)
            {
                return BadRequest("User exists");
            }

            await _userManager.CreateCustomer(request);
            return Ok();
        }

        [HttpPost("register/driver")]
        public async Task<ActionResult> RegisterDriver([FromBody] RegisterDriverRequest request)
        {
            var driver = await _userManager.GetRegisterUser(request.Username, request.Email);

            if (request.Password != request.ConfirmPassword)
            {
                return BadRequest();
            }

            if (driver is not null)
            {
                return BadRequest("User exists");
            }

            await _userManager.CreateDriver(request);
            return Ok();
        }
    }
}
