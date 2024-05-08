import { useState } from "react";
import { useGetVehicleTypesQuery } from "../apis/vehicleTypeApi";
import inputHelper from "../helpers/inputHelper";

function OperatedTrip() {
  const [vehicle, setVehicle] = useState({ id: 0, name: "" });
  const [userInput, setUserInput] = useState({
    name: "",
    location: "",
    phone: "",
    notes: ""
  });

  const { data: vehicleTypes } = useGetVehicleTypesQuery();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = () => {
    console.log(userInput);
    console.log(vehicle);
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between px-5">
        <a className="navbar-brand" href="/">
          2K Home
        </a>

        <a
          className="navbar-item"
          href="/login"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <button className="btn btn-outline-success px-3" style={{ color: "#8fc4b7" }}>Login</button>
        </a>
      </nav>

      <div className="row p-5">
        <div className="col-4 px-5">
          <h1>Welcome to 2K <br /> where do you want to go today?</h1>
        </div>

        <div className="container col-8 bg-dark text-light p-5 rounded">
          <div className="form-floating">
            <div className="mb-3">
              <label className="form-label">Customer name</label>
              <input type="text" className="form-control" onChange={handleUserInput} name="name" value={userInput.name}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone number</label>
              <input type="text" className="form-control" onChange={handleUserInput} name="phone" value={userInput.phone}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Position</label>
              <input type="text" className="form-control" onChange={handleUserInput} name="location" value={userInput.location}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Vehicle Type</label>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle text-secondary form-control form-control-md"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  style={{ backgroundColor: "white", textAlign: "left" }}
                >
                  {vehicle.name !== "" ? vehicle.name : "Choose"}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {
                    vehicleTypes?.map((value) => {
                      return (
                        <button
                          className="dropdown-item"
                          key={value.id}
                          id={value.id.toString()}
                          value={value.name}
                          onClick={(e) => setVehicle({ id: parseInt(e.currentTarget.id), name: e.currentTarget.value })}
                        >
                          {value.name}
                        </button>)
                    })
                  }
                </div>
              </div>
            </div>


            <div className="mb-3">
              <label className="form-label">Notes</label>
              <input type="text" className="form-control" onChange={handleUserInput} name="notes" value={userInput.notes}/>
            </div>

            <div className="text-center p-2">
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OperatedTrip
