import React from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <header className="header-section">
            <div className="header-title">LIKELION</div>
            <div className="header-navigator">
                <Link to="/new" className={currentPage === '/' || currentPage==="/new" ? "active" : "inactive"}>
                    New
                </Link>
                <Link to="/perfume" className={currentPage === '/' || currentPage==="/perfume" ? "active" : "inactive"}>
                    Perfume
                </Link>
                <Link to="/diffuser" className={currentPage === '/' || currentPage==="/diffuser" ? "active" : "inactive"}>
                    Diffuser
                </Link>
                <Link to="/mypage" className={currentPage === '/' || currentPage==="/mypage" ? "active" : "inactive"}>
                    Mypage
                </Link>
            </div>    
        </header>
    )
}
export default Header;