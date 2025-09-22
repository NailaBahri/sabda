import React from 'react';
import Start from './Components/Start/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import DaftarCerita from './Components/DaftarCerita/DaftarCerita';
import './App.css';
import KeluargaPage from './Components/KeluargaPage/KeluargaPage';
import WajahPage from './Components/WajahPage/WajahPage';
import BelajarPage from './Components/BelajarPage/BelajarPage';
import PerasaanPage from './Components/PerasaanPage/PerasaanPage';
import HewanPage from './Components/HewanPage/HewanPage';
import MateriWajah from './Components/MateriWajahPage/MateriWajah';
import GameWajah from './Components/GameWajahPage/GameWajah';
import FlashcardWajah from './Components/FlashcardsWajahPage/FlashcardsWajah';
import MateriHewan from './Components/MateriHewanPage/MateriHewan';
import GameHewan from './Components/GameHewanPage/GameHewan';
import FlashcardHewan from './Components/FlashcardsHewanPage/FlashcardsHewan';
import MateriKeluarga from './Components/MateriKeluargaPage/MateriKeluarga';
import GameKeluarga from './Components/GameKeluargaPage/GameKeluarga';
import FlashcardKeluarga from './Components/FlashcardsKeluargaPage/FlashcardsKeluarga';
import MateriBelajar from './Components/MateriBelajarPage/MateriBelajar';
import GameBelajar from './Components/GameBelajarPage/GameBelajar';
import FlashcardBelajar from './Components/FlashcardsBelajarPage/FlashcardsBelajar';  
import MateriPerasaan from './Components/MateriPerasaanPage/MateriPerasaan';
import GamePerasaan from './Components/GamePerasaanPage/GamePerasaan';
import FlashcardPerasaan from './Components/FlashcardsPerasaanPage/FlashcardsPerasaan';
import TutorialPage from './Components/TutorialPage/TutorialPage';
import ARBelajar from './Components/ARBelajarPage/ARBelajarPage';
import ARHewan from './Components/ARHewanPage/ARHewanPage';
import ARKeluarga from './Components/ARKeluargaPage/ARKeluargaPage';
import ARPerasaan from './Components/ARPerasaanPage/ARPerasaanPage';
import ARTubuh from './Components/ARWajahPage/ARWajahPage';
import HurufSIBI from './Components/HurufSIBIPage/HurufSIBIPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} exact />
        <Route path='/daftarcerita' element={<DaftarCerita />} />
        <Route path='/belajar' element={<BelajarPage />} />
        <Route path='/perasaan' element={<PerasaanPage />} />
        <Route path='/tubuh' element={<WajahPage />} />
        <Route path='/hewan' element={<HewanPage />} />
        <Route path='/keluarga' element={<KeluargaPage />} />
        <Route path='/kosakatatubuh' element={<MateriWajah />} />
        <Route path='/gametubuh' element={<GameWajah />} />
        <Route path='/flashcardtubuh' element={<FlashcardWajah/>} />
        <Route path='/kosakatahewan' element={<MateriHewan />} />
        <Route path='/gamehewan' element={<GameHewan />} />
        <Route path='/flashcardhewan' element={<FlashcardHewan/>} />
        <Route path='/kosakatakeluarga' element={<MateriKeluarga />} />
        <Route path='/gamekeluarga' element={<GameKeluarga />} />
        <Route path='/flashcardkeluarga' element={<FlashcardKeluarga/>} />
        <Route path='/kosakatabelajar' element={<MateriBelajar />} />
        <Route path='/gamebelajar' element={<GameBelajar />} />
        <Route path='/flashcardbelajar' element={<FlashcardBelajar/>} />
        <Route path='/kosakataperasaan' element={<MateriPerasaan />} />
        <Route path='/gameperasaan' element={<GamePerasaan />} />
        <Route path='/flashcardperasaan' element={<FlashcardPerasaan/>} />
        <Route path='/tutorial' element={<TutorialPage/>} />
        <Route path='/ARhewan' element={<ARHewan />} />
        <Route path='/ARbelajar' element={<ARBelajar />} />
        <Route path='/ARtubuh' element={<ARTubuh />} />
        <Route path='/ARkeluarga' element={<ARKeluarga/>} />
        <Route path='/ARperasaan' element={<ARPerasaan />} />
        <Route path='/hurufSIBI' element={<HurufSIBI />} />
      </Routes>
    </Router>
  );
};

export default App;