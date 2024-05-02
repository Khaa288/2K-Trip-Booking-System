import { useDispatch } from "react-redux";
import { setVehicleType } from "../../store/customerTripSlices";

function VehicleTypeSelection() {
  const dispatch = useDispatch();

  const handleVehicleTypeClick = (vehicleTypeId: number) => {
    dispatch(setVehicleType({vehicleTypeId: vehicleTypeId}))
  };

  return (
    <div className="container overflow-hidden">
      <h3 className="p-5 text-center">Where do you want to go today !</h3>
      <div className="row">
        <div 
          className="col-5 btn btn-light border mx-5"
          onClick={() => handleVehicleTypeClick(1)}
        >
            <div className="text-center rounded">
                <i className="bi bi-bicycle h1"  style={{fontSize: "250px"}}></i>
                <h3>Motorbike</h3> 
            </div>
        </div>

        <div className="col-5 btn btn-light border mx-5">
            <div 
              className="text-center rounded"
              onClick={() => handleVehicleTypeClick(2)}
            >
                <i className="bi bi-car-front-fill h1" style={{fontSize: "250px"}}></i>
                <h3>Car</h3> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleTypeSelection
