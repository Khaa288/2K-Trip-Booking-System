import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../apis/authenticationApi";

function Login() {
  const [username, setUsername] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleLogin = async (username: string, password: string) => {
    const response : LoginResponse = await login({
      username: username,
      password: password
    })

    if (response.data) {
      sessionStorage.setItem("user", JSON.stringify(response.data))
      console.log(response.data)
      if (response.data.roleId === 1) {
        navigate("/admin/home")
      }

      if (response.data.roleId === 2) {
        navigate("/customer/home")
      }

      if (response.data.roleId === 3) {
        navigate("/driver/home")
      }

      if (response.data.roleId === 4) {
        navigate("/operator/home")
      }
    }
    else if (response.error) {
      console.log(response.error);
    }
  };

  return (
    <div>
    <section className="vh-100 gradient-custom" style={{backgroundColor: "#8fc4b7"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control form-control-md"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {setUsername(e.target.value)}}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control form-control-md"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {setPassword(e.target.value)}}
                    />
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={() => handleLogin(username, password)}
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="/customer/register" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>

                  <p className="mb-0">
                    Or want to be our partner?{" "}
                    <a href="/driver/register" className="text-white-50 fw-bold">
                      Click here
                    </a>
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;
