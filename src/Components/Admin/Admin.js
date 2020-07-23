import React from 'react';
import axios from 'axios';
import Club from '../../Images/club1.png';
import {Link} from 'react-router-dom';

function Admin() {
    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
                <li></li>

            </div>
            <div id="clubInfoWrapper">
            <div id="clubInfo">
                <div>
                    <p  style={{float:"left"}}>공지사항</p>

                    <p style={{marginLeft: "30px", float:"right"}} id="registBtn">등록하기</p>
                    <p style={{float:"right"}}  id="printList">동아리명단출력</p>
                    <table>
                        <tr>
                            <td>No</td>
                            <td>제목</td>
                            <td>날짜</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>오늘 동아리 실시합니다~</td>
                            <td>2020.06.24</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>물품신청하세요</td>
                            <td>2020.06.24</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>동아리폭파</td>
                            <td>2020.06.24</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Admin;