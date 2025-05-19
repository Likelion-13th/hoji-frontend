import React, { useState } from 'react';
import Banner from '../ProductPage/Banner';
import ProductCard from '../ProductPage/ProductCard';
import '../../styles/ProductPage.css';
import PayModal from '../../component/PayModal';

const Perfume = () => {
    const products = [
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_3.png",
            isNew: false,
        },
        {
            id: 4,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_5.png",
            isNew: false,
        },
        {
            id: 6,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_6.png",
            isNew: false,
        },
        {
            id: 7,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_7.png",
            isNew: false,
        }
        ,

        {
            id: 8,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_8.png",
            isNew: false,
        }
        ,
        {
            id: 9,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_9.png",
            isNew: false,
        }
        ,
        {
            id: 10,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_10.png",
            isNew: false,
        }
        ,
        {
            id: 11,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_11.png",
            isNew: false,
        }
        ,
        {
            id: 12,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_12.png",
            isNew: false,
        }
        ,
        {
            id: 13,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_13.png",
            isNew: false,
        }
        ,
        {
            id: 14,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_14.png",
            isNew: false,
        }
        ,
        {
            id: 15,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_15.png",
            isNew: false,
        }
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
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

    return (
        <div>
            <Banner title='perfume' imagePath={'/banner_perfume.jpg'} />
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

export default Perfume;