using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Response;

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
    }
}
