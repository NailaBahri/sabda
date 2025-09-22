import { useNavigate } from "react-router-dom";
import react from "react";
import { BackgroundContainer, Wrapper, Home, Video} from "./TutorialPageElements";

const TutorialPage=() => {
    const navigate=useNavigate();
    return (
        <Wrapper>
            <BackgroundContainer>
               <Home onClick={()=> navigate('/daftarcerita')}>
                <img src="/images/home.png" alt="home"/>
               </Home>
               <Video>
                <video 
                controls
                src="/videos/tutorial.mp4" alt="tutorial"/>
               </Video>
            </BackgroundContainer>
        </Wrapper>
    )
}

export default TutorialPage;