using System.ComponentModel.DataAnnotations;

namespace tkpm_API.Entities
{
    public class Location
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public List<Driver>? Drivers { get; set; }
    }
}
