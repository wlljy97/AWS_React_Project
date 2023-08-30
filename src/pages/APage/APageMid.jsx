import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SBar = css`
    display: block;
    letter-spacing: -1px;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
`;

const STable = css`
    display: block;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px;
`;

const STable2 = css`
    display: flex;
    /* overflow-x: auto; 가로 스크롤 활성화 */
    /* overflow-y: hidden; 세로 오버플로우 숨김 */
    overflow: hidden;
    position: relative;
    margin: 0 -20px;
    padding: 10px 0 2px;
    position: relative;
    height: 100%;
    white-space: nowrap;
`;


const STableBtn = css`
    padding: 0 13px;
    margin-left: 6px;
    border-radius: 19px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    width: auto;
    height: 36px;
    color: #666;
    border: 1px solid #eaeef2;
    overflow: visible;
    background: none;
    appearance: none;
    cursor: pointer;

    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
`;

const STableChangeBtn = css`
    margin-top: 13px;
    width: 30px;
    height: 30px;
    font-weight: 600;
    border-radius: 50%;
    border: 0;
    background: white;
    color: #666;
    z-index: 1;
    cursor: pointer;
`;




function APageMid(props) {
    const [ selectedButton, setSelectedButton ] = useState('');
    const [showScrollButtons, setShowScrollButtons] = useState(false); // 스크롤 버튼 가시성 상태
    const scrollableWrapperRef = useRef(null); // 스크롤 가능한 래퍼에 대한 참조

    const handleButtonClick = (buttontype) => {
        if (selectedButton === buttontype) {
            setSelectedButton('');
        } else {
            setSelectedButton(buttontype);
        }
        if (scrollableWrapperRef.current) {
            const buttonIndex = Array.from(scrollableWrapperRef.current.children).findIndex(
                (child) => child.textContent === buttontype
            );
            const scrollPosition = buttonIndex * scrollableWrapperRef.current.children[0].offsetWidth;
            scrollableWrapperRef.current.scrollLeft = scrollPosition - (scrollableWrapperRef.current.offsetWidth / 3) + (scrollableWrapperRef.current.children[0].offsetWidth / 2);
        }
    };

    const handleScrollLeft = () => {
        scrollableWrapperRef.current.scrollBy({
            left: -500, // 필요에 따라 스크롤 양 조절
            behavior: 'smooth',
        });
    };

    const handleScrollRight = () => {
        scrollableWrapperRef.current.scrollBy({
            left: 500, // 필요에 따라 스크롤 양 조절
            behavior: 'smooth',
        });
    };

    const handleMouseEnter = () => {
        setShowScrollButtons(true);
    };

    const handleMouseLeave = () => {
        setShowScrollButtons(false);
    };

    // 왼쪽 스크롤 버튼을 표시할 지 여부 계산
    const showLeftScrollButton = scrollableWrapperRef.current && scrollableWrapperRef.current.scrollLeft > 0;

    // 오른쪽 스크롤 버튼을 표시할 지 여부 계산
    const showRightScrollButton = scrollableWrapperRef.current &&
        scrollableWrapperRef.current.scrollLeft < (scrollableWrapperRef.current.scrollWidth - scrollableWrapperRef.current.offsetWidth);


    return (
        <div css={SBar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div css={STable}>
                <div css={STable2}>
                    <button
                        onClick={handleScrollLeft}
                        css={[
                            STableChangeBtn, 
                            { visibility: showScrollButtons && showLeftScrollButton ? 'visible' : 'hidden' }
                        ]} 
                        className="scroll-button"
                    >
                        &lt;
                    </button>

                    <div 
                        ref={scrollableWrapperRef} 
                        css={STable2}
                        className="scrollable-wrapper"
                    >

                        <button 
                        css={[STableBtn, selectedButton === '한식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('한식')}>한식</button>

                        <button 
                        css={[STableBtn, selectedButton === '숙박' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('숙박')}>숙박</button>

                        <button 
                        css={[STableBtn, selectedButton === '카페' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('카페')}>카페</button>

                        <button 
                        css={[STableBtn, selectedButton === '아이와 함께' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('아이와 함께')}>아이와 함께</button>

                        <button 
                        css={[STableBtn, selectedButton === '양식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('양식')}>양식</button>

                        <button 
                        css={[STableBtn, selectedButton === '문화예술' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('문화예술')}>문화예술</button>

                        <button 
                        css={[STableBtn, selectedButton === '일식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('일식')}>일식</button>

                        <button 
                        css={[STableBtn, selectedButton === '캠핑' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('캠핑')}>캠핑</button>

                        <button 
                        css={[STableBtn, selectedButton === '역사유적' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('역사유적')}>역사유적</button>

                        <button 
                        css={[STableBtn, selectedButton === '중식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('중식')}>중식</button>

                        <button 
                        css={[STableBtn, selectedButton === '낚시' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff',},]}
                        onClick={() => handleButtonClick('낚시')}
                        >낚시</button>

                        <button 
                        css={[STableBtn, selectedButton === '자연명소' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('자연명소')}>자연명소</button>

                        <button 
                        css={[STableBtn, selectedButton === '분식/치킨' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('분식/치킨')}>분식/치킨</button>
                        
                        <button 
                        css={[STableBtn, selectedButton === '물놀이' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('물놀이')}>물놀이</button>

                        <button 
                        css={[STableBtn, selectedButton === '아시아/퓨전 음식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('아시아/퓨전 음식')}>아시아/퓨전 음식</button>

                        <button 
                        css={[STableBtn, selectedButton === '피크닉' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('피크닉')}>피크닉</button>
                        
                        <button 
                        css={[STableBtn, selectedButton === '체험관광' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('체험관광')}>체험관광</button>
                        
                        <button 
                        css={[STableBtn, selectedButton === '클래스 · 소품' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',fontWeight: 600, color: '#fff', },]}
                        onClick={() => handleButtonClick('클래스 · 소품')}>클래스 · 소품</button>

                        
                </div>
                <button 
                    onClick={handleScrollRight} 
                    css={[
                        STableChangeBtn,
                        { visibility: showScrollButtons && showRightScrollButton ? 'visible' : 'hidden' }
                    ]}
                    className="scroll-button"
                    >
                        &gt;
                    </button>

                </div>
            </div>
        </div>
    );
}

export default APageMid;