using System.ComponentModel.DataAnnotations;

namespace tkpm_API.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string? FullName { get; set; }

        public string? Address { get; set; }

        public string? PhoneNumber { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Username { get; set; }

        [StringLength(8)]
        public string? Password { get; set; }

        [Required]
        public string? RoleName { get; set; }
    }
}
