import { useNavigate } from "react-router-dom";
import { useCancelTripMutation } from "../../apis/tripApi";

function ConfirmModal() {
    const tripId = parseInt(sessionStorage.getItem('tripId')!);
    const user : UserInfo = JSON.parse(sessionStorage.getItem("user")!);
    const [cancelTrip] = useCancelTripMutation();
    const navigate = useNavigate();

    const handleCancelClick = async () => {
        await cancelTrip(tripId);
        
        if(user.roleId === 2) {
            navigate('/customer/home')
        }

        if(user.roleId === 3) {
            navigate('/driver/home')
        }
    }

    return (
        <div>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            <div className="modal fade" id="confirmModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cancle trip</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You want to cancel the trip ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleCancelClick()}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
