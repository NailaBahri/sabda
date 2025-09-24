import {
  BackgroundContainer, Home, PopupContainer, VideoWrapper, Wrapper, VideoQuestion, FloatingStar, Card, ImageAnswer, StarsWrapper
} from './GameHewanElements';
import React, {useState, useRef, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { db } from "./../../firebase";
import { doc, updateDoc, arrayUnion, setDoc, increment, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const questions = [
  {
    questionVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513250/isyarathewan_smgudb.mp4',
    options: [
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514648/peternakan_s92eop.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514587/kambing_zqxg3k.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514593/bebek_ytl1tl.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/hewan_dppxxm.png',
    ],
    correctIndex: 3,
  },
  {
    questionVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513251/isyaratkambing_joo1wb.mp4',
    options: [
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514587/kambing_zqxg3k.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514648/peternakan_s92eop.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514593/bebek_ytl1tl.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/berenang_t41vmg.png',
    ],
    correctIndex: 0,
  },
  {
    questionVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513249/isyaratbebek_cif4sc.mp4',
    options: [
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514593/bebek_ytl1tl.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514587/kambing_zqxg3k.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/berenang_t41vmg.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514648/peternakan_s92eop.png',
    ],
    correctIndex: 0,
  },
  {
    questionVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513253/isyaratpeternakan_qfkcfq.mp4',
    options: [
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514587/kambing_zqxg3k.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514648/peternakan_s92eop.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514593/bebek_ytl1tl.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/berenang_t41vmg.png',
    ],
    correctIndex: 1,
  },
  {
    questionVideo: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513251/isyaratberenang_jr9aia.mp4',
    options: [
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514648/peternakan_s92eop.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514593/bebek_ytl1tl.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/berenang_t41vmg.png',
      'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514587/kambing_zqxg3k.png',
    ],
    correctIndex: 2,
  }
];

const GameHewan = () => {
 const [currentQuestion, setCurrentQuestion] = useState(0);
          const [showPopup, setShowPopup] = useState(false);
          const [popupMessage, setPopupMessage] = useState("");
          const [animatePopup, setAnimatePopup] = useState(false);
          const [isClosing, setIsClosing] = useState(false);
          const [isCorrect, setIsCorrect] = useState(false);
          const [isIncorrect, setIsIncorrect] = useState(false);
          const [correctCount, setCorrectCount] = useState(0);
          const [correctionAnswer, setCorrectionAnswer] = useState(false);
          const navigate = useNavigate();
          const [lastStar, setLastStar] = useState(0);
          const [selectedIndex, setSelectedIndex] = useState(null);
          const videoRefs= useRef([]);
          const [hasAnswered, setHasAnswered] = useState(false);

          const isGuest = sessionStorage.getItem("guest") === "true";
          const gameName = "hewan";
      
          const updateLastScoreSummary = async (gameName, stars) => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user || isGuest) return;
      
            const summaryRef = doc(db, "users", user.uid, "summary", "lastScore");
            await setDoc(
              summaryRef, 
              {[gameName]: stars},
              {merge: true}
            );
          };
      
          const handleGlobalClick = () => {
            if (hasAnswered && !isClosing) {
              handleClosePopup();
            }
          }

          const saveGameResult = async (stars) => {
            const auth = getAuth();
            const user = auth.currentUser;
      
            if (!user || isGuest) {
              let guestData = JSON.parse(sessionStorage.getItem("guestGame")) || { [gameName]:[]};
              if (!guestData[gameName]) guestData[gameName] = [];
              guestData[gameName].push({stars, playedAt: new Date().toISOString()});
              sessionStorage.setItem("guestGame", JSON.stringify(guestData));
            return;
            }
      
              const gameRef = doc(db, "users", user.uid, "games", gameName);
              
              await setDoc(
                gameRef,
                {
                  playCount: increment (1),
                  lastScore: stars,
                  updateAt: serverTimestamp()
                },
                {merge: true}
              );
      
              await updateDoc(
                gameRef,
                {
                  history: arrayUnion({stars, playedAt: new Date().toISOString()})
                }
              )
          };
      
          useEffect(() => {
            if (isGuest) {
              const guestData = JSON.parse(sessionStorage.getItem("guestGame")) || {};
              if (guestData[gameName]?.length) {
                const last = guestData[gameName][guestData[gameName]. length-1];  
                setLastStar(last.stars);      
              }
            } else {
              const savedStars = localStorage.getItem(`stars.${gameName}`);
              if (savedStars) 
                setLastStar(Number(savedStars));
              }
            }, [])    
      
          const handleAnswer = (index) => {
          if (hasAnswered) return
          setHasAnswered (true);

          setSelectedIndex(index);
          console.log("Jawaban diklik:", index);
          if (index == questions [currentQuestion].correctIndex) {
            setIsCorrect(true); 
            setCorrectCount(prev => prev+1);
            setPopupMessage("https://res.cloudinary.com/dnaf6s355/image/upload/v1758687122/popupbenar_nq22nj.png");
            setCorrectionAnswer(false);
          } else {
            setIsIncorrect(true);
            setPopupMessage("https://res.cloudinary.com/dnaf6s355/image/upload/v1758687122/popupsalah_gyzbj8.png");
          }
          setShowPopup(true);
          setTimeout(()=> setAnimatePopup(true), 10);
        };
    
        const handleClosePopup = () => {
          setAnimatePopup(false);
          setIsClosing(true);
          setCorrectionAnswer(false);
          setSelectedIndex(null);
    
          setTimeout(() => {
          setShowPopup(false);
          setIsClosing(false);
          setHasAnswered(false);
          setPopupMessage("");
          setSelectedIndex(null);
          setAnimatePopup(false);
        }, 500);
      
              if (currentQuestion < questions.length -1) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                localStorage.setItem("stars.${gameName}", correctCount);
                setLastStar(correctCount);
                updateLastScoreSummary(gameName, correctCount);
                saveGameResult(correctCount);
                navigate("/daftarcerita")
              }
          };

  return (
      <Wrapper onClick={handleGlobalClick}>
        <BackgroundContainer>
          <Home onClick={() => navigate('/daftarcerita')}>
          <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png' alt="home" />
          </Home>
          <VideoWrapper>
          <VideoQuestion>
            <video
          autoPlay
          controls
          style={{ width: "100%", height: "auto" }}  
          key={questions[currentQuestion].questionVideo}
          src={questions[currentQuestion].questionVideo} 
          ref={el => videoRefs.current[currentQuestion] = el}
          onEnded={()=> {
            const vid = videoRefs.current[currentQuestion];
            if (vid) {
              vid.currentTime = 0;
              vid.pause();
            }
          }}/>
          </VideoQuestion>
           <StarsWrapper>
          {[...Array(correctCount)].map((__, i) => (
            <FloatingStar key={i} index={i} />
          ))}
          </StarsWrapper>
          </VideoWrapper>
            <ImageAnswer>
            {questions[currentQuestion].options.map((opt, index) => (
               <Card key={index} 
               style={{
                backgroundColor: 
                selectedIndex !==null && index === questions[currentQuestion].correctIndex
                 ? "lightgreen"
                 :selectedIndex === index && selectedIndex !== questions[currentQuestion].correctIndex
                 ?'#cf0000ff'
                 : '#C75C14',
                transition: "background-color 0.5s ease"
               }}
               >
              <img
                src={opt}
                onClick={() => handleAnswer(index)}
              />
              </Card>
            ))}
          </ImageAnswer>
  
           {/* POPUP */}
        {  showPopup && ( <PopupContainer
    
            style={{
              transform: animatePopup 
              ? "translate(-50%, -60%) scale(1)" 
              : "translate(-50%, -40%) scale(0.9)",
              opacity: animatePopup ? 1 : 0,
              transition: "transform 0.4s ease, opacity 0.4s ease",
              pointerEvents: isClosing ? "none" : "auto"
            }}
          >
            <div onClick={handleClosePopup}>
    <img src={popupMessage} alt="popup" style={{ maxWidth: "100%" }} />
  </div>
  
          </PopupContainer>
        )}
        
        </BackgroundContainer>
      </Wrapper>
      )
    };

export default GameHewan;
