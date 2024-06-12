import React, { useEffect } from "react";
import { backendurl } from "../../constant";
import { Formik } from "formik";
import Updatestaffprofile from "../admin/Updatestaffprofile";
import { NavLink } from "react-router-dom";

const Staffcard = (props) => {

    const deletestaff = async (data)=>{
       console.log(data)
       const response = await fetch(`${backendurl}/staff/deletestaff`,{
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
       })
       console.log(response);
       if(response.status===200){
        console.log("staff deleted");
       }
       else{
        console.log("err in staff deletion");
       }
    }

    const updatestaff = (props) => {
        console.log(props.id);
        
        <Updatestaffprofile id={props}/>
    }


useEffect(()=>{

},[])

    return (
        <>
        <div className="col-sm-3">
           <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">Availbility</p>
                <p className="card-text">{props.day} --
               {props.starttime} to {props.endtime}</p>

               <button onClick={()=> deletestaff(props)} >Del</button>   <NavLink to={"/updatestaff"}><button onClick={()=> updatestaff(props)}>Update Time</button></NavLink>
            </div>
           </div>
        </div>
        </>
    )
    }
    
    
    export default Staffcard