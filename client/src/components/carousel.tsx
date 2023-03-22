import * as React from "react";
import Slider from "react-slick";
import { ResourceData } from "../data/resource-data";
import "./../styling/carasoul.scss";

type CarouselProps = {
    id: string,
    resources: ResourceData[]
}

const Carasol = ({ id, resources } : CarouselProps) => {
    var res = resources;

    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div>
            <h2>Item 1</h2>
            <Slider {...Settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
            </Slider>
        </div>
    );
}

export default Carasol;