import react, { useState, useEffect } from "react";
import Banner from "./Banner";
import Match from './Match';
export default function Cards() {

    const [matches, setMatches] = useState([]);
    useEffect(() => {
        getAllMatches()
    }, [])

    const getAllMatches = () => {
        let LSmatches = JSON.parse(localStorage.getItem("matches") || "[]");
        setMatches(LSmatches);
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

    return (
        <div>
            <Banner name="matches" />
            <div className="container">
                <div className="row">
                    {matches.map((match, key) => (                       
                        <Match value={match} deleteParent={deleteMatches} />                  
                    ))}
                </div>
            </div>
        </div>
    );
}
