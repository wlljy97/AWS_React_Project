import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import APageBtm from './APageBtm';
import APageTop from './APageTop';
import APageMid from './APageMid';



function APage(props) {
    return (
    <>
        <APageTop />
        <APageMid />
        <APageBtm />
    </>
    );
}

export default APage;