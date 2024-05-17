import { useState } from "react";
import { useGetBillByTripIdQuery, useUpdateBillMutationMutation } from "../../apis/billApi"
import inputHelper from "../../helpers/inputHelper";
import Header from "../../layouts/Header";
import { useCompleteTripMutation } from "../../apis/tripApi";

function TripPayment() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const [input, setInput] = useState({
        tollCost: 0,
        subCharge: 0
    });

    const tripId = parseInt(sessionStorage.getItem("tripId")!);

    const { data: bill } = useGetBillByTripIdQuery(tripId);
    const [updateBill] = useUpdateBillMutationMutation();
    const [completeTrip] = useCompleteTripMutation();

    const handleUserInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const tempData = inputHelper(e, input);
        setInput(tempData);
    };

    const handleConfirmClick = async () => {
        if (isConfirmed) {
            setIsCompleted(!isCompleted);
            await updateBill({ billId: bill?.id, tollCost: input?.tollCost, subCharge: input?.subCharge });
            await completeTrip(tripId);
        }
        else {
            setIsConfirmed(!isConfirmed);
        }
    }

    return (
        <div>
            <Header />
            <div>
                {
                    isCompleted ? (
                        <div className="text-center mt-2">
                            <i className="bi bi-check-circle-fill" style={{ fontSize: "50px" }}></i>
                            <div className="h3 text-center">Payment Successful</div>
                        </div>
                    ) : (
                        <div className="h1 mt-5 text-center">Bill information</div>
                    )
                }

                <div className="row justify-content-center">
                    <div className="col-6 p-5">
                        <div className="row py-1">
                            <div className="col-6 fw-bold">Payment Method: </div>
                            <div className="col-6 text-end pe-5">{bill?.paymentMethod}</div>
                        </div>

                        <hr />

                        <div className="row py-1">
                            <div className="col-6 fw-bold">TripId: </div>
                            <div className="col-6 text-end pe-5">{bill?.tripId}</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Trip cost: </div>
                            <div className="col-6 text-end pe-5">{bill?.tripCost}</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Toll cost: </div>
                            <div className="col-6 text-end pe-5">
                                {
                                    isConfirmed ?
                                        (
                                            input.tollCost
                                        ) :
                                        (
                                            <div className="row row justify-content-end">
                                                <div className="col-5">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        name="tollCost"
                                                        value={input.tollCost}
                                                        onChange={handleUserInput}
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Platform cost: </div>
                            <div className="col-6 text-end pe-5">{bill?.platformCost}</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Subcharge: </div>
                            <div className="col-6 text-end pe-5">
                                {
                                    isConfirmed ?
                                        (
                                            input.subCharge
                                        ) :
                                        (
                                            <div className="row row justify-content-end">
                                                <div className="col-5">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        name="subCharge"
                                                        value={input.subCharge}
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                        onChange={handleUserInput}
                                                    />
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>

                        <hr />

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Total: </div>
                            <div className="col-6 text-end pe-5">
                                {
                                    isConfirmed ?
                                        Number(bill?.tripCost!) +
                                        Number(bill?.platformCost!) +
                                        Number(input?.tollCost) +
                                        Number(input.subCharge) : 0
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isCompleted ? (
                        <div className="col-12 text-center">
                        <button
                            className="rounded border fw-bold px-3 btn btn-light mx-2 px-5"
                        >
                            <a href="/driver/home" style={{ textDecoration: "none", color: "inherit" }}>Close</a>
                        </button>
                    </div>
                    ) : (
                        <div className="col-12 text-center p-5">
                            <button
                                className="rounded border fw-bold px-3 btn btn-light mx-2 px-4"
                                onClick={() => setIsConfirmed(false)}
                            >
                                Cancle
                            </button>

                            <button
                                className="rounded border fw-bold px-3 btn btn-light mx-2"
                                onClick={() => handleConfirmClick()}
                            >
                                Confirm
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TripPayment
