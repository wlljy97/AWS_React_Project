import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SMainContainer = css`
    display: flex;
`;

function MainLayout({ title, menus, children }) {
    const testMenus = [ 1, 2, 3, 4, 5 ];

    return (
    <>
        <h1>{title}</h1>
        <div css={SMainContainer}></div>
        <ul>
            {menus.map((menu) => <li key={menu.id} >{menu.name}</li>)}
        </ul>
        <div>
            {children}
        </div>
    </>
    );
}

export default MainLayout;