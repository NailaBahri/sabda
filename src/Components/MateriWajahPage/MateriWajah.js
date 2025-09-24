import React, {useRef, useState} from 'react';
import { Wrapper, Home, BackgroundContainer, Button, PopupContent, LetterCard, CloseButton, ButtonImage, Title, CardGrid, Card, CardLabel, CardImage, CardVideo, Button1, Button2, ButtonArea, PopupOverlay} from './MateriWajahElements';
import { Link, useNavigate} from 'react-router-dom';


const cardData = [
    { title: 'mata', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694963/isyaratmata_bspedm.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694948/mata_rkr7n0.png', label: '/images/tubuh/labelmata.png',
        letters: [
      { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
      { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
      { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
      { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
    ],
    },
    { title: 'hidung', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694958/isyarathidung_eplhbe.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694954/hidung_gl1fnw.png', label:'/images/tubuh/labelhidung.png',
            letters: [
    { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
    { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
    { letter: "D", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513281/D_b2xclh.mp4" },
    { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
    { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
    { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
    ],
    },
    { title: 'mulut', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694966/isyaratmulut_rll6dn.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694941/mulut_ijcw1k.png', label:'/images/tubuh/labelmulut.png',
            // Mulut
    letters: [
    { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
    { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
    { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
    { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
    { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
    ],
    },
    { title: 'tangan', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694961/isyarattangan_vxjobr.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694952/tangan_k0hexc.png', label:'/images/tubuh/labeltangan.png',
            // Tangan
    letters: [
    { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
    { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
    { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
    { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
    { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
    { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
    ],
    },
    { title: 'kaki', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694964/isyaratkaki_bhx7j0.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694951/kaki_tos34e.png', label:'/images/tubuh/labelkaki.png',
            // Kaki
    letters: [
    { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
    { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
    { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
    { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
    ],
    },
    { title: 'telinga', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694960/isyarattelinga_ziogia.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694956/telinga_yxbbyy.png', label:'/images/tubuh/labeltelinga.png',
            // Telinga
    letters: [
    { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
    { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
    { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
    { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
    { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
    { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
    { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
    ],
    },
    { title: 'tubuh', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694967/isyarattubuh_li28zj.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694949/tubuh_ouqole.png', label: '/images/tubuh/labeltubuh.png',
            letters: [
    { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
    { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
    { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
    { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
    { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
    ],
    }
]

const CARDS_PER_PAGE = 4;
const MateriWajah = () => {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);
    const videoRefs = useRef([]);
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
                <Button1 to="/flashcardtubuh">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514585/flashcards_xpfahw.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/tubuh">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758701887/cerita_e3c9wy.png" alt="cerita"></img>             
                </Button2>
                </ButtonArea>
                <div className="flex flex-wrap gap-4">
                    <CardGrid>
                {cardData.map((card) => (
                    <Card key={card.title}>
                        <video
                        ref={el => videoRefs.current[card.title] = el}
                        src={card.video}
                        controls
                        style={{ width: "300px", height: "auto", borderRadius: "12px" }}
                        alt={card.title} 
                        onEnded={() => {
                            const vid = videoRefs.current[card.title];
                            if (vid) {
                                vid.currentTime = 0;
                                vid.pause();
                            }
                        }}/>
                        <CardImage src={card.image} alt={card.title} />
                        <CardLabel src={card.label} alt={card.title} />
                        <Button onClick={() => setSelectedCard(card)}><span>Lihat Huruf</span> </Button>
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

export default MateriWajah;

