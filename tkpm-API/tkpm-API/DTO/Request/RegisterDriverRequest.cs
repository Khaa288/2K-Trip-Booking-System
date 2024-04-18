namespace tkpm_API.DTO.Request
{
    public class RegisterDriverRequest : RegisterRequest
    {
        public int RegisterVehicleId { get; set; }
        public int RegisterLocationId { get; set; }
    }
}
