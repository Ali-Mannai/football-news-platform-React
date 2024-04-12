import React, { useState , useEffect} from 'react'
import {  useNavigate, } from 'react-router-dom';

export default function Tableplayers() {
    const [players, setPlayers ] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        getAllPlayers()
      },[])
      
  
  
      const getAllPlayers =() => {
        console.log("here into get all Players");
        let players = JSON.parse(localStorage.getItem("players") || "[]");
        setPlayers(players);
      };  
      
     
     
      const deleteplayer = (id) =>{
          let LSplayers = JSON.parse(localStorage.getItem("players") || "[]")
          let pos;
           for (let i = 0; i < LSplayers.length; i++) {
              if (LSplayers[i].id === id){
                pos=i;
              } 
            
           }
        LSplayers.splice(pos,1);
      localStorage.setItem("players" , JSON.stringify(LSplayers));
       setPlayers(LSplayers);
       
      }
      const Editplayer = (id) => {
        navigate ('/editplayer/'+id)
      };
      
  return (
    <div>
           <div
                className="hero overlay"
                style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
             
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Table players</h1>
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
                                    <th scope="col">player-Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Poste</th>
                                    </tr>
                                </thead>

                                <tbody>
                                  {players.map((Players,key) => (
                                    <tr key={key}>
                                        <th scope="row">{Players.id}</th>
                                        <td>{Players.Name}</td>
                                        <td>{Players.Age}</td>
                                        <td>{Players.Poste}</td>
                                        <td>
                                            <button  type="button"  className="btn btn-danger" onClick={() => deleteplayer(players.id)}>
                                              Delete </button>
                                        </td>
                                        <td>
                                            <button  type="button"  className="btn btn-info" onClick={() => Editplayer(players.id)}>
                                              Edit </button>
                                        </td>
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
