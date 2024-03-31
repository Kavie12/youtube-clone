const VideoPlayer = ({ filename }) => {
    return (
        <video controls controlsList="nodownload" src={`/Videos/${filename}`} className="w-full rounded-lg"></video>
    );
}

export default VideoPlayer;