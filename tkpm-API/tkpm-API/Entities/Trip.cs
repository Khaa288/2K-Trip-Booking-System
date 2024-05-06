using System.ComponentModel.DataAnnotations;
using tkpm_API.Utilities.Enums;

namespace tkpm_API.Entities
{
    public class Trip
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string? StartPosition { get; set; }
        [Required]
        public string? EndPosition { get; set; }

        // Is foreign key to Driver but not adding FK in SQL
        public int DriverId { get; set; }

        public TripStatus Status { get; set; }
        public string? Notes { get; set; }
        public DateTime BookingTime { get; set; }

        public int VehicleTypeId { get; set; }
        public VehicleType VehicleType { get; set; }

        public int CustomerId { get; set; }
        public User Customer { get; set; }

        public Bill Bill { get; set; }
    }
}
