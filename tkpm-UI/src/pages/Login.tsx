import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username == 'admin' && password == '123') {
      navigate('/home');
    }
  };

  return (
    <div>
    <section className="vh-100 gradient-custom" style={{
        background: "#6a11cb linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
    }}>
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
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={username}
                      onChange={(e) => {setUsername(e.target.value)}}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
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
                    <a href="/register" className="text-white-50 fw-bold">
                      Sign Up
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
