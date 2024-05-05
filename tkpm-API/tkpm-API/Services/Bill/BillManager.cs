using AutoMapper;
using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;
using tkpm_API.Utilities.Enums;

namespace tkpm_API.Services.Bills
{
    public class BillManager : IBillManager
    {
        private readonly AppDbContext _dbcontext;
        private readonly IMapper _mapper;

        public BillManager(AppDbContext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

        public async Task InitializeBill(int tripId, string paymentMethod)
        {
            var bill = new Bill()
            {
                TripId = tripId,
                PaymentMethod = paymentMethod,
                TripCost = (double)BillCost.BASE_TRIP_COST,
                PlatformCost = (double)BillCost.BASE_PLATFORM_COST,
                CreatedDate = DateTime.Now
            };

            await _dbcontext.Bills.AddAsync(bill);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task<BillResponse?> GetBillByTripId(int tripId)
        {
            var bill = await _dbcontext.Bills.FirstOrDefaultAsync(b => b.TripId == tripId);

            if (bill is null)
            {
                return null;
            }

            return _mapper.Map<BillResponse>(bill);
        }

        public async Task<bool> UpdateBill(int billId, double tollCost, double subCharge)
        {
            var bill = await _dbcontext.Bills.FirstOrDefaultAsync(b => b.Id == billId);

            if (bill is null)
            {
                return false;
            }

            bill.TollCost = tollCost;
            bill.Surcharge = subCharge;
            bill.Total = bill.TollCost + bill.Surcharge + bill.PlatformCost + bill.TripCost;

            await _dbcontext.SaveChangesAsync();

            return true;
        }
    }
}
