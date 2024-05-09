using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;

namespace tkpm_API.Services.Locations
{
    public class LocationManager : ILocationManager
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public LocationManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task<List<LocationResponse>> GetLocation()
        {
            var locations = await _dbcontext.Locations.ToListAsync();
            return _mapper.Map<List<LocationResponse>>(locations);
        }


        public async Task<bool> ValidateLocation(string name)
        {
            var location = await _dbcontext.Locations.FirstOrDefaultAsync(l => l.Name!.Contains(name.Trim()));
            return location is not null ? true : false;
        }

        public async Task<bool> AddLocation (string name)
        {
            var isLocationExist = await _dbcontext.Locations.AnyAsync(l => l.Name == name);
            if (isLocationExist)
            {
                return false;
            }

            var location = new Location()
            {
                Name = name,
            };

            await _dbcontext.Locations.AddAsync(location);
            await _dbcontext.SaveChangesAsync();

            return true;
        }
    }
}
