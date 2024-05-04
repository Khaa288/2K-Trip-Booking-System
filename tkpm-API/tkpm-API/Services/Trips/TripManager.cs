using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;
using tkpm_API.Utilities.Enums;

namespace tkpm_API.Services.Trips
{
    public class TripManager : ITripManager
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public TripManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task<TripBookingResponse?> GetLastestTrip()
        {
            var trip = await _dbcontext.Trips.FirstOrDefaultAsync(
                t => t.Status == TripStatus.PENDING &&
                     t.BookingTime.Date == DateTime.Now.Date &&
                     t.BookingTime.Hour == DateTime.Now.Hour && 
                     DateTime.Now.Minute - t.BookingTime.Minute <= 10
            );

            return _mapper.Map<TripBookingResponse>(trip);
        }

        public async Task<TripBookingResponse> BookTrip(TripBookingRequest request)
        {
            var trip = new Trip()
            {
                VehicleTypeId = request.VehicleTypeId,
                CustomerId = request.CustomerId,
                StartPosition = request.StartPosition,
                EndPosition = request.EndPosition,
                Notes = request.Notes,
                BookingTime = DateTime.Now,
                Status = TripStatus.PENDING
            };

            await _dbcontext.Trips.AddAsync(trip);
            await _dbcontext.SaveChangesAsync();

            return _mapper.Map<TripBookingResponse>(trip);
        }

        public async Task<bool> AcceptTrip(int tripId, int driverId)
        {
            var trip = await _dbcontext.Trips.FirstOrDefaultAsync(t => t.Id == tripId && t.Status == TripStatus.PENDING);

            if (trip is null)
            {
                return false;
            }

            trip.DriverId = driverId;
            trip.Status = TripStatus.ACCEPTED;

            await _dbcontext.SaveChangesAsync();
            return true;
        }

        public async Task<TripBookingResponse?> ValidatePickedUpTrip(int tripId)
        {
            var trip = await _dbcontext.Trips.FirstOrDefaultAsync(t => t.Id == tripId);

            if (trip is null)
            {
                return null;
            }

            return _mapper.Map<TripBookingResponse>(trip);
        }

        public async Task<bool> CancelTrip(int tripId)
        {
            var trip = await _dbcontext.Trips.FirstOrDefaultAsync(t => t.Id == tripId);

            if (trip is null)
            {
                return false;
            }

            trip.Status = TripStatus.CANCELED;
            await _dbcontext.SaveChangesAsync();

            return true;
        }
    }
}
