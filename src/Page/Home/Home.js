import React from 'react'
import ProductHome from '../../Component/ProductHome/ProductHome'
import "../Home/Home.css"
const Home = () => {
    return (
        <div >
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a >
                            <img src="https://hstatic.net/349/1000150349/1000203344/slideshow_1.jpg?v=28" className="d-block w-100" alt="..." />
                        </a>
                        <div id="hrv-banner-caption1" className="hrv-caption hrv-banner-caption">
                            <div className="container">
                                <div className="hrv-caption-inner">
                                    <div className="hrv-banner-content slider-1">
                                        <h2 className="hrv-title1" >Rau củ quả</h2>
                                        <h3 className="hrv-title2">Tươi ngon mỗi ngày</h3>
                                        <a href="" className="hrv-url">Xem ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a>
                            <img src="https://hstatic.net/349/1000150349/1000203344/slideshow_2.jpg?v=28" className="d-block w-100" alt="..." />
                        </a>
                        <div id="hrv-banner-caption1" className="hrv-caption hrv-banner-caption">
                            <div className="container">
                                <div className="hrv-caption-inner">
                                    <div className="hrv-banner-content slider-1">
                                        <h2 className="hrv-titles1" >Thực phẩm sạch </h2>
                                        <h3 className="hrv-titles2">Đảm bảo sức khoẻ</h3>
                                        <a href="" className="hrv-urls">Xem ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a>
                            <img src="https://hstatic.net/349/1000150349/1000203344/slideshow_3.jpg?v=28" className="d-block w-100" alt="..." />
                        </a>
                        <div id="hrv-banner-caption1" className="hrv-caption hrv-banner-caption">
                            <div className="container">
                                <div className="hrv-caption-inner">
                                    <div className="hrv-banner-content slider-1">
                                        <h2 className="hrv-title" >Tháng vàng ữu đãi</h2>
                                        <h3 className="hrv-titles">Tiết kiệm đến 20%</h3>
                                        <a href="" className="hrv-urlss">Xem ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <ProductHome/>
        </div>
    )
}

export default Home