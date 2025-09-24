import React, { useState, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Arrow, ArrowBack, Wrapper } from './BelajarPageElements';
import { IsyaratButton } from '../ButtonElements';
import { VideoPopup } from '../VideoPopup';
import videoMap from '../../Data/videomap';

const BelajarPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const steps = [
    {
      illustrationVideo: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513232/belajar_1_nwc5el.mp4",
      isyaratVideo: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513242/isyarat1_nrs60o.mp4",
    },
    {
      illustrationVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513256/belajar_2_beiu3g.mp4',
      isyaratVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513237/isyarat2_jbbsxl.mp4',
    },
    {
      illustrationVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513244/belajar_3_nk0x6j.mp4',
      isyaratVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513237/isyarat3_xlviav.mp4',
    },
    {
      illustrationVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513236/belajar_4_fyab28.mp4',
      isyaratVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513239/isyarat4_hzx1m1.mp4',
    }
  ];

  const [currentStep, setCurrentStep] = useState(() => {
    if (location.state?.lastStep) {
      return steps.length - 1;
    }
    return 0;
  });

  const videoSrc = steps[currentStep].isyaratVideo;

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/kosakatabelajar');
    }
  };

  const handleNextStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/daftarcerita');
    }
  };


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
        <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758515160/isyarat_tpbr1s.png" alt="isyarat" />
      </IsyaratButton>
      {showPopup && (
        <VideoPopup key = {videoSrc} videoSrc={videoSrc} onClose={() => setShowPopup(false)} />
      )}
      <Arrow onClick={handleNextStep}>
        <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514126/arrow_w9b0iz.png" alt="next" />
      </Arrow>
      <ArrowBack onClick={handleNextStepBack}>
        <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514126/arrowback_rjmxfc.png" alt="back" />
      </ArrowBack>
    </Wrapper>
    </div>
  );
};

export default BelajarPage;
