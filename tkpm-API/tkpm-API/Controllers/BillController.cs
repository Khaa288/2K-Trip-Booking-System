using Microsoft.AspNetCore.Mvc;
using tkpm_API.DTO.Response;
using tkpm_API.Services.Bills;

namespace tkpm_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillController : ControllerBase
    {
        private readonly IBillManager _billManager;

        public BillController(IBillManager billManager)
        {
            _billManager = billManager;
        }

        [HttpGet]
        public async Task<ActionResult<BillResponse>> GetBillByTripId(int tripId)
        {
            return Ok(await _billManager.GetBillByTripId(tripId));
        }

        [HttpPut]
        public async Task<ActionResult<bool>> UpdateBill(int billId, double tollCost, double subCharge)
        {
            return await _billManager.UpdateBill(billId, tollCost, subCharge) ? Ok(true) : BadRequest(false);
        }
    }
}
