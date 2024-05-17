import { useState } from "react";
import { useNavigate } from "react-router-dom";
import inputHelper from "../helpers/inputHelper";
import { useRegisterCustomerMutation } from "../apis/authenticationApi";

function RegisterCustomer () {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    email: ""
  });
  const [isRegisterFail, setIsRegisterFail] = useState(false);

  const [registerCustomer] = useRegisterCustomerMutation();
  const navigate = useNavigate();

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleRegister = async (
    username:string, 
    email:string, 
    password:string, 
    confirmPassword:string,
    fullName: string
  ) => {
    if (password !== confirmPassword) {
      setIsRegisterFail(true);
      return;
    }

    if (username == "" || email == "" || password == "" || confirmPassword == "" || fullName == "") {
      setIsRegisterFail(true);
      return;
    }

    var response : RegisterCustomerResponse = await registerCustomer({
      fullName: fullName,
      username: username,
      email: email, 
      password: password,
      confirmPassword: confirmPassword
    })

    if (!response.error) {
      console.log(response)
      navigate('/login');
    }
  }

  return (
    <div className="vh-100 gradient-custom" style={{backgroundColor: "#8fc4b7"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">
                    Create An Account
                  </p>

                  <div className="row">
                    <div className="col col-md-6 mb-4">
                      <input
                        type="fullname"
                        id="typeFullNameX"
                        className="form-control form-control-md"
                        placeholder="Full name"
                        name="fullname"
                        value={userInput.fullname}
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

                  <div className="mb-4">
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
                      userInput.fullname
                    )}
                  >
                    Register
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Have already an account?{" "}
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
    </div>
  );
}

export default RegisterCustomer;
