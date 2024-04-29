using Microsoft.AspNetCore.Mvc;
using tkpm_API.Services.VehicleTypes;

namespace tkpm_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleTypeController : ControllerBase
    {
        private readonly IVehicleTypeManager _vehicleManager;

        public VehicleTypeController(IVehicleTypeManager vehicleManager)
        {
            _vehicleManager = vehicleManager;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var vehicleTypes = await _vehicleManager.GetVehicleTypes();
            return Ok(vehicleTypes);
        }
    }
}
