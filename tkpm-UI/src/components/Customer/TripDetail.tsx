import { useDispatch, useSelector } from "react-redux"
import { setIsTripDetailConfirmed, setIsTripDetailSelected, setLocationCoordinates, setLocationName, setNotes, setPaymentMethod, setVehicleType } from "../../store/customerTripSlices";
import { RootState } from "../../store/store"
import { useNavigate } from "react-router-dom";
import { useBookTripMutation } from "../../apis/tripApi";

function TripDetail() {
    const startPosition = useSelector((state: RootState) => state.customerTripStore.StartPosition);
    const endPosition = useSelector((state: RootState) => state.customerTripStore.EndPosition);
    const paymentMethod = useSelector((state: RootState) => state.customerTripStore.PaymentMethod);
    const vehicleType = useSelector((state: RootState) => state.customerTripStore.VehicleTypeId);
    const notes = useSelector((state: RootState) => state.customerTripStore.Notes);

    const [bookTrip] = useBookTripMutation();
    const navigate = useNavigate();

    const user : UserInfo = JSON.parse(sessionStorage.getItem("user")!)

    const dispatch = useDispatch();
    const handleCancelClick = () => {
        dispatch(setVehicleType({vehicleTypeId: null}));
        dispatch(setLocationCoordinates({startPositionCoordinates: null, endPositionCoordinates: null}));
        dispatch(setLocationName({startPosition: null, endPosition: null}));
        dispatch(setPaymentMethod({paymentMethod: null}));
        dispatch(setNotes({notes: null}));
        dispatch(setIsTripDetailSelected({isTripDetailSelected: false}));
        dispatch(setIsTripDetailConfirmed({isTripDetailConfirmed: false}));
    }

    const handleTripBooking = async () => {
        const response : TripMutationResponse = await bookTrip({
            customerId: user.id,
            vehicleTypeId: vehicleType,
            startPosition: startPosition,
            endPosition: endPosition,
            notes: notes,
            paymentMethod: paymentMethod
        });

        console.log(response.data);

        sessionStorage.setItem("tripId", response.data?.id.toString()!)
        dispatch(setIsTripDetailConfirmed({isTripDetailConfirmed: true}));
        navigate('/customer/trip')
    }

    return (
        <div>
            <div className="h1 mt-5 text-center">Trip information</div>

            <div className="row justify-content-center">
                <div className="col-6 p-5">
                    <div className="row py-1">
                        <div className="col-6 fw-bold">Origin Location: </div>
                        <div className="col-6 text-end pe-5">{startPosition}</div>
                    </div>

                    <div className="row py-1">
                        <div className="col-6 fw-bold">Destination Location: </div>
                        <div className="col-6 text-end pe-5">{endPosition}</div>
                    </div>

                    <hr />

                    {/* <div className="row py-1">
                        <div className="col-6 fw-bold">TripId: </div>
                        <div className="col-6 text-end pe-5">1</div>
                    </div> */}

                    <div className="row py-2">
                        <div className="col-6 fw-bold">Payment Method: </div>
                        <div className="col-6 text-end pe-5">{paymentMethod}</div>
                    </div>

                    <div className="row py-2">
                        <div className="col-6 fw-bold">Notes: </div>
                        <div className="col-6 text-end pe-5">{notes}</div>
                    </div>

                    <div className="row py-2">
                        <div className="col-6 fw-bold">Total: </div>
                        <div className="col-6 text-end pe-5">100000đ</div>
                    </div>
                </div>
            </div>
            

            <div className="col-12 text-center p-5 mt-5">
                <button 
                    className="rounded border fw-bold px-3 btn btn-light mx-2 px-4"
                    onClick={() => handleCancelClick()}
                >
                    Cancle
                </button>

                <button
                    className="rounded border fw-bold px-3 btn btn-light mx-2"
                    onClick={() => handleTripBooking()}
                >
                    Book a trip
                </button>
            </div>
        </div>
    )
}

export default TripDetail
