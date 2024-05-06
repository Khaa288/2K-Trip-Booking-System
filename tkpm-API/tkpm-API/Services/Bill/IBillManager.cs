using tkpm_API.DTO.Response;

namespace tkpm_API.Services.Bills
{
    public interface IBillManager
    {
        Task InitializeBill(int tripId, string paymentMethod);
        Task<BillResponse?> GetBillByTripId(int tripId);
        Task<bool> UpdateBill(int billId, double tollCost, double subCharge);
    }
}
