import React, {useRef, useState} from 'react';
import { Wrapper, Home, PopupContent, PopupOverlay, Button, CloseButton, LetterCard, BackgroundContainer, Button1, Button2, ButtonArea, Title, CardGrid, Card, CardLabel, CardImage, CardVideo } from './MateriHewanElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'hewan', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513250/isyarathewan_smgudb.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/hewan_dppxxm.png', label: '/images/hewan/labelhewan.png',
            // Hewan
        letters: [
        { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "W", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513331/W_lrhkc2.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        ],},
    { title: 'ayam',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513247/isyaratayam_f7g0uo.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/ayam_i5rfu6.png', label:'/images/hewan/labelayam.png',
                // Ayam
        letters: [
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "Y", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758700230/WhatsApp_Video_2025-09-19_at_08.09.33_2a1ef62f_su0ygc.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        ],
    },
    { title: 'kambing',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513251/isyaratkambing_joo1wb.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514587/kambing_zqxg3k.png', label:'/images/hewan/labelkambing.png',
                // Kambing
        letters: [
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
        ],
    },
    { title: 'bebek',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513249/isyaratbebek_cif4sc.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514593/bebek_ytl1tl.png', label:'/images/hewan/labelbebek.png',
                // Bebek
        letters: [
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        ],
    },
    { title: 'peternakan',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513253/isyaratpeternakan_qfkcfq.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514648/peternakan_s92eop.png', label:'/images/hewan/labelpeternakan.png',
                // Peternakan
        letters: [
        { letter: "P", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513322/P_dxkuck.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        ],
    },
    { title: 'berenang',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513251/isyaratberenang_jr9aia.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514586/berenang_t41vmg.png', label: '/images/hewan/labelberenang.png',
                // Berenang
        letters: [
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
        ],
    }
]

const CARDS_PER_PAGE = 4;
const MateriHewan = () => {
    const navigate = useNavigate();
    const videoRefs = useRef([]);
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <Wrapper>
            <Home onClick={()=> navigate('/daftarcerita')}>
                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png" alt="daftar cerita"/>
                 </Home>
            <BackgroundContainer>
                <Title>
                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758515292/katahariini_qycvok.png" alt="katahariini"></img>
                </Title>
                <ButtonArea>
                <Button1 to="/flashcardhewan">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514585/flashcards_xpfahw.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/hewan">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758701887/cerita_e3c9wy.png" alt="cerita"></img>             
                </Button2>
                </ButtonArea>
                <div className="flex flex-wrap gap-4">
                    <CardGrid>
                {cardData.map((card) => (
                    <Card>
                        <video
                        useRef={el => videoRefs.current[card.title] = el}
                        src={card.video}
                        controls
                        style={{width: "300px", height:"auto", borderRadius:"12px"}}
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
                        <Button onClick={()=> setSelectedCard(card)}><span>Lihat Huruf</span></Button>
                    </Card>
                    ))}
                </CardGrid>
                </div>
            </BackgroundContainer>
            {selectedCard && (
                <PopupOverlay onClick={()=> setSelectedCard(null)}>
                    <PopupContent onClick={(e)=> e.stopPropagation()}>
                        <CloseButton onClick={()=> setSelectedCard(null)}>X</CloseButton>
                        {selectedCard.letters.map((item,idx) => (
                            <LetterCard key={idx}>
                                <video src={item.video} controls />
                                <span>{item.letter}</span>
                            </LetterCard>
                        ))}
                    </PopupContent>
                </PopupOverlay>)}
        </Wrapper>);
    };

export default MateriHewan;

