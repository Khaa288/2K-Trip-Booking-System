namespace tkpm_API.DTO.Request
{
    public class AddDriverRequest
    {
        public string Username { get; set; }
        public string FullName { get; set; }
        public string IDCard { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int VehicleTypeID {  get; set; }        
    }
}
