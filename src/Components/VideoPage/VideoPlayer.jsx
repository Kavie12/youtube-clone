import '@vime/core/themes/default.css';
import { Player, Video, Ui, DefaultUi, DblClickFullscreen, Spinner, ClickToPlay, Scrim } from '@vime/react';

const VideoPlayer = ({ filename }) => {
    return (
        <Player
            theme="dark"
        >
            <Video
                crossOrigin
            >
                <source
                    data-src={`/Videos/${filename}`}
                    type="video/mp4"
                />
            </Video>

            <DefaultUi noLoadingScreen />
            <Ui>
                <ClickToPlay />
                <DblClickFullscreen />
                <Spinner />
                <Scrim />
            </Ui>
        </Player>
    );
}

export default VideoPlayer;