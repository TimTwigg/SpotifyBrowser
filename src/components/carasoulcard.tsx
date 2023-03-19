import * as React from "react";
import { ResourceData } from "../data/resource-data";

type CardProps = {
    resource: ResourceData
}

const CarasolCard = ({ resource } : CardProps) => {
    return (
        <a href = {resource.category + "/" + resource.id}>
            <img src = {resource.imageURL}/>
            <div className = "carousel-caption">
                <h5>{resource.name}</h5>
            </div>
        </a>
    );
}

export default CarasolCard;