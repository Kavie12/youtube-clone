import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

const VideoPlayer = ({ filename }) => {
    return (
        <MediaPlayer src={`/Videos/${filename}`} aspectRatio="16/9">
            <MediaProvider />
            <DefaultVideoLayout
                icons={defaultLayoutIcons}
                style={{
                    '--video-brand': '#f5f5f5',
                }}
            // slots={{
            //     googleCastButton: null,
            // }}
            />
        </MediaPlayer>
    );
}

export default VideoPlayer;