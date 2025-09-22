import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    background: #C75C14;
    z-index: 20;
    display: flex;
    border-radius: 10px;
`

const VideoBox = styled.div`
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    width: 300px;
    height: auto;
    background: #C75C14;
    position: relative;
    border-radius: 10px;
`
const CloseButton = styled.button`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
`

export const VideoPopup = ({ videoSrc, onClose }) => {
    const videoRef = useRef([]);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        setAutoPlay(true);
    }, [videoSrc]);
    if (!videoSrc) return null;

    return (
        <Overlay onClick={onClose}>
            <VideoBox onClick={onClose}>
                <CloseButton onClick={onClose}>x</CloseButton>
                <video
                width="100%"
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay={autoPlay}
                playsInline
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                onContextMenu={(e) => e.preventDefault()} // cegah klik kanan
                onEnded={() => {
                    if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                    videoRef.current.load(); // reset ke awal
                    }
                    setAutoPlay(false);
                }}
                >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </VideoBox>
        </Overlay>
    )
}
