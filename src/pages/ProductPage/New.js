import React, { useState, useEffect } from 'react';
import Banner from '../ProductPage/Banner';
import ProductCard from './ProductCard';
import '../../styles/ProductPage.css';
import PayModal from '../../component/PayModal';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const New = () => {
    const [cookies] = useCookies(['accessToken']);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        if (typeof cookies.accessToken !== 'string') {
            alert("로그인이 필요합니다.");
            return;
        }
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        axios.get('/categories/1/items', {
            headers: {
                Accept: "*/*",
            },
        }).then((response) => {
            setProducts(response.data.result);
        })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Banner title='new' imagePath={'/banner_new.png'} />
            <div className='product-container'>
                <div className='product-grid'>
                    {currentProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
                <div className='paging'>
                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}>
                            Prev
                        </button>
                    )}
                    {
                        Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={currentPage === pageNumber ? 'active' : ''}
                                >
                                    {pageNumber}
                                </button>
                            )
                        )
                    }
                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    )}
                </div>

            </div>
            {isModalOpen && (<PayModal product={selectedProduct} onClose={handleCloseModal} />)}
        </div>
    );
};

export default New;