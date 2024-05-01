import LoadingIcon from "../Common/LoadingIcon"
import userImage from "../../assets/user.png"

function TripDriverDetail() {
  return (
    <div className="container">
      <div className="bg-light p-5 mt-5 rounded">
        <div className="text-center mb-4">
          <h3>Driver Information</h3>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <img src={userImage} alt="" style={{width: "150px", height: "150px" }}/>
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
          <button className="rounded border fw-bold px-3 btn btn-secondary mx-2">
              Cancle the trip
          </button>
        </div>
      </div>

        <div className="mt-5">&nbsp;</div>
        <div className="mt-3">&nbsp;</div>
        <div className="row d-flex justify-content-center mt-5">
            <LoadingIcon/>
            <div className="row d-flex justify-content-center mt-5 fw-bold h4">Waiting for Driver to accept</div>
        </div>
    </div>
  )
}

export default TripDriverDetail
