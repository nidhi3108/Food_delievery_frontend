import React from "react";
import Card from "./Card";

const AllItem = () => {
    const item= [{
        id:1,
        name:"pasta",
        description:"white sauce",
        price: 150,

    },
    {
        id:1,
        name:"Maggies",
        description:"veg",
        price: 40,

    },
    {
        id:1,
        name:"Noodkes",
        description:"hakka",
        price: 230,

    },
    {
        id:1,
        name:"manchuriaa",
        description:"dry",
        price: 250,

    },
    {
        id:1,
        name:"sandwich",
        description:"grilled",
        price: 160,

    },
]
return (
    <>
    <div className="container">
        <h2>All Items</h2>
        <div className="row">
          {item.map((data)=>{
return <Card  title={data.name} description={data.description} id={data.id}/>
          })}
        </div>
    </div>
    </>
)
}


export default AllItem