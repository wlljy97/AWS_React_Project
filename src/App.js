/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Reset } from 'styled-reset';
import { GSCommon } from './styles/common';
import HeaderHigh from "./components/HeaderHigh/HeaderHigh";
import HeaderMiddle from "./components/HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import APage from "./pages/APage/APage";
import BPage from "./pages/BPage/BPage";
import Cpage from "./pages/CPage/Cpage";
import DPage from "./pages/DPage/DPage";
import EPage from "./pages/EPage/EPage";
import HeaderFooter from "./components/HeaderFooter/HeaderFooter";
import FollowPage from "./pages/FollowPage/FollowPage";


function App() {
  return (
    <>
    <Reset />
      <Global styles={GSCommon} />
        <HeaderHigh />
          <HeaderMiddle />
            <HeaderBottom />
            
        
        <Routes>
          <Route path="/" element={ <Navigate to="/feed" />} />
          <Route path="/feed" element={ <APage />} />
          
          <Route path="/visit" element={ <BPage />} />
          <Route path="/review" element={ <Cpage />} />
          <Route path="/reservation" element={ <DPage />} />
          <Route path="/storage" element={ <EPage />} />
          <Route path="/feed" element={<APage />} />
          <Route path="/feed-follow" element={< FollowPage />} />

        </Routes>

          <HeaderFooter/>
    </>
  );
}

export default App;
