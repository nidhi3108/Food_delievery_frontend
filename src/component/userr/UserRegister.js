import React from "react";
import {Formik} from 'formik'
import { useNavigate, resetForm , NavLink } from "react-router-dom";
import { backendurl } from "../../constant";
const UserRegister = () => {
  const navigate = useNavigate();
  const RegisterSubmit = async (formdata, {resetForm})=>{
      console.log(formdata)
      const response = await fetch(`${backendurl}/user/register`,{
          method: 'post',
          body: JSON.stringify(formdata),
          headers:{
              'Content-Type': 'application/json'
          }
      });
  
      console.log(response.status)
      const userData= await response.json();
      if(response.status=== 200){
          console.log("Register suucees")
          navigate('/user-login')
          resetForm();
      }
      else{
          console.log("Register fail");
      }
  }
  return (
    <>
    <div className="container w-50 mt-5">
      <h3>User Register</h3>
      <Formik 
      initialValues={{name: "", email: "", password:""}} onSubmit = {RegisterSubmit}>

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
          Email address
        </label>
        <input type="email" id="email" className="form-control" value={values.email} onChange={handleChange}/>

      </div>

      <div data-mdb-input-init="" className=" mb-4">
      <label className="form-label" htmlFor="form5Example2">
         Password
        </label>
        <input type="password" id="password" className="form-control" value={values.password} onChange={handleChange}/>

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

export default UserRegister;