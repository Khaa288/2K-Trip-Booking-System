using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;
using tkpm_server.Utilities.Enums;

namespace tkpm_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _dbcontext;

        public AuthController(AppDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login ([FromBody] LoginRequest request)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Username == request.Username && u.Password == request.Password);

            if (user is not null)
            {
                var dto = new LoginDTO
                {
                    Id = user.Id,
                    Username = user.Username!,
                };

                return Ok(dto);
            }

            return BadRequest();
        }

        [HttpPost("register/customer")]
        public async Task<ActionResult> RegisterCustomer([FromBody] RegisterRequest request)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Username == request.Username && u.Email == request.Email);

            if (request.Password != request.ConfirmPassword)
            {
                return BadRequest();
            }

            if (user is not null)
            {
                return BadRequest("User exists");
            }

            await _dbcontext.Users.AddAsync(
                new User
                {
                    Username = request.Username,
                    Password = request.Password,
                    Email = request.Email,
                    FullName = request.FullName,
                    RoleId = (int)UserRole.CUSTOMER
                }
            );
            await _dbcontext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("register/driver")]
        public async Task<ActionResult> RegisterDriver([FromBody] RegisterDriverRequest request)
        {
            var driver = await _dbcontext.Drivers.FirstOrDefaultAsync(u => u.Username == request.Username && u.Email == request.Email);

            if (request.Password != request.ConfirmPassword)
            {
                return BadRequest();
            }

            if (driver is not null)
            {
                return BadRequest("User exists");
            }

            var drivers = new Driver
            {
                Username = request.Username,
                Password = request.Password,
                Email = request.Email,
                FullName = request.FullName,
                RegisterVehicleId = request.RegisterVehicleId,
                RegisterLocationId = request.RegisterLocationId,
                RoleId = (int)UserRole.DRIVER
            };

            await _dbcontext.Drivers.AddAsync(
                drivers
            );
            await _dbcontext.SaveChangesAsync();
            return Ok();
        }
    }
}
