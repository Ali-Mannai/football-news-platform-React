import React from 'react'

export default function Match(props) {
    const deletechild=(id) => {
        props.deleteParent(id);
    }    
    const compare=(a,b){
        if (a>b) {
            return["red","win"]
        } else if (a<b) {
            return["green","loss"]
        } else {
            return["yellow","Draw"]
        }{
            
        }
    };
    return (
        <div className="col-lg-12"  >
            <div className="d-flex team-vs">
            <button  type="button"  className="btn btn-danger" onClick={() => deletechild(props.value.id)} >
                Delete </button>
              
                <span className="score"></span>
                <span style={{color:compare(props.value.ScoreOne,props.value.ScoreTwo)[0]}}>{props.value.ScoreOne} </span>-<span style={{color:compare(props.value.ScoreTwo,props.value.ScoreOne)[0]}}>{props.value.ScoreTwo}</span>
                <div className="team-1 w-50">
                    <div className="team-details w-100 text-center">
                        <img src="assets/images/logo_1.png" alt="Image" className="img-fluid" />
                        <h3> 
                             <span>(win)</span></h3>
                    </div>
                </div>
                <div className="team-2 w-50">
                    <div className="team-details w-100 text-center">
                        <img src="assets/images/logo_2.png" alt="Image" className="img-fluid" />
                        <h3>{props.value.TeamTwo}<span>(loss)</span></h3>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}
