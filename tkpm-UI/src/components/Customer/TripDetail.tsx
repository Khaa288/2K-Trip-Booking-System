function TripDetail() {
    return (
        <div>
            <div className="h1 mt-5 text-center">Trip information</div>

            <div className="row justify-content-center">
                <div className="col-6 p-5">
                    <div className="row py-1">
                        <div className="col-6 fw-bold">Origin Location: </div>
                        <div className="col-6 text-end pe-5">Sài Gòn quận 1 Nguyễn Văn Cừ</div>
                    </div>

                    <div className="row py-1">
                        <div className="col-6 fw-bold">Destination Location: </div>
                        <div className="col-6 text-end pe-5">Hà nội quận 10 Nguyễn Văn Cừ</div>
                    </div>

                    <hr />

                    <div className="row py-1">
                        <div className="col-6 fw-bold">TripId: </div>
                        <div className="col-6 text-end pe-5">1</div>
                    </div>

                    <div className="row py-1">
                        <div className="col-6 fw-bold">Payment Method: </div>
                        <div className="col-6 text-end pe-5">Tiền mặt</div>
                    </div>

                    <div className="row py-1">
                        <div className="col-6 fw-bold">Notes: </div>
                        <div className="col-6 text-end pe-5">Chạy từ từ, Chạy từ từ, Chạy từ từ, Chạy từ từ, Chạy từ từ</div>
                    </div>

                    <div className="row py-1">
                        <div className="col-6 fw-bold">Total: </div>
                        <div className="col-6 text-end pe-5">100000đ</div>
                    </div>
                </div>
            </div>
            

            <div className="col-12 text-center p-5">
                <button className="rounded border fw-bold px-3 btn btn-light mx-2 px-4">
                    Cancle
                </button>

                <button
                    className="rounded border fw-bold px-3 btn btn-light mx-2"
                >
                    Book a trip
                </button>
            </div>
        </div>
    )
}

export default TripDetail
