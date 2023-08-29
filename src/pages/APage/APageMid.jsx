import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slider from 'react-slick';

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
    overflow: hidden; /* 넘침 숨기기 */
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

function APageMid(props) {
    const [ selectedButton, setSelectedButton ] = useState('');
    const sliderRef = useRef(null)

    const handleButtonClick = (buttontype) => {
        if (selectedButton === buttontype) {
            setSelectedButton('');
        } else {
            setSelectedButton(buttontype);
        }
    };


    return (
        <div css={SBar}>
            <div css={STable}>
                <div css={STable2}>

                        <button 
                        css={[STableBtn, selectedButton === '한식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('한식')}
                        >한식</button>

                        <button 
                        css={[STableBtn, selectedButton === '숙박' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('숙박')}
                        >숙박</button>

                        <button 
                        css={[STableBtn, selectedButton === '카페' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('카페')}
                        >카페</button>

                        <button 
                        css={[STableBtn, selectedButton === '아이와 함께' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('아이와 함께')}
                        >아이와 함께</button>

                        <button 
                        css={[STableBtn, selectedButton === '양식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('양식')}
                        >양식</button>

                        <button 
                        css={[STableBtn, selectedButton === '문화예술' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('문화예술')}
                        >문화예술</button>

                        <button 
                        css={[STableBtn, selectedButton === '일식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('일식')}
                        >일식</button>

                        <button 
                        css={[STableBtn, selectedButton === '캠핑' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('캠핑')}
                        >캠핑</button>

                        <button 
                        css={[STableBtn, selectedButton === '역사유적' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('역사유적')}
                        >역사유적</button>
                        <button 
                        css={[STableBtn, selectedButton === '중식' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('중식')}
                        >중식</button>

                        <button 
                        css={[STableBtn, selectedButton === '낚시' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('낚시')}
                        >낚시</button>
                        <button 
                        css={[STableBtn, selectedButton === '자연명소' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('자연명소')}
                        >자연명소</button>

                        <button 
                        css={[STableBtn, selectedButton === '테마파크' && 
                        { backgroundColor: '#424242', bordercolor: '#424242',
                        fontWeight: 600, color: '#fff', 
                    },
                ]}
                        onClick={() => handleButtonClick('테마파크')}
                        >테마파크</button>


                </div>
            </div>
        </div>
    );
}

export default APageMid;