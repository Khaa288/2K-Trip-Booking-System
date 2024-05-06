import { useCancelTripMutation, useGetTripByIdQuery, useValidatePickedUpTripQuery } from "../../apis/tripApi";
import { TripStatus } from "../../data/TripStatus";
import Header from "../../layouts/Header";

function DriverPickUp() {
  const tripId = parseInt(sessionStorage.getItem('tripId')!);
  const { data: trip } = useValidatePickedUpTripQuery(tripId);
  const { data: tripWithCustomer} = useGetTripByIdQuery(tripId);
  const [cancelTrip] = useCancelTripMutation();

  const handleCancelClick = async () => {
    await cancelTrip(tripId);
  }

  return (
    <div>
      <Header />
      <div className="container">
        {
          trip?.status === TripStatus.CANCELED ? (
            <div className="bg-light mt-5 rounded-5 text-center p-4">
              <div>
                <i className="bi bi-x-circle-fill" style={{ fontSize: "208px", color: "#FAA0A0" }}></i>
              </div>
              <div className="h3 p-4">
                Trip is Canceled by customer
              </div>
            </div>
          ) : (
            <div className="bg-light mt-5 py-5 rounded-5">
              <div className="container">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="card text-center py-3" style={{ width: "33rem" }}>
                      <div className="card-body">
                        <div className="py-4">
                          <i className="bi bi-person-circle" style={{ fontSize: "2.1rem" }}></i>
                        </div>
                        <h5 className="card-title">Customer</h5>
                        <div>Name: {tripWithCustomer?.customerFullName ? tripWithCustomer.customerFullName : "Nguyen Van A"}</div>
                        <div>Phone number: {tripWithCustomer?.customerPhoneNumber ? tripWithCustomer.customerPhoneNumber : "0123456789"}</div>
                      </div>
                    </div>
                  </div>

                  <div className="col d-flex justify-content-center">
                    <div className="card text-center py-3" style={{ width: "33rem" }}>
                      <div className="card-body">
                        <div className="py-4">
                          <i className="bi bi-geo-alt-fill" style={{ fontSize: "2.1rem" }}></i>
                        </div>
                        <h5 className="card-title">Trip {tripWithCustomer?.id}</h5>
                        <div>From:  {tripWithCustomer?.startPosition}</div>
                        <div>To:  {tripWithCustomer?.endPosition}</div>
                        <div>Notes: {tripWithCustomer?.notes}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-5">
                <button
                  className="rounded btn btn-light text-light"
                  style={{ backgroundColor: "#8fc4b7" }}
                >
                  <a href="/driver/payment" style={{ textDecoration: "none", color: "inherit" }}>Pick up customer</a>
                </button>
              </div>
            </div>
          )
        }
      </div>

      <div className="bg-dark mt-5 p-3 text-center">
        <div className="row">
          <div className="col">
            <button className="rounded-circle border border-dark border-3 py-3 px-4">
              <i className="bi bi-telephone-fill"></i>
            </button>
          </div>
          <div className="col">
            <button className="rounded-circle border border-dark border-3 py-3 px-4">
              <i className="bi bi-chat-square-fill"></i>
            </button>
          </div>

          {
            trip?.status === TripStatus.ACCEPTED && (
              <div className="col">
                <button
                  className="rounded-circle border border-dark border-3 py-3 px-4"
                  onClick={() => handleCancelClick()}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default DriverPickUp
