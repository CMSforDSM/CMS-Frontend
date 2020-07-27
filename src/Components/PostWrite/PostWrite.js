import React, {useState} from 'react';
import cookie from 'react-cookies';
import Club from '../../Images/club1.png';
import './PostWrite.css';
import axios from 'axios';

function PostView() {
    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
            </div>
            <div id="post-wrapper">                
                <div id="post-contents-wrapper">
                    <input placeholder="제목" id="title"/>
                    <textarea placeholder="내용" id="content"/>
                </div>
                <button id="postBtn">작성완료</button>
            </div>
            
        </div>
    );
}

export default PostView;