using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_server.DTO;
using tkpm_API.Models;
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
        public async Task<ActionResult> Login (string username, string password)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Username == username && u.Password == password);

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

        [HttpPost("register")]
        public async Task<ActionResult> Register(string username, string email, string password, string confirmPassword)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Username == username && u.Email == email);

            if (password != confirmPassword)
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
                    Username = username,
                    Password = password,
                    Email = email,
                    RoleName = UserRole.USER.ToString(),
                }
            );
            await _dbcontext.SaveChangesAsync();

            return Ok(UserRole.ADMIN.ToString());
        }
    }
}
