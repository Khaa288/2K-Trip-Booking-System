using System.ComponentModel.DataAnnotations;

namespace tkpm_API.Entities
{
    public class Role
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public List<User>? Users { get; set; }
    }
}
