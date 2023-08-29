import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PiDotsThreeVerticalBold, PiSmileyLight, PiStarLight } from "react-icons/pi";
import { GiPositionMarker } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md"
import userImg from "../../assets/images.jpg"
import user2Img from "../../assets/profile.jpg"
import cof from "../../assets/cof.jpg"
import spge from "../../assets/spge.jpeg"
import coffee from "../../assets/coffee.png"
import heart from "../../assets/heart.png"
import view from "../../assets/view.png"
import ggal from "../../assets/ggal.png"
import umi from "../../assets/umi.png"


const SList = css`
    position: relative;
    overflow-anchor: none;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const SBack = css`
    display: block;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 16px 20px 28px;
    
`;

const SUserBox = css`
    display: flex;
    align-items: center;
    height: 65px;
    
`;

const SUserBtn = css`
    display: flex;
    align-items: center;
    overflow: hidden;
    flex: 1 1;
    margin: -10px;
    padding: 10px;
    text-align: left;
    border: 0;
    background: none;
    color: inherit;
    border-radius: 0;
    cursor: pointer;
    
`;

const SUserIcon = css`
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 50%;
    width: 44px;
    height: 44px;

    margin-right: 8px;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.08);
    background: none;
    
`

const SUserImg = css`
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 50%;
    width: 42px;
    height: 42px;
`


const SBackImg = css`
    border-radius: 8px;
    position: relative;
    width: 600px;
    height: 400px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(0,0,0,.04);
    content: "";
    cursor: pointer;
`;

const SBackImg2 = css`
    border-radius: 8px;
    position: relative;
    width: 600px;
    height: 700px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(0,0,0,.04);
    content: "";
    cursor: pointer;
`;

const SId = css`
    display: block;
    overflow: hidden;
    margin-top: 3px;
    text-align: left;
`;

const SUsername = css`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 700;
    color: #242424;
    letter-spacing: -.2px;
`;

const SPhotoFollowBox = css`
    display: block;
    margin-top: 2px;
    line-height: 1.5rem;
    text-align: left;
`;

const SPhotoFollow = css`
    font-size: 13px;
    color: #8f8f8f;
`;

const SFollowBtn = css`
    width: 70px;
    border-radius: 4px;
    background: #eff6fe;
    font-size: 13px;
    font-weight: 600;
    color: #287cff;
    line-height: 2rem;
    overflow: visible;
    padding: 0;
    border: 0;
    text-align: center;
    cursor: pointer;
`;

const SVerticalBox = css`
    height: 30px;
    position: relative;
    width: 26px;
    vertical-align: top;
    overflow: visible;
    padding: 0;
    border: 0;
    background: none;
`;

const SVertical = css`
    font-size: 20px;
    color: #b8b8b8;
    background: none;
    border: 0;
    cursor: pointer;
`;

const SLocal = css`
    position: relative;
    right: 50px;
    bottom: 30px;
    left: 10px;
    text-align: left;
    display: block;
    cursor: pointer;
`;

const SLocalBar = css`
    background: rgba(0,0,0,.6);
    color: #fff;
    display: inline-flex;
    vertical-align: top;
    max-width: 100%;
    width: auto;
    height: 20px;
    padding: 0 4px;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 700;
`;

const SLocalIcon = css`
    margin: auto;
    line-height: 1.6rem;
`;

const SLocalName = css`
    margin: auto;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

`;

const SAdditionalBox = css`
    position: relative;
    bottom: 30px;
    display: block;
    margin-top: 10px;
    font-size: 15px;
    color: #666;
    /* line-height: 2.2rem; */

    cursor: pointer;
    background: none;
    border: none;
    text-align: left;
`;

const SSAdditional = css`
    max-height: none;
    white-space: pre-line;
    display: inline;
    text-align: left;
