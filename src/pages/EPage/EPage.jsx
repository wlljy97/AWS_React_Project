import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import earth from "../../assets/earth.png"
import flag3 from "../../assets/flag3.png"

const SBa = css`
    display: block;
    padding: 25px 20px;
    letter-spacing: -1px;
`;

const SBack = css`
    background-image: linear-gradient(127deg,#eb8787 7%,#ef9177 87%);
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
    color: #fff;
    margin-top: 5px;
    font-size: 15px;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    letter-spacing: -.5px;
    line-height: 2.3rem;
`;



const SMap = css`
    width: auto;
    height: 180px;
    margin-top: 27px;
`;

const SMapImg = css`
    width: 235px;
    height: 18-px;
`;


function EPage(props) {

    return (
        <div css={SBa}>
            <div css={SBack}>
                <div css={STitle}>
                    <img src={flag3} alt="" />
                </div>
                    <div css={STitle2}>
                        가고싶은 맛집, 카페 저장하고 <nav>나의 <strong css={SStrong}>리스트</strong>를 만들어 보세요</nav>
                    </div>
                    <div css={STitle3}>여행 코스도 계획하기도 굳~</div>
                    <div css={SMap}><img css={SMapImg} src={earth} alt="" /></div>
                    
            </div>
        </div>

    );
}

export default EPage;