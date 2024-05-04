using Microsoft.AspNetCore.Mvc;
using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Services.Trips;

namespace tkpm_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        public readonly ITripManager _tripManager;

        public TripController(ITripManager tripManager)
        {
            _tripManager = tripManager;
        }

        [HttpGet("lastest")]
        public async Task<ActionResult<TripBookingResponse>> GetLastestTrip()
        {
            var trip = await _tripManager.GetLastestTrip();
            return trip is not null ? Ok(trip) : NotFound();
        }

        [HttpPost("book")]
        public async Task<ActionResult<TripBookingResponse>> BookTrip (TripBookingRequest request)
        {
            return Ok(await _tripManager.BookTrip(request));
        }

        [HttpPost("cancle")]
        public async Task<ActionResult<bool>> CancelTrip(int tripId)
        {
            var isTripCanceled = await _tripManager.CancelTrip(tripId);
            return isTripCanceled ? Ok(true) : NotFound(false);
        }

        [HttpPost("accept")]
        public async Task<ActionResult<bool>> AcceptTrip(int tripId, int driverId)
        {
            var isTripAccepted = await _tripManager.AcceptTrip(tripId, driverId);
            return isTripAccepted ? Ok(true) : NotFound(false);
        }

        [HttpGet("validate")]
        public async Task<ActionResult<TripBookingResponse>> ValidatePickedUpTrip(int tripId)
        {
            var pickedUpTrip = await _tripManager.ValidatePickedUpTrip(tripId);
            return Ok(pickedUpTrip);
        }
    }
}