`;

const STagBox = css`
    position: relative;
    bottom: 30px;
    margin: 6px 0 -7px;
    display: block;
    list-style: none;
    width: auto;
    height: 33px;
    /* background-color: red; */
`;

const STagBar = css`
    display: inline-block;
    vertical-align: top;
    margin: 0 4px 7px 0;
    padding: 4px 7px;
    height: 26px;
    border-radius: 4px;
    background: #f5f7f8;
    box-sizing: border-box;
    font-size: 13px;
    color: #666;
    
`;

const STagIcon = css`
    display: inline-block;
    vertical-align: top;
    width: 18px;
    height: 18px;
    aspect-ratio: auto 18 / 18;
    margin-right: 5px;
`;

const SReactionBar = css`
    display: flex;
    position: relative;
    bottom: 15px;
    /* margin-bottom: 17px; */
    letter-spacing: -1px;
`;

const SReactionBarInner = css`
    display: flex;
    overflow: hidden;
    flex: 1 1;
    margin-right: 30px;
    white-space: nowrap;
`;

const SReactionBtn = css`
    flex: none;
    margin-left: 2px;
    font-size: 14px;
    font-weight: 500;
    color: #424242;
    /* line-height: 2.4rem; */
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    
`;

const SReactionIcon = css`
    width: 22px;
    height: 22px;
`

const SDate = css`
    flex: none;
    margin-top: 0;
    font-size: 13px;
    color: #9a9a9a;
`;

const SPlaceBox = css`
    display: block;
    overflow: hidden;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
`;

const SPlace = css`
    display: flex;
    align-items: center;
    position: relative;
    padding: 13px 16px 12px 15px;
`;

const SPlaceleft = css`
    display: block;
    overflow: hidden;
    flex: 1 1;
`;

const SPlaceName = css`
    display: flex;
    overflow: hidden;
    letter-spacing: -1px;
    color: #000;
`;

const SPlaceNameBtn = css`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 700;
    color: #242424;
    letter-spacing: -.2px;
    text-align: left;
    overflow: visible;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
`;


const SPlaceLocal = css`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    font-size: 13px;
    color: #8f8f8f;
    /* line-height: 1.6rem; */
`

const SPlaceright = css`
    margin: 2px 0 0 28px;
    display: block;
`;

const SSaveBtn = css`
    width: 26px;
    cursor: pointer;
    overflow: visible;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;

`;

const SBtnName = css`
    display: block;
    margin-top: 2px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: -.4px;
    line-height: 1.3rem;
    white-space: nowrap;
    color: #8f8f8f;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
`;

const SBtnIcon = css`
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: top;
    color: #b8b8b8;
