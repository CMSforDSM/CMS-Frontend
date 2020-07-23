import React, {useState} from 'react';
import cookie from 'react-cookies';
import Club from '../../Images/club1.png';
import './PostView.css';
import axios from 'axios';

function PostView() {
    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
            </div>
            <div id="post-wrapper">                
                <div id="post-contents-wrapper">
                    <div id="title"><h3>동아리 물품 신청하세요</h3></div>
                    <div id="content">12월 24일까지 각 동아리 별로 필요한 물품 엑셀파일로 올리세요.</div>
                </div>
                <div id="comment-wrapper">
                    <div id="comment-top">댓글</div>
                    <div id="comment-item">
                        제한 있어요?
                        <div id="comment-writer">전윤주</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default PostView;