namespace tkpm_API.DTO.Response
{
    public class TripResponse : TripBookingResponse
    {
        public int CustomerId { get; set; }
        public string CustomerFullName { get; set; }
        public string CustomerPhoneNumber { get; set; }
    }
}
