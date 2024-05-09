using tkpm_API.Utilities.Enums;

namespace tkpm_API.DTO.Response
{
    public class OperatedTripResponse
    {
        public string Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerLocationName { get; set; }
        public string CustomerPhoneNumber { get; set; }
        public TripStatus Status { get; set; }
        public string Notes { get; set; }
        public DateTime BookingTime { get; set; }
    }
}
