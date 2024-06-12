// show all staff members with name and availbility

import React, { useEffect, useState } from "react";
import Staffcard from "../items/Staffcard";
import { backendurl } from "../../constant";


const Allstaffpage = (props) => {

    const [backenData, setbackendData] = useState([])

const showallstaff = async () =>{
    const response = await fetch (`${backendurl}/staff/showallstaff`)
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setbackendData(data)
    console.log(setbackendData.length);
}

useEffect(() => {
    showallstaff();
}, []);

return (
    <>
    <div className="container">
        <h2>All Staff</h2>
        <div className="row">

          {backenData.map((data)=>{
            
return <Staffcard  title={data.name} description={data.description} id={data._id} day={data.day}
 starttime={data.starttime} endtime={data.endtime}/>
          })}
        </div>
    </div>
    </>
)
}


export default Allstaffpage