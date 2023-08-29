import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profileImg from "../../assets/images.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi"
import { LiaCheckCircleSolid } from "react-icons/lia"

const SHeaderMiddle = css`
    display: block;
    height: 151px;
    letter-spacing: -1px;
    padding: 20px 0 11px;
    background: #06b495;
`;

const SMiddleInner = css`
    display: block;
    letter-spacing: -1px;
    max-width: 375px;
    margin: 0 auto;
    padding: 0 20px;
    width: auto;
    height: 120px;
    box-sizing: border-box;
`;

const SLoginBtn = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 191.5px;
    height: 64px;
    cursor: pointer;

    overflow: visible;
    padding: 0;
    border: 0;
    background: none;

    border-radius: 0;
    appearance: none;

    letter-spacing: -.3px;
    line-height: 2rem;
`;

const SProfileBox = css`
    margin-right: 29px;
    position: relative;
    display: block;
    cursor: pointer;

`;

const SProfileImgBox = css`
    width: 64px;
    height: 64px;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.08);
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 50%;
`;

const SProfileImg = css`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 10;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    
`;

const SLogin = css`
    display: inline;
    margin-right: 5px;
    font-size: 16px;
    font-weight: 500;
    line-height: 2rem;
    color: #fff;
    text-align: left;
    
`;

const SLoginCursor = css`
    color: #fff;
`;

const SInner = css`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    
`;

const SReview = css`
    display: block;
    width: 226px;
    height: 38px;
    border-radius: 8px;
    background: #0cc5a4;
    box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    overflow: visible;
    padding: 0;
    border: 0;
    margin-right: 10px;
`;

const SMisson = css`
    display: block;
    width: 102px;
    height: 38px;
    border-radius: 8px;
    background: #0cc5a4;
    box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    overflow: visible;
    padding: 0;
    border: 0;
`;


function HeaderMiddle(props) {
    return (
    <div css={SHeaderMiddle}>
        <div css={SMiddleInner}>
        <button css={SLoginBtn}>
        <div css={SProfileBox}>
            <div css={SProfileImgBox}>
                <img css={SProfileImg} src={profileImg} alt="" />
            </div>
        </div>

        <span css={SLogin}>로그인하기  </span>
        <div css={SLoginCursor}><MdKeyboardArrowRight  /></div>
        </button>

        <div css={SInner}>
        <button css={SReview}><PiPencilSimpleLineFill/>리뷰쓰기</button>
        <button css={SMisson}><LiaCheckCircleSolid/> 미션</button>
        </div>
        </div>
    </div>
    );
}

export default HeaderMiddle;