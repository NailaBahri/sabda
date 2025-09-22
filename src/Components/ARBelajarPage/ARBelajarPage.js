import React from 'react';
import { Wrapper , Home} from "./ARBelajarElements";
import { useNavigate } from 'react-router-dom';

const ARBelajar = () => {
    const navigate= useNavigate();
    return (
        <Wrapper>
             <Home onClick={() => navigate('/daftarcerita')}>
                          <img src='/images/home.png' alt="home" />
                          </Home>
            <img src="/images/belajarqr.png" alt="belajar"/>
        </Wrapper>
    )
}

export default ARBelajar;