import React, { useState, useRef, useEffect } from 'react';
import { BackgroundContainer, Home, PopupContainer, PopupButton, ButtonArea, CardArea, ReverseHint, Wrapper, CardFace, CardWrapper, CardInner, Controls, Front, Button3, Button4, Back, CardButton, Button1, Button2 } from './FlashcardsWajahElements';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const flashcards = [
    {
        questionImage:"https://res.cloudinary.com/dnaf6s355/image/upload/v1758694949/tubuh_ouqole.png",
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694967/isyarattubuh_li28zj.mp4'
    },
    {
        questionImage:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694954/hidung_gl1fnw.png',
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694958/isyarathidung_eplhbe.mp4'
    },
    {
        questionImage:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694941/mulut_ijcw1k.png',
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694966/isyaratmulut_rll6dn.mp4'
    },
    {
        questionImage:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694952/tangan_k0hexc.png',
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694961/isyarattangan_vxjobr.mp4'
    },
    {
        questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694951/kaki_tos34e.png',
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694964/isyaratkaki_bhx7j0.mp4'
    },
    {
        questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694948/mata_rkr7n0.png',
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694963/isyaratmata_bspedm.mp4'
    },
    {
        questionImage: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694956/telinga_yxbbyy.png',
        answerVideo:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694960/isyarattelinga_ziogia.mp4'
    }
];

function shuffleCards(cards) {
    const shuffled = [...cards];
    for (let i = shuffled.length-1; i>0;i--) {
        const j = Math.floor(Math.random() * (i+1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function FlashcardWajah() {
    const [deck, setDeck] = useState([]);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[isFlipped, setIsFlipped]= useState(false);
    const[popupMessage, setPopupMessage] = useState("");
    const[showPopup, setShowPopup] = useState(false);
    const[animatePopup, setAnimatePopup] = useState(false);
    const[isExiting, setIsExiting] = useState(false);

    const navigate=useNavigate();
    const videoRefs= useRef([]);

    useEffect(() => {
        const shuffled= shuffleCards(flashcards);
        setDeck(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
    }, []);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    }

    const handleNextCard= () => {
        if (currentIndex < deck.length-1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        } else {
            setPopupMessage(<img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758687122/popupselesai_m9pltm.png" alt="kamu benar!" />);
            setShowPopup(true);
            setTimeout(()=> setAnimatePopup(true), 10);
        }
    };

    const handleReset = () => {
        const shuffled= shuffleCards(flashcards);
        setCurrentIndex(0);
        setDeck(shuffled);
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
        setTimeout(() => {
        navigate('/gametubuh');
    }, 400); // beri jeda agar popup sempat hilang
    }

    if (deck.length === 0) return <div>Loading...
    </div>

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
                    transition={{duration: 0.2, ease:easeOut}}
                >
                    <CardArea>
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
                            content
                        </Front>
                        <ReverseHint src="https://res.https://res.cloudinary.com/dnaf6s355/image/upload/v1758687003/reversearrow_cna2nj.pngcloudinary.com/dnaf6s355/image/upload/v1758515160/isyarat_tpbr1s.png" alt="Balik kartu" />
                        <Back>
                            <video
                            controlsList="nodownload noremoteplayback" 
                            onContextMenu={(e) => e.preventDefault()} 
                            width ="700" 
                            height="350" 
                            controls 
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
                </CardArea>
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


