import React, {useRef, useState} from 'react';
import { Wrapper, Button1, PopupContent, CloseButton, PopupOverlay, Button, LetterCard, Button2, ButtonArea, Home,  BackgroundContainer, ButtonImage, Title, CardGrid, Card, CardLabel, CardImage, CardVideo } from './MateriKeluargaElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'keluarga', video:'/videos/keluarga/isyaratkeluarga.mp4', image: '/images/keluarga/keluarga.png', label: '/images/keluarga/labelkeluarga.png',
            // Keluarga
        letters: [
        { letter: "K", video: "/videos/huruf/K.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "L", video: "/videos/huruf/L.mp4" },
        { letter: "U", video: "/videos/huruf/U.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "G", video: "/videos/huruf/G.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        ],},
    { title: 'ayah', video:'/videos/keluarga/isyaratayah.mp4', image: '/images/keluarga/ayah.png', label:'/images/keluarga/labelayah.png',
                letters: [
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "Y", video: "/videos/huruf/Y.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "H", video: "/videos/huruf/H.mp4" },
        ],
    },
    { title: 'ibu',  video:'/videos/keluarga/isyaratibu.mp4', image: '/images/keluarga/ibu.png', label:'/images/keluarga/labelibu.png',
                // Ibu
        letters: [
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "U", video: "/videos/huruf/U.mp4" },
        ],
    },
    { title: 'adik',  video:'/videos/keluarga/isyaratadik.mp4', image:'/images/keluarga/adik.png', label:'/images/keluarga/labeladik.png',
                // Adik
        letters: [
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "D", video: "/videos/huruf/D.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        ],
    },
    { title: 'kakak',  video:'/videos/keluarga/isyaratkakak.mp4', image: '/images/keluarga/kakak.png', label: '/images/keluarga/labelkakak.png',
                // Kakak
        letters: [
        { letter: "K", video: "/videos/huruf/K.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        ],
    },
    { title: 'bermain bola',  video:'/videos/keluarga/isyaratbermainbola.mp4', image: '/images/keluarga/bermainbola.png', label: '/images/keluarga/labelbermainbola.png',
                // Bermain Bola
        letters: [
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "O", video: "/videos/huruf/O.mp4" },
        { letter: "L", video: "/videos/huruf/L.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        ],
    },
    { title: 'berkebun', video:'/videos/keluarga/isyaratberkebun.mp4', image:'/images/keluarga/berkebun.png', label:'/images/keluarga/labelberkebun.png',
                // Berkebun
        letters: [
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "U", video: "/videos/huruf/U.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        ],
    },
    { title: 'memasak',  video:'/videos/keluarga/isyaratmemasak.mp4', image:'/images/keluarga/memasak.png', label: '/images/keluarga/labelmemasak.png',
                // Memasak
        letters: [
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "S", video: "/videos/huruf/S.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        ],
    },
    { title: 'menari',  video:'/videos/keluarga/isyaratmenari.mp4', image:'/images/keluarga/menari.png', label: '/images/keluarga/labelmenari.png',
            letters: [
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        ],}
]

const CARDS_PER_PAGE = 4;
const MateriKeluarga = () => {
    const navigate = useNavigate();
    const videoRefs = useRef([]);
    const [selectedCard, setSelectedCard]= useState(null);

    return (
        <Wrapper>
            <Home onClick={()=> navigate('/daftarcerita')}>
                    <img src="/images/home.png" alt="daftar cerita"/>
                </Home>
            <BackgroundContainer>
                <Title>
                    <img src="/images/katahariini.png" alt="katahariini"></img>
                </Title>
                <ButtonArea>
                <Button1 to="/flashcardkeluarga">
                       <img src="/images/flashcards.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/keluarga">
                       <img src="/images/cerita.png" alt="cerita"></img>             
                </Button2>
                </ButtonArea>
                <div className="flex flex-wrap gap-4">
                    <CardGrid>
                {cardData.map((card) => (
                    <Card>
                        <video
                        ref={el => videoRefs.current[card.title] = el}
                        src={card.video}
                        controls
                        style={{width: "300px", height: "auto", borderRadius:"12px"}}
                        onEnded={() => {
                            const vid= videoRefs.current[card.title];
                            if (vid){
                                vid.currentTime = 0;
                                vid.pause();
                            }
                        }}
                        />
                        <CardImage src={card.image} alt={card.title} />
                        <CardLabel src={card.label} alt={card.title} />
                        <Button onClick={() => setSelectedCard(card)}><span>Lihat Huruf</span></Button>
                    </Card>
                    ))}
                </CardGrid>
                </div>
            </BackgroundContainer>
{selectedCard && (
                <PopupOverlay onClick={()=> setSelectedCard(null)}>
                    <PopupContent onClick={(e)=> e.stopPropagation()}>
                        <CloseButton onClick={()=> setSelectedCard(null)}>X</CloseButton>
                        {selectedCard.letters.map((item, idx) => (
                            <LetterCard key={idx}>
                                <video src={item.video} controls />
                                <span>{item.letter}</span>
                            </LetterCard>
                        ))}
                    </PopupContent>

                </PopupOverlay>
            )}
        </Wrapper>);
    };

export default MateriKeluarga;

