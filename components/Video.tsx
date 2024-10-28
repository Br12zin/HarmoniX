const Video = () => {
    return (
    <div className="video-background">
        <video
            autoPlay
            loop
            muted
            className="video"
        >
            <source src="/video.mp4" />
        </video>
    </div>
    );
}

export default Video;
