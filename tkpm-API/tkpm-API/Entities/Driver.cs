using System.ComponentModel.DataAnnotations;

namespace tkpm_API.Entities
{
    public class Driver : User
    {
        [Required]
        public int RegisterLocationId { get; set; }
        public Location Location { get; set; }

        [Required]
        public int RegisterVehicleId { get; set; }
        public VehicleType VehicleType { get; set; }

        public bool IsVerified { get; set; }
        public bool IsActive { get; set; }
    }
}
