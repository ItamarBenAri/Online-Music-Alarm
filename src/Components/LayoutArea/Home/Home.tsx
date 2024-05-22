import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppStore";
import useTitle from "../../../Utils/UseTitle";
import { AlarmDialog } from "../../AlarmArea/AlarmDialog/AlarmDialog";
import { YoutubeVideo } from "../../AlarmArea/YoutubeVideo/YoutubeVideo";
import "./Home.css";
import Clock from "../../AlarmArea/Clock/Clock";

export function Home(): JSX.Element {
    useTitle("Online Music Alarm 🎶");
    const alarm = useSelector((appState: AppState) => appState.alarm);
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString().substring(0, 5));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString().substring(0, 5));
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="Home">
            <div className="alarmContainer">
                <Clock />
                <AlarmDialog />
                <p>Note! The background color of the website changes according to the level of brightness of the sky that you see outside at the moment🌇🌃</p>
            </div>
            {currentTime === alarm?.timeToWakeUp && <YoutubeVideo url={alarm.youtubeUrl} />}
        </div>
    );
}
