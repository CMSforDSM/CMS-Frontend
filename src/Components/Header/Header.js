import React, {useEffect,useState} from 'react';
import Notice from '../../Images/notice.png';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import './Header.css';

import axios from 'axios';

function Header() {
    const [isLogin, setIsLogin] = useState(true);
    const [userData, setUserData] = useState({});
    useEffect(() => {
        axios.get("http://61ec04bfc21a.ngrok.io/users/me", {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            setIsLogin(true)
            setUserData(response.data);
        }).catch(err => {
            setIsLogin(false)
            console.log(err);
        })
    }, [])
    const linkToMyPage = {
        pathname: `/mypage/`,
        state: {
            userData: userData
        }
    }
    const Logout = () => {
        cookie.remove('token')   
        window.location.href = "/";
    }
    return (
        <div id="header">
            <div id="headerHead">
                <Link to="/"><span>CMS</span></Link>
                <div id="userInfo">
                    {isLogin ? 
                        <div class="login-wrapper">
                            <Link to={linkToMyPage}>{userData.name}</Link> &nbsp;&nbsp;
                            <p onClick={Logout}>로그아웃</p>
                        </div> : <Link to="/login">로그인</Link>} 
                </div>
            </div>
            <div id="menu">
                <ul>
                    <li><Link to="/">동아리홈</Link></li>
                    <li><Link to="./recruit">모집공고게시판</Link></li>
                    <li><Link to="./transerM">이적시장</Link></li>
                </ul>
            </div>
            <div id="noticebar">
                <ul>
                    <li><img style={{marginRight: "5px"}}src={Notice}/>공지사항</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;