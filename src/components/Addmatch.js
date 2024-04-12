import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddMatch() {
  
  const params = useParams();
  const navigate = useNavigate();

  const [TeamOne, setTeamOne] = useState("")
  const [TeamTwo, setTeamTwo] = useState("")
  const [ScoreOne, setScoreOne] = useState("")
  const [ScoreTwo, setScoreTwo] = useState("")
  const [title, setTitle] = useState("")

  
  useEffect(() => {
    console.log("here use params", params.id);
    if (params.id) {
      setTitle("Edit");
      let matches = JSON.parse(localStorage.getItem("matches") || "[]");
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].id == params.id) {
          console.log("matches[i]", matches[i]);
          setTeamOne(matches[i].TeamOne)
          setTeamTwo(matches[i].TeamTwo)
          setScoreOne(matches[i].ScoreOne)
          setScoreTwo(matches[i].ScoreTwo)
        }

      }

    } else {
      setTitle("Add");

    }

  }, [])




  const handleClick = () => {
    if (params.id) {
      //EDIT MATCH
      let data = {
        id: params.id,
        TeamOne: TeamOne,
        TeamTwo: TeamTwo,
        ScoreOne: ScoreOne,
        ScoreTwo: ScoreTwo,
      }
      let matches = JSON.parse(localStorage.getItem("matches") || "[]");
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].id == params.id) {
          matches[i] = data;
        }
      }

      localStorage.setItem("matches", JSON.stringify(matches));
      navigate("/admin");

    } 
    else {
      //ADD MATCH
      let data = {
        TeamOne: TeamOne,
        TeamTwo: TeamTwo,
        ScoreOne: ScoreOne,
        ScoreTwo: ScoreTwo,
      }
      console.log(typeof data);
      let matchId = JSON.parse(localStorage.getItem("matchId") || "1");
      data.id = matchId
      let matches = JSON.parse(localStorage.getItem("matches") || "[]");
      matches.push(data);
      console.log(matches);
      localStorage.setItem("matches", JSON.stringify(matches));
      localStorage.setItem("matchId", JSON.stringify(matchId + 1));
    }



    //let T=[]
    //T.push(data)    
    //localStorage.setItem("matches",JSON.stringify(T))

  };

  const changeTeamOne = (event) => {
    setTeamOne(event.target.value)
  };
  const changeTeamTwo = (event) => {
    setTeamTwo(event.target.value)
  };
  const changeScoreOne = (event) => {
    setScoreOne(event.target.value)
  };
  const changeScoreTwo = (event) => {
    setScoreTwo(event.target.value)
  };
  return (
    <div>
      <div
        className="hero overlay"
        style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 mx-auto text-center">
              <h1 className="text-white">{title} Match</h1>
            </div>
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
                    placeholder="team one"
                    value={TeamOne}
                    onChange={changeTeamOne}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="team two"
                    value={TeamTwo}
                    onChange={changeTeamTwo}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="score one"
                    value={ScoreOne}
                    onChange={changeScoreOne}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="score two"
                    value={ScoreTwo}
                    onChange={changeScoreTwo}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary py-3 px-5"
                    onClick={handleClick}
                  >
                    {title} match
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
