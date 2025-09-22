import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackgroundContainer, Arrow, ArrowBack, ChatBox, Wrapper, DogPoseOpen, Chat } from './Page2Elements';
import { IsyaratButton } from '../ButtonElements';
import { VideoPopup } from '../VideoPopup';
import videoMap from '../../Data/videomap';

const Page2 = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate= useNavigate();
    const location= useLocation();
    const videoSrc = videoMap[location.pathname];
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            image: '/images/dogpose3.png',
            text: 'tapi, tiba-tiba barang-barang kami dicuri bajak laut!'
        },
        {

            image: '/images/dogpose4.png',
            text: 'katanya, barang kami disembunyikan di pulau petualangan'
        }
    ];
    
    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/page3');
        }
    }

    const handleNextStepBack = () => {
        if (currentStep>0) {
            setCurrentStep(currentStep+1);
        } else {
            navigate('/page1')
        }
    }

    return ( 
        <Wrapper>
            <BackgroundContainer>
                <DogPoseOpen>
                    <img src={steps[currentStep].image} alt="anjing"></img>
                </DogPoseOpen>
            </BackgroundContainer>
             <Chat>
                <ChatBox><p>{steps[currentStep].text}</p></ChatBox>
             </Chat>
             <IsyaratButton onClick={() => setShowPopup(true)}>
                <img src="/images/isyarat.png" alt ="isyarat"></img>
             </IsyaratButton>
             {showPopup && (
                <VideoPopup videoSrc={videoSrc} onClose={() => setShowPopup(false)} />
            )}
             <Arrow onClick={() => {
                handleNextStep();
             }}>
                <img src="/images/arrow.png" alt ="text"></img>
             </Arrow>
             <ArrowBack onClick={() => {
                handleNextStepBack();
             }}>
                <img src="/images/arrowback.png" alt ="text"></img>
             </ArrowBack>
             </Wrapper>

    );

};

export default Page2;