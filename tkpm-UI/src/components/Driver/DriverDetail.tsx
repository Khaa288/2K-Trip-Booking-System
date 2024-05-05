import { useDispatch } from 'react-redux';
import userImage from '../../assets/user.png';
import { setDriverConnect } from '../../store/driverTripSlices';

function DriverDetail() {
    const driver : UserInfo = JSON.parse(sessionStorage.getItem("user")!);
    const dispatch = useDispatch();

    const handleConnect = () => {
        sessionStorage.setItem("isConnecting", true.toString());
        dispatch(setDriverConnect())
    }

    return (
        <div>
            <div className="container">
                <div className="bg-light p-5 mt-5 rounded">
                    <div className="text-center mb-4">
                        <h3>Welcome back!</h3>
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                        <img src={userImage} alt="" style={{ width: "150px", height: "150px" }} />
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                        <i className="bi bi-star-fill"></i>{" "}5,0
                    </div>

                    <div className="row mb-4">
                        <div className="text-center fw-bold">
                            Driver: {driver.username}
                        </div>

                        <div className="text-center fw-bold">
                            License Plate: 8QRA64
                        </div>
                    </div>

                    <div 
                        className="d-flex justify-content-center" 
                    >
                        <button 
                            style={{backgroundColor: "#8fc4b7"}}
                            className="rounded-pill border px-3 py-2 text-light"    
                            onClick={() => handleConnect()}
                        >
                            <i className="bi bi-power"></i>{" "}Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverDetail