import React from "react";
import {Formik} from 'formik'
import { useNavigate, resetForm , NavLink } from "react-router-dom";
import { backendurl } from "../../constant";

const Addstaffpage = () => {
    const navigate = useNavigate();
const Addstaff = async (formdata, {resetForm})=>{
    console.log(formdata)
    const response = await fetch(`${backendurl}/staff/addstaff`,{
        method: 'post',
        body: JSON.stringify(formdata),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status)
    const userData= await response.json();
    if(response.status=== 200){
        console.log("staff added suucees")
     
        resetForm();
    }
    else{
        console.log("add staff fail");
    }
}

  return (
    <>
    <div className="container w-50 mt-5">
      <h3>Add Staff</h3>
      <Formik 
      initialValues={{name: "", day: "", starttime:"", endtime:""}} onSubmit = {Addstaff}>

        {({values, handleChange, handleSubmit})=>(
      <form  onSubmit={handleSubmit}>
      {/* Name input */}
      <div data-mdb-input-init="" className=" mb-4">
      <label className="form-label" htmlFor="form5Example1">
          Name
        </label>
        <input type="text" id="name" className="form-control" value={values.name} onChange={handleChange} />

      </div>
      {/* Email input */}
      <div data-mdb-input-init="" className=" mb-4">
      <label className="form-label" htmlFor="form5Example2">
         Day
        </label>
        <input type="text" id="day" className="form-control" value={values.day} onChange={handleChange}/>

      </div>

      <div data-mdb-input-init="" className=" mb-4">
      <label className="form-label" htmlFor="form5Example2">
         Start Time
        </label>
        <input type="text" id="starttime" className="form-control" value={values.starttime} onChange={handleChange}/>

      </div>

      <div data-mdb-input-init="" className=" mb-4">
      <label className="form-label" htmlFor="form5Example2">
         End Time
        </label>
        <input type="text" id="endtime" className="form-control" value={values.endtime} onChange={handleChange}/>

      </div>
      {/* Submit button */}
      <button
        data-mdb-ripple-init=""
        type="submit"
        className="btn btn-primary btn-block mb-4"
      >
      Submit
      </button>
    </form>
        )}
      </Formik>

      </div>
    </>
  );
};

export default Addstaffpage;