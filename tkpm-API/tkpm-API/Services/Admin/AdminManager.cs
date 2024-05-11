using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;
using tkpm_API.Utilities.Enums;
using tkpm_server.Utilities.Enums;

namespace tkpm_API.Services.Admin
{
    public class AdminManager : IAdminManager
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public AdminManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task<List<DriverResponse>> GetDrivers()
        {
            var driver = await _dbcontext.Drivers.ToListAsync();

            var driverResponse = _mapper.Map<List<DriverResponse>>(driver);

            return driverResponse;
        }
        public async Task<List<UserResponse>> GetUsers() 
        {
            var user = await _dbcontext.Users.ToListAsync();

            var userResponse = _mapper.Map<List<UserResponse>>(user);

            return userResponse;
        }

        public async Task<double> GetRevenueDaily (DateTime date)
        {
            var startDay = date.Date;

            var endDay = startDay.AddDays(1);
            
            var bills = await _dbcontext.Bills
                                    .Where(Bill=>Bill.CreatedDate >= startDay && Bill.CreatedDate <= endDay)
                                    .ToListAsync();
            return bills.Sum(Bill=>Bill.Total);
        }
        public async Task<Dictionary<int, double>> GetMonthlyRevenue(int year)
        {
            var bills = await _dbcontext.Bills
                                    .Where(b => b.CreatedDate.Year == year)
                                    .ToListAsync();

            var monthlyRevenue = bills
                                    .GroupBy(b => b.CreatedDate.Month)
                                    .ToDictionary(g => g.Key, g => g.Sum(b => b.Total));

            return monthlyRevenue;
        }
        public async Task<bool> VerifyDriver(int driverID)
        {
            var driver = await _dbcontext.Drivers.FindAsync(driverID);

            if (driver is not null)
            {
                driver.IsVerified = !driver.IsVerified;
                _dbcontext.Drivers.Update(driver);
                await _dbcontext.SaveChangesAsync();
                return true;
            }
            return false;
        }
        public async Task AddNewDriver(string userName, string fullName, string idCard, string email, string phoneNumber, int vehicleTypeID)
        {
            var driverExist = await _dbcontext.Drivers.FirstOrDefaultAsync(x => x.Username == userName);
            
            if (driverExist is not null)
            {
                return;
            }

            var newDriver = new Driver()
            {
                Username = userName,
                FullName = fullName,
                Email = email,
                IdentityCard = idCard,
                PhoneNumber = phoneNumber,
                RegisterVehicleId = vehicleTypeID,
                RegisterLocationId = 1,
                RoleId = (int)UserRole.DRIVER
            };

            await _dbcontext.Drivers.AddAsync(newDriver);
            await _dbcontext.SaveChangesAsync();
        }
        
        public async Task<int> CountActiveDriver()
        {
            var activeDriver = await _dbcontext.Drivers.CountAsync(x => x.IsActive);

            return activeDriver;
        }
        
        public async Task<int[]> CountTrip()
        {
            var tripCompleted = await _dbcontext.Trips.CountAsync(x => x.Status == TripStatus.COMPLETED);

            var tripCancled = await _dbcontext.Trips.CountAsync(x => x.Status == TripStatus.CANCELED);

            var result = new int []{tripCancled, tripCompleted};

           return result;
        }
    }
}
