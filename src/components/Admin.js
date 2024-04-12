
import react, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const [matches, setMatches ] = useState([]);

    const hezniii = useNavigate()

    useEffect(() => {
      getAllMatches()
    },[])
    


    const getAllMatches =() => {
      console.log("here into get all matches");
      let matches = JSON.parse(localStorage.getItem("matches") || "[]");
      setMatches(matches);
    };  

    const deleteMatches = (id) =>{
        
        let LSmatches = JSON.parse(localStorage.getItem("matches") ||"[]") 
        let pos ;
        for (let i = 0; i < LSmatches.length; i++) {

            if(LSmatches[i].id === id){
                pos=i;
            }
            
        }
      
      LSmatches.splice(pos,1);
      localStorage.setItem("matches" , JSON.stringify(LSmatches));
      setMatches(LSmatches);

    };
    const fn =(id)=> {
        hezniii ('/editMatch/'+id)
    };
     
    return (
        <div>
            <div
                className="hero overlay"
                style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
             
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Admin</h1>
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
                                        <th scope="col">TeamOne</th>
                                        <th scope="col">TeamTwo</th>
                                        <th scope="col">ScoreOne</th>
                                        <th scope="col">ScoreTwo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {matches.map((match,key) => (
                                    <tr key={key}>
                                        <th scope="row">{match.id}</th>
                                        <td>{match.TeamOne}</td>
                                        <td>{match.TeamTwo}</td>
                                        <td>{match.ScoreOne}</td>
                                        <td>{match.ScoreTwo}</td>
                                        <td>
                                            <button  type="button"  className="btn btn-danger" onClick={() => deleteMatches(match.id)}>
                                              Delete </button>
                                        </td>
                                        <td>
                                            <button  type="button"  className="btn btn-info" onClick={() => fn (match.id)}>
                                              Edit</button>
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
    );
}
