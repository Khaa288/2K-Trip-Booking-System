import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterDriverMutation } from "../apis/authenticationApi";
import inputHelper from "../helpers/inputHelper";
import { useGetLocationsQuery } from "../apis/locationApi";
import { useGetVehicleTypesQuery } from "../apis/vehicleTypeApi";

function RegisterDriver() {
  const [registerLocation, setRegisterLocation] = useState({id: 0, name: ""});
  const [registerVehicle, setRegisterVehicle] = useState({id: 0, name: ""});
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: ""
  });
  const [isRegisterFail, setIsRegisterFail] = useState(false);

  const { data: locations } = useGetLocationsQuery();
  const { data: vehicleTypes } = useGetVehicleTypesQuery();
  const [registerDriver] = useRegisterDriverMutation();

  const navigate = useNavigate();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleRegister = async (
    username:string, 
    email:string, 
    password:string, 
    confirmPassword:string,
    registerVehicle:number,
    registerLocation:number
  ) => {
    if (password !== confirmPassword) {
      setIsRegisterFail(true);
      return;
    }

    if (username == "" || 
        email == "" || 
        password == "" || 
        confirmPassword == "" || 
        registerVehicle === 0 || 
        registerLocation === 0
    ) {
      setIsRegisterFail(true);
      return;
    }

    var response : RegisterCustomerResponse = await registerDriver({
      fullname: "",
      username: username,
      email: email, 
      password: password,
      confirmPassword: confirmPassword,
      registerVehicleId: registerVehicle,
      registerLocationId: registerLocation
    })

    if (!response.error) {
      console.log(response)
      navigate('/login');
    }
  }

  return (
    <section className="vh-100 gradient-custom" style={{backgroundColor: "#8fc4b7"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-6 col-md-8 col-lg-6 col-xl-8">
            <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-3">
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">
                    Create An Account
                  </p>

                  <div className="row">
                    <div className="col col-md-6 mb-4">
                      <input
                        type="username"
                        id="typeUsernameX"
                        className="form-control form-control-md"
                        placeholder="Username"
                        name="username"
                        value={userInput.username}
                        onChange={handleUserInput}
                      />
                    </div>

                    <div className="col col-md-6 mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-md"
                        placeholder="Email"
                        name="email"
                        value={userInput.email}
                        onChange={handleUserInput}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col-md-6 mb-4">
                      <div className="dropdown">
                        <button 
                          className="btn dropdown-toggle text-secondary form-control form-control-md" 
                          type="button" 
                          id="dropdownMenuButton" 
                          data-bs-toggle="dropdown" 
                          style={{backgroundColor: "white", textAlign: "left"}}
                        >
                          {registerVehicle.name !== "" ? registerVehicle.name : "Vehicle Type"}
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
                                    onClick={(e) => setRegisterVehicle({id: parseInt(e.currentTarget.id), name: e.currentTarget.value})}
                                  >
                                      {value.name}
                                  </button>)
                              })
                            }
                          </div>
                        </div>
                      </div>

                      <div className="col col-md-6 mb-4">
                      <div className="dropdown">
                        <button 
                          className="btn dropdown-toggle text-secondary form-control form-control-md" 
                          type="button" 
                          id="dropdownMenuButton" 
                          data-bs-toggle="dropdown" 
                          style={{backgroundColor: "white", textAlign: "left"}}
                        >
                          {registerLocation.name !== "" ? registerLocation.name : "Register Location"}
                        </button>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          {
                            locations?.map((value) => {
                              return (
                                <button 
                                  className="dropdown-item"
                                  key={value.id}
                                  id={value.id.toString()}
                                  value={value.name}
                                  onClick={(e) => setRegisterLocation({id: parseInt(e.currentTarget.id), name: e.currentTarget.value})}
                                >
                                  { value.name }
                                </button>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-md"
                      placeholder="Password"
                      name="password"
                      value={userInput.password}
                      onChange={handleUserInput}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="typeConfirmPasswordX"
                      className="form-control form-control-md"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={userInput.confirmPassword}
                      onChange={handleUserInput}
                    />
                  </div>

                  { isRegisterFail && <div className="mb-3 text-danger">Some fields are missing please try again</div> }

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={() => handleRegister(
                      userInput.username, 
                      userInput.email, 
                      userInput.password, 
                      userInput.confirmPassword, 
                      registerVehicle.id, 
                      registerLocation.id)}
                  >
                    Register
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    If you have your account?{" "}
                    <a href="/login" className="text-white-50 fw-bold">
                      Login
                    </a>
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterDriver;
