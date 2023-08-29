import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SMainLog = css`
    display: block;
    text-align: center;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.05), 0 0 1px 0 rgba(0,21,81,.05);
    letter-spacing: -0.3px;
    background-color: #f9f9f9;
    color: #000;
    word-wrap: break-word;
    word-break: break-word;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    font-size: 16px;
    line-height: 24px;
`;

const SLoginBox = css`
    display: block;
    padding: 44px 0 50px;
`;

const SLogin = css`
    display: block;
    color: #333;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.3px;
`

const SLogName = css`
    font-weight: bold;
`;

const SLoginBtnBox = css`
    display: inline-block;
    margin-top: 15px;
    padding: 10px 25px;
    background-color: #03c75a;
    border-radius: 22px;
    color: #fff;
    letter-spacing: -0.3px;
    cursor: pointer;
`;

const SGuestLogBox = css`
    display: block;
    margin: 0 20px;
    padding: 44px 0 50px;
    border-top: 1px solid;
    border-top-color: #ebedef;
`;

const SGuestLog = css`
    color: #333;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.3px;
`;

const SGuestInputBox = css`
    margin-top: 16px;
    text-align: center;
`;

const SGuestInputBox2 = css`
    margin-top: 10px;
    text-align: center;
`;

const SGuestInput = css`
    width: 239px;
    height: 41px;
    padding-left: 14px;
    background-color: #fff;
    border: solid 1px;
    border-color: #d9dadb;
    border-radius: 10px;
    appearance: none;
    vertical-align: middle;
`;

const SReservation = css`
    display: inline-block;
    margin-top: 20px;
    padding: 9px 24px;
    background-color: #383838;
    border: solid 1px rgba(0,0,0,.05);
    border-radius: 22px;
    color: #fff;
    letter-spacing: -0.3px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.04);
    text-decoration: none;
    cursor: pointer;
`


function DPage(props) {
    return (
        <div css={SMainLog}>
            <div css={SLoginBox}>
                <div css={SLogin}>
                    <strong css={SLogName}>로그인</strong>하고 예약,<nav></nav>
                    주문 내역을 확인해 보세요
                </div>
                <div css={SLoginBtnBox}>
                    네이버 로그인
                </div>
            </div>
            <div css={SGuestLogBox}>
                <div css={SGuestLog}>
                    <strong css={SLogName}>비회원</strong> 예약확인
                </div>
                <div css={SGuestInputBox}><input css={SGuestInput} type="text" placeholder='예약번호 입력' /></div>
                <div css={SGuestInputBox2}><input css={SGuestInput} type="text" placeholder='예약자명 입력' /></div>
                <div css={SReservation}>내 예약 확인</div>
            </div>
        </div>
    );
}

export default DPage;