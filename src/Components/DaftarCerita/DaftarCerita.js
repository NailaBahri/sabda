import React, {useRef, useState, useEffect, useCallback} from 'react';
import { Wrapper, Button1, Button2, ButtonArea, CardScrollWrapper, AR,  ArrowBack, BackgroundContainer, Flashcard, Game, Story, Title, ActionsWrapper, CardGrid, Card, CardLabel, CardImage, ArrowButton, StarContainer, Star } from './DaftarCeritaElements';
import { Link, useNavigate} from 'react-router-dom';
import { db } from "./../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const cardData = [
    { title: 'tubuh', path: '/tubuh', image: '/images/cover-tubuh.png', label:'/images/label-tubuh.png', flashcard:'/flashcardtubuh', materi:'/kosakatatubuh', game:'/gametubuh', ar: '/ARtubuh'},
    { title: 'keluarga', path: '/keluarga', image: '/images/cover-keluarga.png', label:'/images/label-keluarga.png', flashcard:'/flashcardkeluarga', materi:'/kosakatakeluarga', game:'/gamekeluarga', ar: '/ARkeluarga'},
    { title: 'belajar', path: '/belajar', image: '/images/cover-belajar.png', label:'/images/label-belajar.png', flashcard:'/flashcardbelajar', materi:'/kosakatabelajar', game:'/gamebelajar', ar: '/ARbelajar'},
    { title: 'hewan', path: '/hewan', image: '/images/cover-hewan.png', label:'/images/label-hewan.png', flashcard:'/flashcardhewan', materi:'/kosakatahewan', game:'/gamehewan', ar:'ARhewan'},
    { title: 'perasaan', path: '/perasaan', image: '/images/cover-perasaan.png', label:'/images/label-perasaan.png', flashcard:'/flashcardperasaan', materi:'/kosakataperasaan', game:'/gameperasaan', ar: 'ARperasaan'}
]

const CARDS_PER_PAGE = 4;
const DaftarCerita = () => {
    const [pageIndex, setPageIndex] = useState (0)
    const [starsData, setStarsData] = useState({});

    const navigate = useNavigate();

    // Gunakan useCallback!
    const fetchData = useCallback(async (user) => {
        const isGuest = sessionStorage.getItem("guest") === "true";
        let newStars = {};
        if (isGuest || !user) {
            const guestData = JSON.parse(sessionStorage.getItem("guestGame")) || {};
            cardData.forEach(card => {
                const gameName = card.title.toLowerCase();
                if (guestData[gameName]?.length) {
                    const last = guestData[gameName][guestData[gameName].length-1]
                    newStars[gameName] = last.stars;
                } else {
                    newStars[gameName] = 0;
                }
            });
        } else {
            const summaryRef = doc(db, "users", user.uid, "summary", "lastScore");
            const snap = await getDoc(summaryRef);
            if (snap.exists()) {
                const lastScoreData = snap.data();
                cardData.forEach(card => {
                    const gameName = card.title.toLowerCase();
                    newStars[gameName] = lastScoreData[gameName] || 0;
                });
            } else {
                cardData.forEach(card => {
                    const gameName = card.title.toLowerCase();
                    newStars[gameName] = 0;
                });
            }
        }
        setStarsData(newStars);
    }, []); // <--- dependency array kosong

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            fetchData(user);
        });
        return () => unsubscribe();
    }, [fetchData]);
    // ...rest of your code...

    const maxPage = Math.ceil(cardData.length / CARDS_PER_PAGE);

    const handlePrev = () => {
        setPageIndex((prev) => Math.max(prev -1, 0));
    };

    const handleNext = () => {
        setPageIndex((prev) => Math.min(prev +1, maxPage -1));
    };

    const isMobile = window.innerWidth <=900;

    const visibleCards = isMobile
    ? cardData
    : cardData.slice (
        pageIndex * CARDS_PER_PAGE,
        (pageIndex + 1) * CARDS_PER_PAGE
    );

     return (
        <Wrapper>
            <BackgroundContainer>
                <Title>
                    <img src="/images/bukuceritaku.png" alt="daftarcerita"></img>
                </Title>
                <ArrowBack onClick={() => navigate('/')}>
                                    <img src="/images/arrowback.png" alt="arrowback"></img>
                </ArrowBack>
                <ButtonArea>
                 <Button1 onClick={() => navigate('/tutorial')}>
                                    <img src="/images/tutorial.png" alt="arrowback"></img>
                </Button1>
                <Button2 onClick={() => navigate('/hurufSIBI')}>
                                    <img src="/images/huruf.png" alt="arrowback"></img>
                </Button2>
                </ButtonArea>
                <CardScrollWrapper>
                    {!isMobile && (
                        <ArrowButton direction="left" onClick={handlePrev} disabled={pageIndex === 0}>‹</ArrowButton>
                    )}
                <CardGrid style={{ overflowX: 'hidden'}}>
                                {visibleCards.map((card) => {
                                const gameName = card.title.toLowerCase();
                                const stars = Number(starsData[gameName]) || 0;
                    return (
                    <Card key={card.title}>
                        <CardImage src={card.image} alt={card.title} />
                        <CardLabel src={card.label} alt={card.title} />
                        <StarContainer>
                            {[...Array(stars)].map((_,index) =>
                            <Star key={index} src="/images/star.png" alt="star"/>
                            )}
                        </StarContainer>
                        <ActionsWrapper>
                        <Story to={card.path} key={card.title}>
                            <img src='/images/materi.png' alt="buku ceritaa"></img>
                        </Story>
                        <Flashcard to={card.flashcard} alt={card.title}>
                            <img src='/images/flashcard.png' alt="flashcard"></img>
                        </Flashcard>
                        <Game to={card.game} alt={card.title}>
                            <img src='/images/game.png' alt="game"></img>
                        </Game>
                        <Game to={card.materi} alt={card.title}>
                            <img src='/images/kamus.png' alt="materi"></img>
                        </Game>
                        <AR to={card.ar} alt={card.ar}>
                            <img src='/images/ar.png' alt="ar"></img>
                        </AR>
                        </ActionsWrapper>
                    </Card>
                    );
                })};
                </CardGrid>
                {!isMobile && (
                    <ArrowButton direction="right" onClick={handleNext} disabled={pageIndex === maxPage -1}>›</ArrowButton> 
                )}
                 </CardScrollWrapper>

            </BackgroundContainer>
        </Wrapper>
        );
    };

export default DaftarCerita;

