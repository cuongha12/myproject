import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../../Redux/actions/cart'
import "../Search/Search.css"
const Search = () => {
    let { id } = useParams()
    const [product, setProduct] = useState([])
    const Product = async () => {
        return await axios.get(`http://localhost:3000/product?q=${id.toLowerCase()}`)
            .then(res => setProduct(res.data))
    }
    useEffect(() => {
        Product()
    }, [])
    let navigate = useNavigate()
    const handDetail = (item) => {
        navigate(`/detail/${item}`)
    }
    const dispatch = useDispatch()
    const user = useSelector(e => e.user)
    return (
        <div>
            <div className="wrap-breadcrumb">
                <div className="clearfix container">
                    <div className="row main-header">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ol className="breadcrumb breadcrumb-arrows">
                                <li><a href='/'>Trang chủ</a></li>
                                <li><a >Tìm kiếm</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className='clearfix container'>
                <div className='row'>
                    <div className='col-md-12 col-xs-12 col-sm-12 col-lg-12'>
                        <span className="header-search header-page clearfix">
                            <h1>Tìm kiếm</h1>
                        </span>
                        {
                            product.length !== 0 ? (<div className="content-page" id="search">
                                <div className="col-md-12  col-xs-12 col-sm-12 col-lg-12">
                                    <span className="subtext">
                                        Có {product.length} quả tìm kiếm phù hợp <strong>"{id}"</strong>.
                                    </span>
                                </div>
                            </div>) : (<div className="content-page" id="search">
                                <div className="col-md-12  col-xs-12 col-sm-12 col-lg-12">
                                    <span className="subtext">
                                        Không có kết  quả tìm kiếm hợp với <strong>"{id}"</strong>.
                                    </span>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
            <div className='col-md-12 col-sm-12 col-xs-12 content-product-list col-lg-12 search-product'>
                <div className='container'>
                    <div className='row product-list'>
                        {
                            (product.filter((x) => { return x.category === "shop" && x.title.toLowerCase() }).map((e) => (
                                <div className='col-md-4  col-sm-6 col-xs-12 pro-loop col-lg-3' key={e.id}>
                                    <div className='product-block product-resize fixheight'>
                                        <div className='product-img image-resize view view-third'>
                                            <div className={e.sale ? "product-sale" : 'sale'}>
                                                <span><label className="sale-lb">- </label>{e.sales}%</span>
                                            </div>
                                            <a onClick={(event) => {
                                                event.preventDefault()
                                                handDetail(e.id)
                                            }}>
                                                <img className='class="first-image  has-img"' src={e.image} />
                                                <img className="second-image" src={e.img}></img>
                                            </a>
                                            <div className="actionss">
                                                <div className="btn-cart-products">
                                                    <a onClick={() => {
                                                        if (user.userId === null) {
                                                            navigate('/signup')
                                                        } else {
                                                            dispatch(addToCart(e))
                                                        }
                                                    }}>
                                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                                <div className="view-details">
                                                    <a className="view-detail" onClick={(event) => {
                                                        event.preventDefault()
                                                        handDetail(e.id)
                                                    }}>
                                                        <span><i className="fa fa-clone"> </i></span>
                                                    </a>
                                                </div>
                                                <div className="btn-quickview-products">
                                                    <a className="quickview" onClick={(event) => {
                                                        event.preventDefault()
                                                        handDetail(e.id)
                                                    }}><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail clearfix">
                                            <h3 className="pro-name"><a title="Xương ống heo Vissan">{e.title} </a></h3>
                                            <div className="pro-prices">
                                                <p className="pro-price">{e.price.toLocaleString()}₫</p>
                                                <p className="pro-price-del text-left">
                                                    <del className={e.sale ? "compare-price" : 'sale'}>{e.prices.toLocaleString()}₫</del>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search