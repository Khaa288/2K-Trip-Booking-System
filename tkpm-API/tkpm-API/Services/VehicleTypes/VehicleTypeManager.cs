using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Response;

namespace tkpm_API.Services.VehicleTypes
{
    public class VehicleTypeManager : IVehicleTypeManager
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public VehicleTypeManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task<List<VehicleTypeResponse>> GetVehicleTypes()
        {
            var vehicleTypes = await _dbcontext.VehicleTypes.ToListAsync();
            return _mapper.Map<List<VehicleTypeResponse>>(vehicleTypes);
        }
    }
}
