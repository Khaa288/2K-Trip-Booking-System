using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;
using tkpm_server.Utilities.Enums;

namespace tkpm_API.Services.Authentication
{
    public class UserManager : IUserManager
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public UserManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task CreateCustomer(RegisterRequest request)
        {
            var user = new User
            {
                Username = request.Username,
                Password = request.Password,
                Email = request.Email,
                FullName = request.FullName,
                RoleId = (int)UserRole.CUSTOMER
            };

            await _dbcontext.Users.AddAsync(user);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task CreateDriver(RegisterDriverRequest request)
        {
            var driver = new Driver
            {
                Username = request.Username,
                Password = request.Password,
                Email = request.Email,
                FullName = request.FullName,
                RegisterVehicleId = request.RegisterVehicleId,
                RegisterLocationId = request.RegisterLocationId,
                RoleId = (int)UserRole.DRIVER
            };

            await _dbcontext.Drivers.AddAsync(driver);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task<LoginResponse?> GetLoginUser(string username, string password)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Username == username && u.Password == password);
            return _mapper.Map<LoginResponse>(user);
        }

        public async Task<User?> GetRegisterUser(string username, string email)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Username == username && u.Email == email);
            return user;
        }

        public async Task<List<DriverResponse>> GetDrivers()
        {
            return _mapper.Map<List<DriverResponse>>(await _dbcontext.Drivers.ToListAsync());
        }
    }
}
