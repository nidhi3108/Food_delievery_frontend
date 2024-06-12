import React from "react";

const Card = (props) => {

    return (
        <>
        <div className="col-sm-3">
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>

                <button>Add</button>
            </div>
           </div>
        </div>
        </>
    )
    }
    
    
    export default Card