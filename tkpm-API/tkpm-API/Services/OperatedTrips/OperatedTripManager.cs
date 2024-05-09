using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;
using tkpm_API.Utilities.Enums;

namespace tkpm_API.Services.OperatedTrips
{
    public class OperatedTripManager : IOperatedTripManger
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public OperatedTripManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task<List<OperatedTripResponse>> GetTrips()
        {
            return _mapper.Map<List<OperatedTripResponse>>(
                await _dbcontext.OperatedTrips
                    .Where(ot => ot.Status == TripStatus.PENDING)
                    .ToListAsync()
            );
        }

        public async Task<OperatedTripResponse> BookTrip(OperatedTripBookingRequest request)
        {
            var operatedTrip = new OperatedTrip()
            {
                CustomerName = request.CustomerName,
                CustomerLocationName = request.Location,
                CustomerPhoneNumber = request.PhoneNumber,
                VehicleTypeId = request.VehicleTypeId,
                Status = TripStatus.PENDING,
                Notes = request.Notes,
                BookingTime = DateTime.Now,
                Total = 0
            };

            await _dbcontext.OperatedTrips.AddAsync(operatedTrip);
            await _dbcontext.SaveChangesAsync();

            return _mapper.Map<OperatedTripResponse>(operatedTrip);
        }

        public async Task<bool> CoordinateDriver(int operatedTripId, int driverId)
        {
            var operatedTrip = await _dbcontext.OperatedTrips.FirstOrDefaultAsync(ot => ot.Id == operatedTripId);
            var driver = await _dbcontext.Drivers.FirstOrDefaultAsync(o => o.Id == driverId);

            if (operatedTrip is null) { return false; }
            if (driver is null) { return false; }

            operatedTrip.DriverId = driverId;
            operatedTrip.Status = TripStatus.ACCEPTED;

            await _dbcontext.SaveChangesAsync();
            return true;
        }
    }
}
