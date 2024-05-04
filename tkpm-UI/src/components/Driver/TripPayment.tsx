function TripPayment() {
    return (
        <div>
            <div>
                <div className="h1 mt-5 text-center">Bill information</div>

                <div className="row justify-content-center">
                    <div className="col-6 p-5">
                        <div className="row py-1">
                            <div className="col-6 fw-bold">Payment Method: </div>
                            <div className="col-6 text-end pe-5">Cash</div>
                        </div>

                        <hr />

                        <div className="row py-1">
                            <div className="col-6 fw-bold">TripId: </div>
                            <div className="col-6 text-end pe-5">1</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Trip cost: </div>
                            <div className="col-6 text-end pe-5">100000đ</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Toll cost: </div>
                            <div className="col-6 text-end pe-5">100000đ</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Platform cost: </div>
                            <div className="col-6 text-end pe-5">100000đ</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Subcharge: </div>
                            <div className="col-6 text-end pe-5">100000đ</div>
                        </div>

                        <hr />

                        <div className="row py-1">
                            <div className="col-6 fw-bold">Total: </div>
                            <div className="col-6 text-end pe-5">100000đ</div>
                        </div>
                    </div>
                </div>


                <div className="col-12 text-center p-5">
                    <button
                        className="rounded border fw-bold px-3 btn btn-light mx-2 px-4"
                    >
                        Cancle
                    </button>

                    <button
                        className="rounded border fw-bold px-3 btn btn-light mx-2"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TripPayment
