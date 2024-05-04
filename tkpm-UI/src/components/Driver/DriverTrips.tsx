import userImage from '../../assets/user.png';
import streetMap from '../../assets/street.png';
import { useDispatch } from 'react-redux';
import { setDriverAcceptTrip, setDriverConnect } from '../../store/driverTripSlices';
import { useAcceptTripMutation, useGetLastestTripQuery } from '../../apis/tripApi';

function DriverTrips() {
  const driver : UserInfo = JSON.parse(localStorage.getItem("user")!);

  const dispatch = useDispatch();
  const {data: response} = useGetLastestTripQuery();
  const [acceptTrip] = useAcceptTripMutation();

  const handleAcceptTrip = async (tripId: number, driverId: number) => {
    await acceptTrip({driverId: driverId, tripId: tripId});
    dispatch(setDriverAcceptTrip(true));
  }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="bg-light p-5 mt-5 rounded col-6">
                    <div className="text-center mb-4">
                        <h3>Driver Information</h3>
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                        <img src={userImage} alt="" style={{ width: "150px", height: "150px" }} />
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                        <i className="bi bi-star-fill"></i>{" "}5,0
                    </div>

                    <div className="row mb-4">
                        <div className="text-center fw-bold">
                            Driver Name: {driver.username}
                        </div>

                        <div className="text-center fw-bold">
                            License Plate: 8QRA64
                        </div>
                    </div>

                    <div 
                        className="d-flex justify-content-center pt-3" 
                    >
                        <button 
                            style={{backgroundColor: "#FAA0A0"}}
                            className="rounded-pill border border-light px-3 py-2 text-light"   
                            onClick={() => dispatch(setDriverConnect(false))} 
                        >
                            <i className="bi bi-power"></i>{" "}Disconnect
                        </button>
                    </div>
                </div>

                <div className="col-1"></div>

                <div className="bg-light p-5 mt-5 rounded col-5 d-flex justify-content-center">
                    {
                        response ? (
                            <div className="card text-center" style={{width: "24rem"}}>
                                <img className="card-img-top" src={streetMap} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Trip {response.id}</h5>
                                    <div>From: {response.startPosition}</div>
                                    <div>To: {response.endPosition}</div>
                                    <div>Notes: {response.notes}</div>
                                    <button 
                                        className="btn btn-light mt-2 px-4 text-light" 
                                        style={{backgroundColor: "#8fc4b7"}}
                                        onClick={() => handleAcceptTrip(response.id, driver.id)}
                                    >
                                        Accept
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='h1'>hehe</div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DriverTrips
