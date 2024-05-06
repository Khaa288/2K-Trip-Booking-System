using tkpm_API.Utilities.Enums;

namespace tkpm_API.DTO.Response
{
    public class TripBookingResponse
    {
        public int Id { get; set; }
        public string StartPosition { get; set; }
        public string EndPosition { get; set; }
        public TripStatus Status { get; set; }
        public string Notes { get; set; }
        public DateTime BookingTime { get; set; }
    }
}
