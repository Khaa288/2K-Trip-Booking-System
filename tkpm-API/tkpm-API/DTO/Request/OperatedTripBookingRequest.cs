using tkpm_API.Utilities.Enums;

namespace tkpm_API.DTO.Request
{
    public class OperatedTripBookingRequest
    {
        public string CustomerName { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public int VehicleTypeId { get; set; }
        public string Notes { get; set; }
    }
}
