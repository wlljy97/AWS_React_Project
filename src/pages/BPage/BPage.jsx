import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import map from "../../assets/map.png"
import flag from "../../assets/flag.png"

const SBa = css`
    display: block;
    padding: 25px 20px;
    letter-spacing: -1px;
`;

const SBack = css`
    background-image: linear-gradient(142deg,#55abab,#6fc2ac);
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 430px;
    padding: 34px 30px 40px;
    border-radius: 15px;
    color: #fff;
    text-align: center;
    display: block;
    letter-spacing: -1px;
`;

const STitle = css`
    display: block;
    width: 19px;
    height: 20px;
    margin: 0 auto 15px;
`;

const STitle2 = css`
    display: block;
    color: #fff;
    text-align: center;
    font-size: 20px;
    /* font-weight: 700; */
    width: auto;
    height: 53px;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
`;

const SStrong = css`
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
`;

const STitle3 = css`
    display: block;
    text-align: center;
    color: #bbedee;
    margin-top: 5px;
    font-size: 15px;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    letter-spacing: -.5px;
    line-height: 2.3rem;
`;

const SMap = css`
    width: auto;
    height: 155px;
    margin-top: 27px;
`;

const SMapImg = css`
    width: 235px;
    height: 155px;
`;

const SReview = css`
    color: #fff;
    text-align: center;

    display: block;
    margin-top: 22px;
    width: auto;
    height: 46px;
`;

const SReviewBtn = css`
    width: 143px;
    padding: 9px 0;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 22px;
    color: #fff;
    height: 46px;
    font-family: inherit;
    font-size: inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
    cursor: pointer;
    overflow: visible;
    background: none;
`;

function BPage(props) {

    return (
        <div css={SBa}>
            <div css={SBack}>
                <div css={STitle} >
                    <img src={flag} alt="" />
                </div>
                    <div css={STitle2}>
                        <strong css={SStrong}>영수증/카드내역 인증,예약,주문</strong>한 <nav>장소가 나의 기록이 됩니다.</nav>
                    </div>
                    <div css={STitle3}>방문했던 곳을 한 눈에 모아보세요.</div>
                    <div css={SMap}><img css={SMapImg} src={map} alt="" /></div>
                    <div css={SReview}>
                        <button css={SReviewBtn}>리뷰 참여하기</button>
                    </div>
            </div>
        </div>

    );
}

export default BPage;