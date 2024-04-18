using System.ComponentModel.DataAnnotations;

namespace tkpm_API.Entities
{
    public class User
    {
        [Required]
        public int Id { get; set; }
        public string? FullName { get; set; }
        public string? Address { get; set; }
        public string? PhoneNumber { get; set; }
        public string? IdentityCard { get; set; }
        [EmailAddress] public string? Email { get; set; }

        [Required]
        public string? Username { get; set; }
        public string? Password { get; set; }

        [Required]
        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}
