import React from "react";
import "./Service.css";

const ServiceCompo = ({title,des,image})=>{
    return(
        <div className="card service-design">
            <span className="image-design"><img src={image} /></span>
            <h5>{title}</h5>
            <p>{des}</p>
            
        </div>
    );
}
export default ServiceCompo;
