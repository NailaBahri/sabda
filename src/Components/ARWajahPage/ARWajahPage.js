import React from 'react';
import { Wrapper, Home} from "./ARWajahElements";
import { useNavigate } from 'react-router-dom';

const ARTubuh=() => {
    const navigate = useNavigate();
    return (
        <Wrapper>
             <Home onClick={() => navigate('/daftarcerita')}>
                          <img src='/images/home.png' alt="home" />
                          </Home>
            <img src="/images/tubuhqr.png" alt="tubuh"/>
        </Wrapper>
    )
}

export default ARTubuh;