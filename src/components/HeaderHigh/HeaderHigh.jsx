import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profile from "../../assets/nLogo.png"
import { RiCouponLine } from "react-icons/ri";
import coupon from "../../assets/스크린샷 2023-08-25 110805.png"
import { HiMenu } from "react-icons/hi";

const SHeaderHigh = css`
    display: flex;
    height: 53px;
    padding: 8px 18px 8px 15px;

    border-color: rgba(0,0,1,.04);
    background-color: #06b495;
    box-sizing: border-box;

`;

const SHeaderMyPlace =css`
    display: block;
    /* font-size: 2em; */
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    letter-spacing: -1px;
    flex: 1 1;
    margin: 0;
    padding: 0;
`;

const SNButton = css`
    padding: 8px 5px 7px;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 31px;
    height: 36px;

    cursor: pointer;

    overflow: visible;
    /* padding: 0; */
    border: 0;
    background: none;
    color: inherit;
    border-radius: 0;
    appearance: none;
`;

const SBtnImg = css`
    width: 21px;
    height: 21px;
`

const SMyplaceBox = css`
    margin-left: 3px;
    padding: 11px 2px 5px;
    display: inline-block;
    vertical-align: top;
    text-align: left;

    width: 90px;
    height: 36px;
    color: #fff;


    overflow: visible;
    border: 0;
    background: none;
    border-radius: 0;
    appearance: none;

    cursor: pointer;
`;

const SCoupon = css`
    flex: none;
    position: relative;
    margin: 0 5px;
    width: 34px;
    height: 36px;

    cursor: pointer;

    overflow: visible;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;

    border-radius: 0;
    appearance: none;
    /* letter-spacing: -.3px;
    line-height: 2rem; */
`;

const SCup = css`
    width: 34px;
    height: 23px;
`;

const SMenuBtn = css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: -10px;
    padding: 10px;
    width: 38px;
    height: 36px;

    cursor: pointer;

    overflow: visible;
    border: 0;
    background: none;
    
`;

const SMenu = css`
    color: white;

`;


function HeaderHigh(props) {
    return (
    <div css={SHeaderHigh}>
        <h1 css={SHeaderMyPlace}>
        <button css={SNButton}>
            <img css={SBtnImg} src={profile} alt="" />
        </button>
        <button css={SMyplaceBox}>
            MY플레이스
        </button>
        </h1>
        <button css={SCoupon} >
            <img css={SCup} src={coupon} alt="" />
            {/* <RiCouponLine css={SCup} place /> */}
        </button>
        <button css={SMenuBtn}>
            <HiMenu css={SMenu} />
        </button>
    </div>
    );
}

export default HeaderHigh;