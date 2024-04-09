import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [confirmPassword, setConfirmPasswrd] = useState(() => "");
  const [email, setEmail] = useState(() => "");

  const handleRegister = async (username:string, email:string, password:string, confirmPassword:string) => {
    var response = await axios.post(
      `${import.meta.env.VITE_API_URL}/Auth/register`, 
      null, 
      { 
        params: { 
          username: username,
          email: email, 
          password: password,
          confirmPassword: confirmPassword
        } 
      }
    );

    if (response.status === 200) {
      console.log("hihi");
    }
  }

  return (
    <section className="vh-100 gradient-custom" style={{
        background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"
    }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
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
                        onChange={e => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="col col-md-6 mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-md"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-md"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="typeConfirmPasswordX"
                      className="form-control form-control-md"
                      placeholder="Confirm Password"
                      onChange={e => setConfirmPasswrd(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={() => handleRegister(username, email, password, confirmPassword)}
                  >
                    Register
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    If you have your account?{" "}
                    <a href="/" className="text-white-50 fw-bold">
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

export default Register;
