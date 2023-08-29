import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation } from 'react-router-dom';

const SHeaderBottom = css`
    display: block;
    letter-spacing: -1px;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5000;
    padding: 0 20px;
    height: 51px;

    background: #06b495;
    box-shadow: 0 12px 10px -10px rgba(0,0,0,.03);
`;

const SPid = css`
    display: flex;
    justify-content: space-between;
    max-width: 375px;
    margin: 0 auto;
    white-space: nowrap;
    letter-spacing: -1px;
`;


const SFeed = (pathname) => css`
    position: relative; 
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/feed' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px 1.5px 1.5px 1.5px;
    }
    font-weight: ${pathname === '/feed' ? '900' : '400'};
    color: ${pathname === '/feed' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;

const SVisit = (pathname) => css`
    position: relative; 
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/visit' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px 1.5px 1.5px 1.5px;
    }
    
    font-weight: ${pathname === '/visit' ? '900' : '400'};
    color: ${pathname === '/visit' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;

const SReview = (pathname) => css`
    position: relative; 
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/review' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px 1.5px 1.5px 1.5px;
    }
    font-weight: ${pathname === '/review' ? '900' : '400'};
    color: ${pathname === '/review' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;

const SReservation = (pathname) => css`
    position: relative; 
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/reservation' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px 1.5px 1.5px 1.5px;
    }
    font-weight: ${pathname === '/reservation' ? '900' : '400'};
    color: ${pathname === '/reservation' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;

const SStorage = (pathname) => css`
    position: relative; 
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/storage' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px 1.5px 1.5px 1.5px;
    }
    font-weight: ${pathname === '/storage' ? '900' : '400'};
    color: ${pathname === '/storage' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;


function HeaderBottom(props) {
    const location = useLocation();

    return (
    <div css={SHeaderBottom}>
        
        <div css={SPid}>

            <Link css={SFeed(location.pathname)} to={ "/feed" }>피드</Link>
            
            <Link css={SVisit(location.pathname)} to={ "/visit" }>타임라인</Link>

            <Link css={SReview(location.pathname)} to={ "/review" }>리뷰</Link>
        
            <Link css={SReservation(location.pathname)}  to={ "/reservation" }>예약·주문</Link>

            <Link css={SStorage(location.pathname)} to={ "/storage" }>저장</Link>

            </div>
        
    </div>
    );
}

export default HeaderBottom;