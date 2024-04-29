using Microsoft.AspNetCore.Mvc;
using tkpm_API.Services.Locations;

namespace tkpm_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationManager _locationManager;

        public LocationController(ILocationManager locationManager)
        {
            _locationManager = locationManager;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var locations = await _locationManager.GetLocation();
            return Ok(locations);
        }
    }
}
