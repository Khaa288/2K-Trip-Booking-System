namespace tkpm_API.DTO.Request
{
    public class TripBookingRequest
    {
        public int CustomerId { get; set; }
        public int VehicleTypeId { get; set; }
        public string StartPosition { get; set; }
        public string EndPosition { get; set; }
        public string Notes { get; set; }
    }
}
