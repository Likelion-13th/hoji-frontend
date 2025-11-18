import React from 'react';

const History = ({ historyData = [], onCancel }) => {

    return (
        <div className='history-container-wrap'>
            <div className='history-title'>나의 쇼핑 내역</div>
            <div className='history-container'>
                <table className='history-table' cellPadding='10' cellSpacing='0'>
                    <thead>
                        <tr>
                            <th>주문 일자</th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>구매 금액</th>
                            <th>상태</th>
                            <th>주문 취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((order) => (
                            <tr key={order.orderId}>
                                {/* 주문 일자 */}
                                <td>{new Date(order.createdAt).toLocaleDateString('ko-KR')}</td>
                                {/* 상품 정보 */}
                                <td>{order.itemName}</td>
                                {/* 수량 */}
                                <td>{order.quantity}</td>
                                {/* 구매 금액 */}
                                <td>{order.totalPrice.toLocaleString()}원</td>
                                {/* 상태 */}
                                <td>{order.status}</td>
                                {/* 주문 취소 */}
                                <td>
                                    {(() => {
                                        const canCancel = order.status === 'PROCESSING';

                                        if (!canCancel) {
                                            return <span>-</span>;
                                        }

                                        return (
                                            <div className='history-cancel'>
                                                <div className='history-cancel-button'
                                                onClick={()=>onCancel(order.orderId)}>취소</div>
                                            </div>
                                        );
                                    })()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;