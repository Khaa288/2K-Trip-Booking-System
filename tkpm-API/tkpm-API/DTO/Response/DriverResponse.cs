
namespace tkpm_API.DTO.Response

{
    public class DriverResponse
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string IdentityCard { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsVerified {  get; set; }
    }
}
