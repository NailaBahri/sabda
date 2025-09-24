import React from 'react';
import { Wrapper, Home} from "./ARWajahElements";
import { useNavigate } from 'react-router-dom';

const ARTubuh=() => {
    const navigate = useNavigate();
    return (
        <Wrapper>
             <Home onClick={() => navigate('/daftarcerita')}>
                          <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png" alt="home" />
                          </Home>
            <img src="/images/tubuhqr.png" alt="tubuh"/>
        </Wrapper>
    )
}

export default ARTubuh;