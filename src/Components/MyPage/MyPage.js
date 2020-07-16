import React, { useState } from 'react';
import Header from '../Header/Header';
import Club from '../../Images/club1.png';
import cookie from 'react-cookies';
import Notice from '../../Images/notice.png';
import Left from '../../Images/btn-left.png';
import Right from '../../Images/btn-right.png';
import './MyPage.css';
import axios from 'axios';
function MyPage(props) {
    const userData = props.userData;
    const [introduce, setIntroduce] = useState(userData.club);
    const [password, setPassword] = useState(userData.name);
    
    const onPost = () => {
        axios.patch("http://61ec04bfc21a.ngrok.io/users/me", {
            introduce: introduce,
            password: password
        },{
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href ="/";
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
                <li></li>

            </div>
            <div class="mypage">
                <div class="mypage-title">마이페이지</div>
                <div class="mypage-item">
                    <div>이름</div>
                    <input type="text" disabled class="form-control" placeholder={userData.name}/>
                </div>
                <div class="mypage-item">
                    <div>소속 동아리</div>
                    <input type="text"  disabled class="form-control" placeholder={userData.club}/>
                    <button type="button" class="btn btn-danger">동아리탈퇴</button>
                </div>
                <div class="mypage-item">
                    <div>자기소개</div>
                    <input type="text" onChange={(e) => setIntroduce(e.target.value)} class="form-control" placeholder={userData.introduce}/>
                </div>
                <div class="mypage-item">
                    <div>비밀번호 변경</div>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="password input"/>
                </div>
                <div class="mypage-item">
                    <div>비밀번호 재확인</div>
                    <input type="text" class="form-control" placeholder="password input"/>
                    {/*<button type="button" class="btn btn-primary">비밀번호 변경</button>*/}
                </div>
                <button style={{marginTop:"20px"}} onClick={onPost} type="button" class="btn btn-success">저장하기</button>
            </div>
            
        </div>
    );
}

export default MyPage;