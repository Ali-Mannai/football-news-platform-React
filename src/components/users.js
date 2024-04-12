import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])
   useEffect(() => {
      getAllUsers()

   }, [])

  const getAllUsers = ()=>{
    let LSuser=JSON.parse(localStorage.getItem("users") || "[]" );
    setUsers(LSuser)

  }
  return (
    <div>
         <div
                className="hero overlay"
                style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
             
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Users</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="site-section" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                        <th scope="col">FirstName</th>
                                        <th scope="col">LastName</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                    </tr>
                                </thead>
                                                                        
                                <tbody>
                                  {LSuser.map((LSuser,key) => (
                                    <tr key={key}>
                                        <th scope="row">{LSuser.id}</th>
                                        <td>{LSuser.FirstName}</td>
                                        <td>{LSuser.LastName}</td>
                                        <td>{LSuser.Email}</td>
                                        <td>{LSuser.Password}</td>                           
                                    </tr>
                                  
                                   
                                  ))}  
                                   
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}
