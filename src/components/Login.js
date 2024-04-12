import React, { Fragment, useState } from 'react'

export default function Login() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [MSG, setMSG] = useState("")

    let LSuser = JSON.parse(localStorage.getItem("users") || "[]");
    let message="";
    const handleClick = () => {
      for (let i = 0; i < LSuser.length; i++) {
        if (LSuser[i].Email === Email) {
          if (LSuser[i].Password === Password) {
            message = "2";
            break;
          } else {
            message = "1";
            break;
          }
        } else {
          message = "0";
        }
        setMSG(message)
        console.log(message);

      }
    };

    const changeEmail = (event) => {
      setEmail(event.target.value)
    };
    const changePassword = (event) => {
      setPassword(event.target.value)
    };

    return(
    <Fragment>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mx-auto text-center">
            <h1 className="text-white">Login</h1>
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
                    Login
                  </button>
                </div>

              </form>
              <span className='text-danger'>{MSG==="0" ? "test 0" : MSG==="1" ? "test1" : "test2"}</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  )
}
