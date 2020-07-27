import React, { useEffect,useState } from 'react';
import './ClubAdmin.css';
import Club from '../../Images/club1.png';
import axios from 'axios';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';

function ClubAdmin() {
    const [clubData, setClubData] = useState({});
    const [clublogo, setClubLogo] = useState("");
    const [clubName, setClubName] = useState("");
    const [clubLeader, setClubLeader] = useState("");
    const [clubMember, setClubMember] = useState("");
    const [introduce, setIntroduce] = useState("");
    
    useEffect(() => {
        axios.get("http://3.34.0.219:5000/clubs/undefined",{

        }).then(response => {
            setClubData(response.data);
        }).catch(err => {
            console.log(err);
        })

        axios.get("http://3.34.0.219:5000/applications/undefined", {
            
        },{
            headers: {
                "X-Access-Token": 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTU4MTA5OTUsImV4cCI6MTU5NTgxODE5NSwic3ViIjoiMzExOSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.c40Vj-u3dYdAIV98h4t_kSjn1vUUxF25tS3DdYkFrgQ'
            }
        }).then(response => {
            window.location.href ="/clubadmin";
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
    const onPost = () => {
        axios.patch("http://3.34.0.219:5000/clubs/undefined", {
            clubName : clubName,
            introduce: introduce,
            logo : clublogo
        },{
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href ="/clubadmin";
        }).catch(err => {
            console.log(err)
        })
    }

    const onAddMember = () => {
        axios.post("http://3.34.0.219:5000/clubs/undefined/members", {
            clubName : clubName,
            student_number : clubMember
        },{
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href ="/clubadmin";
        }).catch(err => {
            console.log(err)
        })
    }

    const onDelMember = (delMember) => {
        axios.delete("http://3.34.0.219:5000/clubs/undefined/members", {
            clubName : clubName,
            student_number : delMember
        },{
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href ="/clubadmin";
        }).catch(err => {
            // console.log(err)
        })
    }

    const onLeaderPost = () => {
        axios.patch("http://3.34.0.219:5000/clubs/undefined/members", {
            clubName : clubName,
            student_number : clubLeader
        },{
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href ="/clubadmin";
        }).catch(err => {
            console.log(err)
        })
    }

    var lea = String(clubData.leader);
    var leadernum = lea.split("-");

    var m = String(clubData.members).split(",");
    const memberArr = m.map((member,i) => {
        var mm = member.split("-");
        // return <div class="clubMemberItem" key={i}><input type="text" value={mm[0]} readOnly/> <input type="text" value={mm[1]} readOnly/> <button onClick={onDelMember(mm[0])}>삭제</button> </div>
    });

    return (
        <div id="innerWrapper">
            <div id="clubList">
                <li><img src={Club} alt=""/></li>
                <li></li>

            </div>
            <div id="clubInfoWrapper">
                <h2 id="clubadmintitle">동아리 관리 페이지</h2>
                <div id="clubInfo">
                    <p>동아리 신청 목록</p>
                    <table>
                        <tbody>
                        <tr>
                            <td>1</td><td>3116 전윤주</td><td><button>수락</button><button>거절</button></td>
                        </tr>
                        <tr>
                            <td>2</td><td>3116 전윤주</td><td><button>수락</button><button>거절</button></td>
                        </tr>
                        </tbody>
                    </table>
                    <p>동아리 정보 수정</p>
                    <div>
                        <div class="clubInfoLeft">
                            <div class="clubItem">동아리 로고</div> 
                            <div class="clubItem">동아리명</div> 
                            <div class="clubItem">동아리 소개</div> 
                        </div>
                        <div id="clubInfoRight">
                            <input type="file" onChange={(e) => setClubLogo(e.target.files[0])}/><br/>
                            <input type="text" onChange={(e) => setClubName(e.target.value)} defaultValue={clubData.club_name}/><br/>
                            <input type="text" onChange={(e) => setIntroduce(e.target.value)}  defaultValue={clubData.introduce}/><br/>
                        </div>
                    </div>
                    <p>현재 동아리원 관리</p>
                    <div class="clubMemberWrapper">
                        <div class="clubMemberLeft" style={{marginTop : '5px'}}>
                            동아리원 &nbsp;&nbsp;&nbsp; 부장
                        </div>
                        <div>
                            <div class="clubMemberItem">
                                <input type="text" onChange={(e) => setClubLeader(e.target.value)} placeholder={leadernum[0]}/> <input type="text" placeholder={leadernum[1]}/> <button onClick={onLeaderPost}>임명</button>
                            </div>
                            {memberArr}
                            <div class="clubMemberItem">
                                <input type="text" placeholder="학번" onChange={(e) => setClubMember(e.target.value)}/> <input type="text" placeholder="이름"/> <button onClick={onAddMember}>추가</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="editBtn" onClick={onPost} >수정하기</div>
            </div>
        </div>
    );
}

export default ClubAdmin;