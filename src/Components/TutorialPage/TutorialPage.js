import { useNavigate } from "react-router-dom";
import react from "react";
import { BackgroundContainer, Wrapper, Home, Video} from "./TutorialPageElements";

const TutorialPage=() => {
    const navigate=useNavigate();
    return (
        <Wrapper>
            <BackgroundContainer>
               <Home onClick={()=> navigate('/daftarcerita')}>
                <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png" alt="home"/>
               </Home>
               <Video>
                <video 
                controls
                src="https://res.cloudinary.com/dnaf6s355/video/upload/v1758704960/Untitled_video_-_Made_with_Clipchamp_1_yuqksq.mp4" alt="tutorial"/>
               </Video>
            </BackgroundContainer>
        </Wrapper>
    )
}

export default TutorialPage;