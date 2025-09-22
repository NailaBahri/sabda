import React, {useState, useLayoutEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Arrow, ArrowBack, Wrapper } from './WajahPageElements';
import { IsyaratButton } from '../ButtonElements';
import { VideoPopup } from '../VideoPopup';
import videoMap from '../../Data/videomap';

const WajahPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate= useNavigate();
    const location= useLocation();

    
    const steps = [
    {
      illustrationVideo: '/videos/tubuh/tubuh1.mp4',
      isyaratVideo: '/videos/tubuh/isyarat1.mp4'
    },
    {
      illustrationVideo: '/videos/tubuh/tubuh2.mp4',
      isyaratVideo: '/videos/tubuh/isyarat2.mp4'
    },
    {
      illustrationVideo: '/videos/tubuh/tubuh3.mp4',
      isyaratVideo: '/videos/tubuh/isyarat3.mp4'
    },
    {
      illustrationVideo: '/videos/tubuh/tubuh4.mp4',
      isyaratVideo: '/videos/tubuh/isyarat4.mp4'
    },
    {
      illustrationVideo: '/videos/tubuh/tubuh5.mp4',
      isyaratVideo: '/videos/tubuh/isyarat5.mp4'
    },
    {
      illustrationVideo: '/videos/tubuh/tubuh6.mp4',
      isyaratVideo: '/videos/tubuh/isyarat6.mp4'
    },
    {
      illustrationVideo: '/videos/tubuh/tubuh7.mp4',
      isyaratVideo: '/videos/tubuh/isyarat7.mp4'
    }
  ];

    const [currentStep, setCurrentStep] = useState(() => {
      if (location.state?.lastStep) {
        return steps.length -1;
      }
      return 0;
    })

    const videoSrc = steps[currentStep].isyaratVideo;
    
    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/kosakatatubuh');
        }
    }

    const handleNextStepBack = () => {
        if (currentStep>0) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate('/daftarcerita');
        }
    }

     // style yang akan kita inject ke Wrapper (transform untuk scale/rotate)
  const [wrapperStyle, setWrapperStyle] = useState({
    transform: "translate(-50%, -50%) scale(1)",
  });


  useLayoutEffect(() => {
    function updateTransform() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const isPortrait = vh > vw;

      if (!isPortrait) {
        // normal: scale supaya seluruh 1920x1080 muat tanpa crop
        const scale = Math.min(vw / 1920, vh / 1080);
        setWrapperStyle({
          transform: `translate(-50%, -50%) scale(${scale})`,
        });
      } else {
        // portrait phone: rotate 90deg lalu scale agar tidak crop
        const mobileScale = Math.min(vw / 1080, vh / 1920);
        // rotate after translate keeps central alignment
        setWrapperStyle({
          transform: `translate(-50%, -50%) rotate(90deg) scale(${mobileScale})`,
        });
      }
    }

    updateTransform();
    window.addEventListener("resize", updateTransform);
    window.addEventListener("orientationchange", updateTransform);
    return () => {
      window.removeEventListener("resize", updateTransform);
      window.removeEventListener("orientationchange", updateTransform);
    };
  }, []);

    return ( 
       <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      {/* Wrapper adalah kotak 1920x1080; kita set transform via inline style */}
      <Wrapper style={wrapperStyle}>
        <video
          key={steps[currentStep].illustrationVideo}
          src={steps[currentStep].illustrationVideo}
          autoPlay
          loop
          playsInline
          muted
          style={{
            width: "1920px",
            height: "1080px",
            objectFit: "contain", // jangan 'cover' karena itu yang bikin crop
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 10,
          }}
        />
             <IsyaratButton onClick={() => setShowPopup(true)}>
                <img src="/images/isyarat.png" alt ="isyarat"></img>
             </IsyaratButton>
             {showPopup && (
                <VideoPopup
                  key={videoSrc}
                  videoSrc={videoSrc}
                  onClose={() => setShowPopup(false)}
                />
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
             </div>

    );

};

export default WajahPage;
