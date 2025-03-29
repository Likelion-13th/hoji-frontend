import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer-section">
        <div className="footer-title">
            LIKELION PROCESS
        </div>
        <div className="footer-subtitle">
            멋쟁이사자처럼은 창업 동아리이므로 실제 상품을 판매하지 않습니다.
        </div>
        </div>
        <div className='footer-section'>
        <div className='info-text-row'>
        <div className="info-text-wrapper">
            <div className="info-text-1">상호명</div>
            <div className="info-text-2">멋쟁이사자처럼</div>
        </div>
        <div className="info-text-wrapper">
            <div className="info-text-1">대표</div>
            <div className="info-text-2">hoji</div>
        </div>
        <div className="info-text-wrapper">
            <div className="info-text-1">사업자등록번호</div>
            <div className="info-text-2">122-12-124124</div>
        </div>
        <div className="info-text-wrapper">
            <div className="info-text-1">주소</div>
            <div className="info-text-2">경기도 고양시 덕양구 한국항공대학교</div>
        </div>
        </div>
        <div className='info-text-row'>
        <div className="info-text-wrapper">
            <div className="info-text-1">전화번호</div>
            <div className="info-text-2">1214-1256</div>
        </div>
        <div className="info-text-wrapper">
            <div className="info-text-1">개인정보보호책임자</div>
            <div className="info-text-2">hoji</div>
        </div>
        <div className="info-text-wrapper">
            <div className="info-text-1">계좌</div>
            <div className="info-text-2">110-484-892463</div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Footer;