`

function APageBtm(props) {
    return (
        <ul css={SList}>
            <li>
                <div css={SBack}>
                    <div css={SUserBox}>
                            <button css={SUserBtn}>
                                <div css={SUserIcon}> <img css={SUserImg} src={userImg} alt="" /></div>
                                <div css={SId}>
                                    <div css={SUsername}>user1</div>
                                    <div css={SPhotoFollowBox}>
                                        <span css={SPhotoFollow}>사진리뷰 2 </span> ·
                                        <span css={SPhotoFollow}>팔로워 0</span>
                                    </div>
                                </div>
                            </button>

                            <button css={SFollowBtn}>팔로우</button>

                            <div css={SVerticalBox}>
                                <button css={SVertical}><PiDotsThreeVerticalBold/></button>
                            </div>
                            
                        </div>
                    <div >
                        <img css={SBackImg} src={cof} />

                        <div css={SLocal}>
                            <div css={SLocalBar}>
                                <div css={SLocalIcon}><GiPositionMarker/></div>
                                <span css={SLocalName}> 이세상 어딘가</span>
                            </div>
                        </div>
                    </div>

                    <button css={SAdditionalBox}>
                        <div css={SSAdditional}>
                            <div>
                                아아 좋아써! 
                            </div>               
                        </div>
                    </button>

                    <div css={STagBox}>
                        <span css={STagBar}>
                            <img css={STagIcon} src={coffee}/> 
                            커피 맛이 좋아써!!!!
                        </span>
                        <span css={STagBar}><img css={STagIcon} src={heart}/>친절해요</span>
                        <span css={STagBar}><img css={STagIcon} src={view}/>뷰가 좋아요</span>
                        <span css={STagBar}> +4 </span>
                    </div>

                    <div css={SReactionBar}>
                        <div css={SReactionBarInner}>
                            <button css={SReactionBtn}>
                                <PiSmileyLight css={SReactionIcon}/> 반응 남기기
                            </button>
                        </div>
                        <div css={SDate}>
                            8.11 금 방문
                        </div>
                    </div>

                        <div css={SPlaceBox}>
                            <div css={SPlace}>
                                <div css={SPlaceleft}>
                                    <div css={SPlaceName}>
                                        <button css={SPlaceNameBtn}>카페 쥬아써!! <MdKeyboardArrowRight/></button>
                                    </div>
                                    <div css={SPlaceLocal}>이 세상 어딘가</div>
                                </div>
                                <div css={SPlaceright}>
                                    <button css={SSaveBtn}>
                                        <PiStarLight css={SBtnIcon}/>
                                        <span css={SBtnName}>저장</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>

            </li>
            <li>
            <div css={SBack}>
                    <div css={SUserBox}>
                            <button css={SUserBtn}>
                                <div css={SUserIcon}> <img css={SUserImg} src={user2Img} alt="" /></div>
                                <div css={SId}>
                                    <div css={SUsername}>user2</div>
                                    <div css={SPhotoFollowBox}>
                                        <span css={SPhotoFollow}>사진리뷰 8 </span> ·
                                        <span css={SPhotoFollow}>팔로워 0</span>
                                    </div>
                                </div>
                            </button>

                            <button css={SFollowBtn}>팔로우</button>

                            <div css={SVerticalBox}>
                                <button css={SVertical}><PiDotsThreeVerticalBold/></button>
                            </div>
                            
                        </div>
                    <div >
                        <img css={SBackImg2} src={spge} />

                        <div css={SLocal}>
                            <div css={SLocalBar}>
                                <div css={SLocalIcon}><GiPositionMarker/></div>
                                <span css={SLocalName}> 어딘가의 파스타</span>
                            </div>
                        </div>
                    </div>

                    <button css={SAdditionalBox}>
                        <div css={SSAdditional}>
                            <div>
                                파스타가 매우 야무집니다.!!
                            </div>               
                        </div>
                    </button>

                    <div css={STagBox}>
                        <span css={STagBar}>
                            <img css={STagIcon} src={ggal}/> 
                            매장이 청결해요
                        </span>
                        <span css={STagBar}>
                            <img css={STagIcon} src={umi}/> 
                            음식이 맛있어요
                        </span>
                        <span css={STagBar}> +5 </span>
                    </div>

                    <div css={SReactionBar}>
                        <div css={SReactionBarInner}>
                            <button css={SReactionBtn}>
                                <PiSmileyLight css={SReactionIcon}/> 반응 남기기
                            </button>
                        </div>
                        <div css={SDate}>
                            8.05 토 방문
                        </div>
                    </div>

                        <div css={SPlaceBox}>
                            <div css={SPlace}>
                                <div css={SPlaceleft}>
                                    <div css={SPlaceName}>
                                        <button css={SPlaceNameBtn}>팟스타 쥬아써!! <MdKeyboardArrowRight/></button>
                                    </div>
                                    <div css={SPlaceLocal}>어딘가의 파스타</div>
                                </div>
                                <div css={SPlaceright}>
                                    <button css={SSaveBtn}>
                                        <PiStarLight css={SBtnIcon}/>
                                        <span css={SBtnName}>저장</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>

            </li>

        </ul>
    );
}

export default APageBtm;