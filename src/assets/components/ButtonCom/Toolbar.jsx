import ButtonCom from "./ButtonCom.jsx";
import {handlePlay, handleStop} from "./handle.jsx";
import sampleVideo from "/React1/Project/src/assets/tiny.mp4";

export default function Toolbar() {
    return (
        <>
            <nav>
                <ButtonCom message="videoPlayer" handle={handlePlay}>
                    Play
                </ButtonCom>
                &nbsp;
                <ButtonCom message="videoPlayer" handle={handleStop}>
                    Stop
                </ButtonCom>
            </nav>
            <br />
            <section>
                <video id="videoPlayer" src={sampleVideo} width="350" />
            </section>
        </>
    );
}