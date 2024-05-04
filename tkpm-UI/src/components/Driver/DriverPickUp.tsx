function DriverPickUp() {
  return (
    <div>
      <div className="container">
        <div className="bg-light mt-5 rounded-5">
          <div className="h2 text-dark text-center rounded-top-5 p-3" style={{ backgroundColor: "#e3dede" }}>Pick up customer</div>
          <div className="row py-4 rounded text-center">
            <div className="h5 mt-2">From</div>
            <div className="h3">Quan 10, TPHCM</div>
            <div className="h5 mt-2">To</div>
            <div className="h3">Quan 1, TPHCM</div>
            <div className="h4 p-2">Customer: Huynh Vi Khang</div>
          </div>
          <div className="row text-center p-4">
            <div>
              <button className="rounded btn btn-light text-light" style={{backgroundColor: "#8fc4b7"}}>Customer Pick Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-dark mt-5 p-3 text-center">
        <div className="col-4">
          <button className="rounded-circle border border-dark border-3 py-3 px-4">
            <i className="bi bi-telephone-fill"></i>
          </button>
        </div>
        <div className="col-4">
          <button className="rounded-circle border border-dark border-3 py-3 px-4">
            <i className="bi bi-chat-square-fill"></i>
          </button>
        </div>
        <div className="col-4">
          <button className="rounded-circle border border-dark border-3 py-3 px-4">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DriverPickUp
