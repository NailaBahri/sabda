import React, {useRef, useState, useEffect, useCallback} from 'react';
import { Wrapper, Button1, Button2, ButtonArea, CardScrollWrapper, AR,  ArrowBack, BackgroundContainer, Flashcard, Game, Story, Title, ActionsWrapper, CardGrid, Card, CardLabel, CardImage, ArrowButton, StarContainer, Star } from './DaftarCeritaElements';
import { Link, useNavigate} from 'react-router-dom';
import { db } from "./../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const cardData = [
    { title: 'tubuh', path: '/tubuh', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758688106/cover-tubuh_vbbugu.png', label:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758516258/label-tubuh_gnfwbj.png', flashcard:'/flashcardtubuh', materi:'/kosakatatubuh', game:'/gametubuh', ar: '/ARtubuh'},
    { title: 'keluarga', path: '/keluarga', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758688108/cover-keluarga_kybd2b.png', label:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515295/labelkeluarga_bhw9mj.png', flashcard:'/flashcardkeluarga', materi:'/kosakatakeluarga', game:'/gamekeluarga', ar: '/ARkeluarga'},
    { title: 'belajar', path: '/belajar', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758688109/cover-belajar_kzovd7.png', label:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758516257/label-belajar_jdy06m.png', flashcard:'/flashcardbelajar', materi:'/kosakatabelajar', game:'/gamebelajar', ar: '/ARbelajar'},
    { title: 'hewan', path: '/hewan', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758688118/cover-hewan_f3n0gn.png', label:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758516257/label-hewan_dcfzge.png', flashcard:'/flashcardhewan', materi:'/kosakatahewan', game:'/gamehewan', ar:'ARhewan'},
    { title: 'perasaan', path: '/perasaan', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758688116/cover-perasaan_idsr4n.png', label:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758688369/label-perasaan_jmwtsv.png', flashcard:'/flashcardperasaan', materi:'/kosakataperasaan', game:'/gameperasaan', ar: 'ARperasaan'}
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
                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514130/bukuceritaku_jyztts.png" alt="daftarcerita"></img>
                </Title>
                <ArrowBack onClick={() => navigate('/')}>
                                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514126/arrowback_rjmxfc.png" alt="arrowback"></img>
                </ArrowBack>
                <ButtonArea>
                 <Button1 onClick={() => navigate('/tutorial')}>
                                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758687996/tutorial_ujwscc.png" alt="tutorial"></img>
                </Button1>
                <Button2 onClick={() => navigate('/hurufSIBI')}>
                                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758687986/huruf_olmvb3.png" alt="hurufSIBI"></img>
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
                            <Star key={index} src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758688670/star_gip194.png" alt="star"/>
                            )}
                        </StarContainer>
                        <ActionsWrapper>
                        <Story to={card.path} key={card.title}>
                            <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758688556/materi_bbuvcp.png' alt="buku ceritaa"></img>
                        </Story>
                        <Flashcard to={card.flashcard} alt={card.title}>
                            <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758860931/flashcard_hlgeif.png' alt="flashcard"></img>
                        </Flashcard>
                        <Game to={card.game} alt={card.title}>
                            <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758860941/game_kawelu.png' alt="game"></img>
                        </Game>
                        <Game to={card.materi} alt={card.title}>
                            <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758860933/kamus_r2xfe2.png' alt="materi"></img>
                        </Game>
                        <AR to={card.ar} alt={card.ar}>
                            <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758688629/ar_lkzacl.png' alt="ar"></img>
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

