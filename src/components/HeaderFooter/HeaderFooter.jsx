import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SFooter = css`
    padding: 42px 0 36px;
    text-align: center;
    display: block;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    color: #e1e1e1;
    font-size: 14px;
`;

const SFtLog = css`
    
`;

const SFtLogBtn = css`
    font-size: 14px;
    font-weight: 500;
    color: #8f8f8f;
    letter-spacing: -.1px;
    vertical-align: top;
    cursor: pointer;
    overflow: visible;
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    border-radius: 0;
    appearance: none;
`;

const SFtUtilization = css`
    margin-top: 12px;
    display: block;
    text-align: center;
    letter-spacing: -1px;
`;

const SFtUtilBtn = css`
    color: #666666;
    font-size: 12px;
    vertical-align: top;
    cursor: pointer;
    overflow: visible;
    padding: 0;
    border: 0;
    background: none;

`;

const SFtNaver = css`
    margin-top: 10px;
`;


function HeaderFooter(props) {
    return (
        <div css={SFooter}>
            <div css={SFtLog}>
                <button css={SFtLogBtn}>로그인</button> | <button css={SFtLogBtn}>전체서비스</button></div>

            <div css={SFtUtilization}>
                <button css={SFtUtilBtn}>이용정책</button> | <button css={SFtUtilBtn}>MY플레이스 고객센터</button> | <button css={SFtUtilBtn}>신고센터</button> | <button css={SFtUtilBtn}>공지사항</button>
            </div>

            <div css={SFtNaver}>
                <button css={SFtUtilBtn}>© NAVER Corp.</button>
            </div>
        </div>
    );
}

export default HeaderFooter;