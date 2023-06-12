import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Signup = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  // Get form values
  const [firstname,setFirstname] = useState()
  const [lastname,setLastname] = useState()
  const [email,setEmail] = useState()
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  const handleRegister = (event) => {
    event.preventDefault();
    

    // Call register function from AuthContext
    register(firstname, lastname, email, username, password);
    // navigate('/',{ replace: true });
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-dark primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> Register
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title align-text-center" id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Firstname
                  </label>
                  <input onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    name="firstname"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Lastname
                  </label>
                  <input onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    name="lastname"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Username
                  </label>
                  <input onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    name="username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                  />
                </div>
                {/* <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div> */}
                <button type="submit" className="btn btn-dark w-100 mt-5">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
