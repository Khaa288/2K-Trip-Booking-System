using System.ComponentModel.DataAnnotations;

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

        public bool Status { get; set; }
        public string? Notes { get; set; }
        public DateTime BookingTime { get; set; }

        public int VehicleTypeId { get; set; }
        public VehicleType VehicleType { get; set; }

        public int CustomerId { get; set; }
        public User Customer { get; set; }

        public int DriverId { get; set; }
        public Driver Driver { get; set; }

        public Bill Bill { get; set; }
    }
}
