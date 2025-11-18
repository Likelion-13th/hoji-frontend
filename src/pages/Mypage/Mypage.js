import React, { useEffect, useState } from 'react';
import '../../styles/Mypage.css';
import Address from '../Mypage/Address';
import Status from '../Mypage/Status';
import History from '../Mypage/History';
import Profile from '../Mypage/Profile';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Mypage = () => {
    const [cookies] = useCookies(['accessToken']);

    const [profileData, setProfileData] = useState({});
    const [orderStatusData, setOrderStatusData] = useState({});
    const [historyData, setHistoryData] = useState([]);

    const handleSave = async (zipcode, address, addressDetail) => {
        try {
            const response = await axios.post(
                "/users/address",
                {
                    "zipcode": zipcode,
                    "address": address,
                    "addressDetail": addressDetail
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
    
            if (response.data.isSuccess) {
                alert("주소가 성공적으로 저장되었습니다.");
            } else {
                alert(`주소 저장 실패: ${response.data.message}`);
            }
        } catch (err) {
            console.error("주소 저장 오류:", err); 
            alert("주소 저장 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        axios
            .get("/orders", {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`, 
                },
            })
            .then((res) => {
                console.log(res);
                setHistoryData(res.data.result);
            })
            .catch((err) => {
                console.log("API 요청 실패:", err);
            }); 
    }, [cookies.accessToken]);

    const onCancel = async (orderId) => {
        try {
            const response = await axios.post(
                `/orders/${orderId}/cancel`,
                {"orderId": orderId},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );

            if (response.data.isSuccess) {
                alert("주문이 성공적으로 취소되었습니다.");
            } else {
                alert(`주문 취소 실패: ${response.data.message}`);
            }
        } catch (err) {
            console.error("주문 취소 오류:", err); 
            alert("주문 취소 중 오류가 발생했습니다.");
        }
    };
    
    useEffect(() => {
        axios
            .get("/users/profile", {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`,
                },
            })
            .then((res) => {
                console.log(res);
                setProfileData({
                    usernickname: res.data.result.usernickname,
                    recentTotal: res.data.result.recentTotal,
                    maxMileage: res.data.result.maxMileage,
                });
                setOrderStatusData(res.data.result.orderStatusCounts);
            })
            .catch((err) => {
                console.log("API 요청 실패:", err);
            });
    }, [cookies.accessToken]);

    return (
        <div className='page-container'>
            <Profile profileData={profileData}/>
            <Status orderStatusData={orderStatusData}/>
            <Address handleSave={handleSave}/>
            <History historyData={historyData} onCancel={onCancel}/>
        </div>
    );
};

export default Mypage;