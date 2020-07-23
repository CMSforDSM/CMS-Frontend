import React from 'react';
import './ClubAdmin.css';
import Club from '../../Images/club1.png';
import axios from 'axios';
import {Link} from 'react-router-dom';


function ClubAdmin() {
    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
                <li></li>

            </div>
            <div id="clubInfoWrapper">
                <h2 id="title">동아리 관리 페이지</h2>
                <div id="clubInfo">
                    <p>동아리 신청 목록</p>
                    <table>
                        <tr>
                            <td>1</td><td>3116 전윤주</td><td><button>수락</button><button>거절</button></td>
                        </tr>
                        <tr>
                            <td>2</td><td>3116 전윤주</td><td><button>수락</button><button>거절</button></td>
                        </tr>
                    </table>
                    <p>동아리 정보 수정</p>
                    <div>
                        <div class="clubInfoLeft">
                            <div class="clubItem">동아리 로고</div> 
                            <div class="clubItem">동아리명</div> 
                            <div class="clubItem">동아리 소개</div> 
                        </div>
                        <div id="clubInfoRight">
                            <input type="file" name="" id=""/><br/>
                            <input type="text"/><br/>
                            <input type="text"/><br/>
                        </div>
                    </div>
                    <p>현재 동아리원 관리</p>
                    <div class="clubMemberWrapper">
                        <div class="clubMemberLeft">
                            동아리원
                        </div>
                        <div>
                            <div class="clubMemberItem">
                                <input type="text" value="3111"/> <input type="text" value="홍길동"/> <button>삭제</button>
                            </div>
                            <div class="clubMemberItem">
                                <input type="text" value="3111"/> <input type="text" value="홍길동"/> <button>삭제</button>
                            </div>
                            <div class="clubMemberItem">
                                <input type="text" placeholder="학번"/> <input type="text" placeholder="이름"/> <button>추가</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="editBtn">수정하기</div>
            </div>
        </div>
    );
}

export default ClubAdmin;