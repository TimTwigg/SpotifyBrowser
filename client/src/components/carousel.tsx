import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import { navigate } from "@reach/router";
import { ResourceData } from "../data/resource-data";
import { SpotifyService } from "../services/spotifyService";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../styling/carousel.scss"


const service = new SpotifyService();

type CarouselProps = {
    resources: ResourceData[]
}

const Slider = ({ resources } : CarouselProps) => {
    function goto(index: number, item: any) {
        let key = item.key.split("/");
        navigate(`/${key[0]}/#${key[1]}`);
        window.location.reload();
    }

    return (
        <div>
            {resources.length > 0 &&
                <Carousel infiniteLoop = {true} showThumbs = {false} width = {300} showStatus = {false} showIndicators = {false} onClickItem = {goto}>
                    {
                        resources.map((v, _) => (
                            <div key = {v.category + "/" + v.id}>
                                <img src = {v.imageURL}/>
                                <p className = "legend">{v.name}</p>
                            </div>
                        ))
                    }
                </Carousel>
            }
        </div>
    );
}

export default Slider;