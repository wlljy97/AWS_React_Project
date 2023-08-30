import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import FollowPageTop from './FollowPageTop';
import FollowPageMid from './FollowPageMid';
import FollowPageBtm from './FollowPageBtm';

function FollowPage(props) {
    return (
        <>
        <FollowPageTop />
        <FollowPageMid />
        <FollowPageBtm />
    </>
    );
}

export default FollowPage;