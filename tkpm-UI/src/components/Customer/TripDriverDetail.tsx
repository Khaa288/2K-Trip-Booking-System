import LoadingIcon from "../Common/LoadingIcon"
import userImage from "../../assets/user.png"
import Header from "../../layouts/Header";
import { useValidatePickedUpTripQuery } from "../../apis/tripApi";
import { TripStatus } from "../../data/TripStatus";
import ConfirmModal from "../Common/ConfirmModal";

function TripDriverDetail() {
  const customerTripId = parseInt(sessionStorage.getItem('tripId')!);
  const {data: trip} = useValidatePickedUpTripQuery(customerTripId);

  return (
    <div>
      <Header />
      <ConfirmModal/>
      <div className="container">
        {
          trip?.status === TripStatus.ACCEPTED ? (
            <div className="bg-light p-5 mt-5 rounded">
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
                  Driver Name: Nguyen Van A
                </div>

                <div className="text-center fw-bold">
                  License Plate: 8QRA64
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button 
                  className="rounded border fw-bold px-3 btn btn-secondary mx-2" 
                  data-bs-toggle="modal" data-bs-target="#confirmModal"
                >
                  Cancel the trip
                </button>
              </div>
            </div>
          ) :
          trip?.status === TripStatus.PENDING ? (
            <div>
              <div className="mt-5">&nbsp;</div>
              <div className="mt-3">&nbsp;</div>
              <div className="row d-flex justify-content-center mt-5">
                <LoadingIcon />
                <div className="row d-flex justify-content-center mt-5 fw-bold h4">Waiting for Driver to accept</div>
              </div>
            </div>
          ) : 
          trip?.status === TripStatus.COMPLETED ? (
            <div className="bg-light mt-5 rounded-5 text-center p-4">
              <div>
                <i className="bi bi-check-circle-fill" style={{fontSize: "196px", color: "#77ccef"}}></i>
              </div>
              <div className="h3 p-4">
                Trip is completed
              </div>
              <div className="pb-5">
                <button 
                  className="rounded btn btn-light text-light" 
                  style={{ backgroundColor: "#8fc4b7" }}
                >
                  <a href="/customer/home" style={{textDecoration: "none", color: "inherit"}}>Book another trip</a>
                </button>
              </div>
            </div>
          ):

          (<div className="bg-light mt-5 rounded-5 text-center p-4">
              <div>
                <i className="bi bi-x-circle-fill" style={{fontSize: "196px", color: "#FAA0A0"}}></i>
              </div>
              <div className="h3 p-4">
                Trip is canceled by driver
              </div>
              <div className="pb-5">
                <button 
                  className="rounded btn btn-light text-light" 
                  style={{ backgroundColor: "#8fc4b7" }}
                >
                  <a href="/customer/home" style={{textDecoration: "none", color: "inherit"}}>Book another trip</a>
                </button>
              </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default TripDriverDetail
