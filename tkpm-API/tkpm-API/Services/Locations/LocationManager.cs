using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Response;

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
    }
}
