import React, { useState, useRef, useEffect } from 'react';
import { BackgroundContainer, ReverseHint, Home, ButtonArea, PopupButton, PopupContainer, Wrapper, CardFace, CardWrapper, CardInner, Controls, Front, Button3, Button4, Back, CardButton, Button1, Button2 } from './FlashcardsKeluargaElements';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const flashcards = [
  {
    questionImage: '/images/keluarga/keluarga.png',
    answerVideo:'/videos/keluarga/isyaratkeluarga.mp4'
  },
  {
    questionImage: '/images/keluarga/ayah.png',
    answerVideo: '/videos/keluarga/isyaratayah.mp4'
  },
  {
    questionImage: '/images/keluarga/ibu.png',
    answerVideo: '/videos/keluarga/isyaratibu.mp4'
  },
  {
    questionImage: '/images/keluarga/adik.png',
    answerVideo: '/videos/keluarga/isyaratadik.mp4'
  },
  {
    questionImage: '/images/keluarga/kakak.png',
    answerVideo: '/videos/keluarga/isyaratkakak.mp4'
  },
  {
    questionImage: '/images/keluarga/bermainbola.png',
    answerVideo: '/videos/keluarga/isyaratbermainbola.mp4'
  },
  {
    questionImage: '/images/keluarga/berkebun.png',
    answerVideo: '/videos/keluarga/isyaratberkebun.mp4'
  },
  {
    questionImage: '/images/keluarga/memasak.png',
    answerVideo: '/videos/keluarga/isyaratmemasak.mp4'
  }
];

function shuffleCards(cards) {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // swap
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function FlashcardsKeluarga() {
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const navigate = useNavigate();
  const videoRefs = useRef([]);

  useEffect(() => {
    const shuffled = shuffleCards(flashcards);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  const handleNextCard = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      setPopupMessage(<img src="/images/popupselesai.png" alt="selesai" />);
      setShowPopup(true);
      setTimeout(() => setAnimatePopup(true), 10);
    }
  };

  const handleReset = () => {
    const shuffled = shuffleCards(flashcards);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleBelajarLagi = () => {
        handleReset(true);
        setAnimatePopup(false);
        setPopupMessage(false);
        setTimeout(() => setShowPopup(false), 300); // beri jeda agar popup sempat hilang
    };
    

  const handleLanjutGames = () => {
    setIsExiting(true);
    setTimeout(() => navigate('/gamekeluarga'), 400);
  };

  if (deck.length === 0) return <div>Loading...</div>;

  const currentCard = deck[currentIndex];

  return (
    <Wrapper>
      <BackgroundContainer>
          <Home onClick={() => navigate('/daftarcerita')}>
                <img src='/images/home.png' alt="home" />
              </Home>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeOut }}
          >
            <CardWrapper>
              <CardButton onClick={handleFlip}>
                <CardInner flipped={isFlipped}>
                  <Front>
 <img 
                            src={currentCard.questionImage}
                            alt="pertanyan"
                            style={{display: "block",
                            margin: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"}}/>
                    <ReverseHint src="/images/reversearrow.png" alt="Balik kartu" />
                  </Front>
                  <Back>
                    <video width="700" height="350" controls
                     ref={el => videoRefs.current[currentIndex] = el}
                            onEnded={()=>{
                                const vid = videoRefs.current[currentIndex];
                                if (vid) {
                                    vid.currentTime = 0;
                                    vid.pause();
                                }}
                            }>
                      <source src={currentCard.answerVideo} type="video/mp4" />
                      Browsermu tidak mendukung video.
                    </video>
                  </Back>
                </CardInner>
              </CardButton>
            </CardWrapper>
</motion.div>
                </AnimatePresence>
                <ButtonArea>
                <Controls>
                    <Button1 onClick={handleReset}> <img src='images/kocokkartu.png' alt="kocok kartu"></img></Button1>
                    <Button2 onClick={handleNextCard}> <img src='images/kartuselanjutnya.png' alt="kartu selanjutnya"></img></Button2>
                </Controls>
                </ButtonArea>
            </BackgroundContainer>
            {showPopup && (
        <PopupContainer>
            <AnimatePresence mode="wait">
                {!isExiting && (<motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{duration: 0.2, ease:easeOut}}
                >
           <div>
            {popupMessage}
            <PopupButton>
            <Button3 onClick={handleBelajarLagi}>
                <img src='images/belajarlagi.png' alt="belajarlagi" />
            </Button3>
            <Button4 onClick={handleLanjutGames}>
                <img src='images/lanjutgame.png' alt="lanjutgames" />
            </Button4>    
            </PopupButton>
            </div> 
            </motion.div>)}
            </AnimatePresence>
        </PopupContainer>
      )}
        </Wrapper>
    )
}


