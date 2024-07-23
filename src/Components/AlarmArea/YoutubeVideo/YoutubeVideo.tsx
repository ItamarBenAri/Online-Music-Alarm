import ReactPlayer from "react-player";
import "./YoutubeVideo.css";

type YoutubeVideoProps = {
    url: string;
};

export function YoutubeVideo(props: YoutubeVideoProps): JSX.Element {
    return (
        <div className="YoutubeVideo">
            <ReactPlayer
                url={props.url}
                playing={true}
                controls={true} 
                height="300px"               
                width="100%"               
            />
        </div>
    );
}
