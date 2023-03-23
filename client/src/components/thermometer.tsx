import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { TrackFeature } from "../data/track-feature";
import "./../styling/thermometer.scss";

type ThermometerProps = {
    feature: TrackFeature
}

const Thermometer = ({ feature } : ThermometerProps) => {
    return (
        <div>
            <p className = "three columns featureName">{feature.name}</p>
            <ProgressBar
            completed = {feature.percent * 100} 
            customLabel = {feature.percentageString}
            bgColor = {feature.color}
            width = {"100%"}
            labelColor = {"black"}
            labelAlignment = {"right"}
            className = "nine columns"
        />
        </div>
    );
}

export default Thermometer;