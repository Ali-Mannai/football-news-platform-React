import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Addplayers() {
  const params = useParams();
  const navigate = useNavigate();
  
  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")
  const [Poste, setPoste] = useState("")
  const  [title, setTitle] = useState("")

  useEffect( () => {
    console.log("here use params", params.id);
    if (params.id) {
      setTitle("Edit")
      let players = JSON.parse(localStorage.getItem("players") || "[]" );
      for (let i = 0; i < players.length; i++) {
         if(players[i].id == params.id) {
          setName(players[i].Name)
          setAge(players[i].Age)
          setPoste(players[i].Poste)

         }
        
      }
    } else {

      setTitle("ADD");

    }

  }, [])

  

  const handleClick = () => {
    if (params.id) {
      //edit players 
      let data = {
        id: params.id,
        Name:Name,
        Age:Age,
       Poste:Poste, 

      }
      let players = JSON.parse(localStorage.getItem("players") || "[]");
      for (let i = 0; i < players.length; i++) {
       if (players[i].id === params.id ) {
         players[i] = data;
        }
        }
    localStorage.setItem("players", JSON.stringify(players));
     navigate("/Tableplayers");

    } else {
    let data ={
       Name:Name,
       Age:Age,
       Poste:Poste, 
    }
    console.log(typeof data);
    let playerId = JSON.parse(localStorage.getItem("playerId") || "1");
    data.id=playerId
    let players = JSON.parse(localStorage.getItem("players") || "[]");
    players.push(data);
    console.log(players);
    localStorage.setItem("players",JSON.stringify(players));
    localStorage.setItem("playerId",JSON.stringify(playerId+1));
  }
  };
  const changeName = (event) => {
    setName(event.target.value)
  };
  const changeAge = (event) => {
    setAge(event.target.value)
  };
  const changePoste = (event) => {
    setPoste(event.target.value)
  };  



  return (
    <div>
        <div>
      <div
        className="hero overlay"
        style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 mx-auto text-center">
              <h1 className="text-white"> {title} players</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={Name}
                    onChange={changeName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    value={Age} 
                    onChange={changeAge}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Poste"
                    value={Poste}
                    onChange={changePoste}
                  />
                </div>
                
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary py-3 px-5"
                    onClick={handleClick}
                  >
                    {title} players
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
