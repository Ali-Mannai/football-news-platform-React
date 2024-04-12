import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from "./Banner";

export default function Signup() {

  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const nav = useNavigate()

  const handleClick = () => {
    let data = {
      FirstName:FirstName,
      LastName:LastName,
      Email:Email,
      Password: Password,
    }
    console.log(data);

    let userId = JSON.parse(localStorage.getItem("userId") || "1");
    data.id = userId
    let LSuser = JSON.parse(localStorage.getItem("users") || "[]");
    LSuser.push(data);
    localStorage.setItem("users", JSON.stringify(LSuser));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
    nav('/Login/');
  };


  const changeFirstName = (event) => {
    setFirstName(event.target.value)
  };
  const changeLastName = (event) => {
    setLastName(event.target.value)
  };
  const changeEmail = (event) => {
    setEmail(event.target.value)
  };
  const changePassword = (event) => {
    setPassword(event.target.value)
  };

  return (
    <div>
      {/*<Banner name="signup" />*/}

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mx-auto text-center">
            <h1 className="text-white"> Sign up</h1>
          </div>
        </div>
      </div>
      <div className="site-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"

                    onChange={changeFirstName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"

                    onChange={changeLastName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={changeEmail}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    onChange={changePassword}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary py-3 px-5"
                    onClick={handleClick}
                  >
                    Sign up
                  </button>
                </div>

              </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
