import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackgroundContainer, Arrow, ArrowBack, ChatBox, Wrapper, DogPoseOpen, Chat } from './Page1Elements';
import { IsyaratButton } from '../ButtonElements';
import { VideoPopup } from '../VideoPopup';
import videoMap from '../../Data/videomap';

const Page1 = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate= useNavigate();
    const location= useLocation();
    const videoSrc = videoMap[location.pathname];
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            image: [
                {src: '/images/dogpose1.png', size:'center'}],
            text: 'hai, namaku dada dan ini adikku sasa',
        },
        {

             image: [
                {src: '/images/dogpose2.png', size:'center'}],
            text: 'kami tinggal di pulau bermain dengan gembira',
        },
         {
            image: [
                { src: '/images/dogpose3.png', size: 'left' },
                { src: '/images/ship.png', size: 'ship'}
            ],
            text: 'tapi, tiba-tiba barang-barang kami dicuri bajak laut!'
        },
        {

            image: '/images/dogpose4.png',
            text: 'katanya, barang kami disembunyikan di pulau petualangan',
            size: 'left'
        }
    ];
    
    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/page2');
        }
    }

    const handleNextStepBack = () => {
        if (currentStep>0) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate('/');
        }
    }

    return ( 
        <Wrapper>
            <BackgroundContainer>
                {steps[currentStep].image.map((img, index) => (
                    <DogPoseOpen size={img.size} key={index}>
                    <img src={img.src} alt={`gambar-${index}`} />
                </DogPoseOpen>
                 ))}
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
                <img src="/images/arrowback.png" alt="text"></img>
             </ArrowBack>
             </Wrapper>

    );

};

export default Page1;