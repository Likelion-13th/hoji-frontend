import React from 'react';
import '../../styles/Mypage.css';
import Address from '../Mypage/Address';
import Status from '../Mypage/Status';
import History from '../Mypage/History';
import Profile from '../Mypage/Profile';

const Mypage = () => {
    return (
            <div className = 'page-container'>
                <Profile/>
                <Status/>
                <Address/>
                <History/>
            </div>
    );
};

export default Mypage;