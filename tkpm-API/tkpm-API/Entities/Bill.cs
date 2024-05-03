using System.ComponentModel.DataAnnotations;

namespace tkpm_API.Entities
{
    public class Bill
    {
        [Required]
        public int Id { get; set; }

        public int TripId { get; set; }
        public Trip Trip { get; set; }

        public double TollCost { get; set; }
        public double PlatformCost { get; set; }
        public double Surcharge { get; set; }

        [Required]
        public string? PaymentMethod { get; set; }

        public double Total { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
