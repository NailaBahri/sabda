import React, { useState, useRef, useEffect } from 'react';
import { BackgroundContainer, ReverseHint, Home, ButtonArea, PopupButton, PopupContainer, Wrapper, CardFace, CardWrapper, CardInner, Controls, Front, Button3, Button4, Back, CardButton, Button1, Button2 } from './FlashcardsKeluargaElements';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const flashcards = [
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/keluarga_wgkzmv.png',
    answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692791/isyaratkeluarga_rpmrsl.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515298/ayah_ym9wwz.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692794/isyaratayah_okfwsg.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/ibu_q5rtcu.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692790/isyaratibu_e9iund.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515292/adik_trpftt.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692789/isyaratadik_qxi4a7.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/kakak_hfwm9e.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692788/isyaratkakak_esfspe.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/bermainbola_pfejj2.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692791/isyaratbermainbola_omkx4i.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515293/berkebun_ozgzog.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692790/isyaratberkebun_xavkrn.mp4'
  },
  {
    questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515296/memasak_pvr5im.png',
    answerVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692794/isyaratmemasak_oxui94.mp4'
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
      setPopupMessage(<img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758687122/popupselesai_m9pltm.png" alt="selesai" />);
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
                <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png' alt="home" />
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
                    <ReverseHint src="https://res.https://res.cloudinary.com/dnaf6s355/image/upload/v1758687003/reversearrow_cna2nj.pngcloudinary.com/dnaf6s355/image/upload/v1758515160/isyarat_tpbr1s.png" alt="Balik kartu" />
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
                    <Button1 onClick={handleReset}> <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758515878/kocokkartu_cxib4h.png' alt="kocok kartu"></img></Button1>
                    <Button2 onClick={handleNextCard}> <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758515292/kartuselanjutnya_hxaquq.png' alt="kartu selanjutnya"></img></Button2>
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
                <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758514129/belajarlagi_vyrwq2.png' alt="belajarlagi" />
            </Button3>
            <Button4 onClick={handleLanjutGames}>
                <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758516417/lanjutgame_evsr8q.png' alt="lanjutgames" />
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


