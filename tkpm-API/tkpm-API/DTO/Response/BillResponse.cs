using System.ComponentModel.DataAnnotations;
using tkpm_API.Entities;

namespace tkpm_API.DTO.Response
{
    public class BillResponse
    {
        public int Id { get; set; }
        public int TripId { get; set; }
        public double TollCost { get; set; }
        public double PlatformCost { get; set; }
        public double Surcharge { get; set; }
        public double TripCost { get; set; }
        public string? PaymentMethod { get; set; }
        public double Total { get; set; }
    }
}
