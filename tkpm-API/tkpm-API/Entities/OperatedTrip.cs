using System.ComponentModel.DataAnnotations;
using tkpm_API.Utilities.Enums;

namespace tkpm_API.Entities
{
    public class OperatedTrip
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string? CustomerName { get; set; }

        [Required]
        public string? CustomerLocationName { get; set; }

        [Required]
        public string? CustomerPhoneNumber { get; set; }

        public int VehicleTypeId { get; set; }
        public VehicleType VehicleType { get; set; }

        // Is foreign key to Driver but not adding FK in SQL
        public int DriverId { get; set; }

        public TripStatus Status { get; set; }
        public string? Notes { get; set; }
        public DateTime BookingTime { get; set; }
        public double Total { get; set; }
    }
}
