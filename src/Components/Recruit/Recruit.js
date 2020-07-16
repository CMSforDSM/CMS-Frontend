import React from 'react';
import Header from '../Header/Header';
import Club from '../../Images/club1.png';
import Notice from '../../Images/notice.png';
import Left from '../../Images/btn-left.png';
import Right from '../../Images/btn-right.png';
import './Recruit.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
const PostLogin = () => {
    axios.post("http://61e57ec5f7c9.ngrok.io/auth/login", {
        id: "h-williams",
        password: "test"
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
function Recruit() {
    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
                <li></li>

            </div>
            <div id="clubInfoWrapper">
                <div id="clubInfo">
                    <div>
                        <p style={{float: "left"}}>동아리 모집 게시판</p>
                        <Link to="/clubpost"><p style={{float:"right"}} id="registBtn">등록하기</p></Link>
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
    );
}

export default Recruit;