import * as React from "react";
import { ResourceData } from "../data/resource-data";
import "./../styling/carasoul.scss";

type CarouselProps = {
    id: string,
    resources: ResourceData[]
}

const Carasol = ({ id, resources } : CarouselProps) => {
    return (
        <div className = "carousel"></div>
    );
}

export default Carasol;