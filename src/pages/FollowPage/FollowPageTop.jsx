import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SMiddle = css`
    display: block;
    height: auto;
    background: #f8fafb;
`; 

const SMiddleInner = css`
    display: block;
    width: 100%;
    max-width: 720px;
    height: 66px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px;

`;

const SInnerLeft = css`
    display: flex;
    padding: 6px 98px 6px 0;
    letter-spacing: -1px;
    position: relative;
    height: 100%;
`;

const SInnerInner = css`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    z-index: 1;
    margin: 0;
    border: 0;
    vertical-align: baseline;
`;

const SBtnAll = css`
    display: inline-block;
    margin: 5px;
    width: 55px;
    height: 42px;
    vertical-align: top;
    font-size: 15px;
    border-radius: 5px;
    border: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 6px 0  rgba(0,0,0,.06);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
`;

const SBtnFollow = css`
    display: inline-block;
    margin: 5px;
    width: 69.5px;
    height: 42px;
    vertical-align: top;
    font-size: 15px;
    border-radius: 5px;
    border: 0;

    background-color: #ffffff;
    box-shadow: 0 2px 6px 0  rgba(0,0,0,.06);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
`;

const SArea = css`
    display: inline-block;
    margin: 5px;
    width: 98px;
    height: 42px;
    vertical-align: top;
    font-size: 15px;
    
    border-radius: 5px;
    border: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 6px 0  rgba(0,0,0,.06);
    cursor: pointer;

    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
`;

const SLocation = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: 12px 16px 12px 20px;
`;

const SLocBtn = css`
    display: inline-block;
    vertical-align: top;
    width: 62px;
    height: 42px;
    border-radius: 5px;
    background: transparent;
    font-weight: 600;
    color: #7f8daa;
    cursor: pointer;
    overflow: visible;
    padding: 0;
    border: 0;
`;


function FollowPageTop(props) {
    const navigate = useNavigate(); // useNavigate 훅을 이용해 네비게이션 함수를 가져옵니다.
    
    
    const location = useLocation(); // 현재 경로를 가져옴
    const [ selectedButton, setSelectedButton ] = useState('following')

    const handleButtonClick = (buttontype) => {
        setSelectedButton(buttontype);
        if (buttontype === 'all') {
            navigate('/feed'); // '전체' 버튼을 클릭하면 /feed로 이동합니다.
        }
        if (buttontype === 'following') {
            navigate('/feed-follow'); // '팔로잉' 버튼을 클릭하면 /feed-follow로 이동합니다.
        }
    };

    

    return (
    <div css={SMiddle}>
            <div css={SMiddleInner}>
                <div css={SInnerLeft}>
                    <div css={SInnerInner}>
                        <button 
                        css={[SBtnAll, selectedButton === 'all' && 
                        { backgroundColor: '#2da1ee',
                        fontWeight: 700, color: '#fff', boxShadow: '0 2px 6px 0 rgba(37,146,255,.35)',
                    },
                ]}
                        onClick={() => handleButtonClick('all')}
                        >전체</button>

                        <button css={[SBtnFollow, selectedButton === 'following' && 
                        { backgroundColor: '#2da1ee',
                        fontWeight: 700, color: '#fff', boxShadow: '0 2px 6px 0 rgba(37,146,255,.35)',
                    },
                ]}
                            onClick={() => handleButtonClick('following')}>
                            팔로잉</button>

                        <button css={[SArea, selectedButton === 'area' && 
                        { backgroundColor: '#2da1ee',
                        fontWeight: 700, color: '#fff', boxShadow: '0 2px 6px 0 rgba(37,146,255,.35)',
                    },
                ]}
                            onClick={() => handleButtonClick('area')}>
                            + 관심지역</button>
                    </div>

                    <div css={SLocation}>
                        <button css={SLocBtn}> <MdOutlineLocationSearching/>현위치
                        </button>
                    </div>
                </div>
            </div>

    </div>

    );
}

export default FollowPageTop;