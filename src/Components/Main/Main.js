import React from 'react';
import Header from '../Header/Header';
import Club from '../../Images/club1.png';
import Notice from '../../Images/notice.png';
import Left from '../../Images/btn-left.png';
import Right from '../../Images/btn-right.png';
import './Main.css';
import axios from 'axios';

const PostLogin = () => {
    axios.post("http://3.34.0.219:5000/auth/login", {
        id: "h-williams",
        password: "test"
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
function Main() {
    return (
        <React.Fragment>
            <div id="innerWrapper">
                <div id="clubList">
                    <li><img src={Club} alt=""/></li>
                    <li></li>

                </div>
                <div id="clubInfoWrapper">
                    <div id="clubInfo">
                        <div id="clubNameWrapper">
                            <img src={Club} alt=""/>
                            <div style={{float: "right", width: "88%", height: "100px", border: "1px solid black;"}}>
                                <div id="clubName">Entry</div>
                                <div style={{padding: "5px"}}>Entry 원서 접수 서비스 개발 동아리입니다.</div>
                            </div>
                        </div>
                        <p>동아리원</p>
                        <div id="memberWrapper">
                            <div id="itemWrapper">
                                <div class="memberItem">
                                    3116 전윤주
                                </div>
                            </div>
                            <a class="prev"><img src={Left} alt=""/></a>
                            <a class="next"><img src={Right} alt=""/></a>
                        </div>
                    
                        <div>
                            <p>게시판</p>
                            <table>
                                <tr>
                                    <td>No</td>
                                    <td>제목</td>
                                    <td>작성자</td>
                                    <td>날짜</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>동아리 단체 사진</td>
                                    <td>전윤주</td>
                                    <td>2020.06.15</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>동아리 단체 사진</td>
                                    <td>전윤주</td>
                                    <td>2020.06.15</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>동아리 단체 사진</td>
                                    <td>전윤주</td>
                                    <td>2020.06.15</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;