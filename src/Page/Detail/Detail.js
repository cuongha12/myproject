import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import '../Detail/detail.css'
import { Image } from 'antd';
import { Rate } from 'antd';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart } from '../../Redux/actions/cart';
const Detail = () => {
    const { item } = useParams()
    const [product, setProduct] = useState([])
    const [previous, setPrevious] = useState(0)
    const [products, setProducts] = useState([])
    const Item = async () => {
        return await axios.get(`http://localhost:3000/product/${item}`)
            .then(res => setProduct(res.data))
    }
    const Items = async () => {
        return await axios.get('http://localhost:3000/product')
            .then(res => setProducts(res.data))
    }
    useEffect(() => {
        Item()
        Items()
    }, [])
    let navigate = useNavigate()
    const handDetail = (item) => {
        navigate(`/detail/${item}`)
    }
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const handUpdate = (e, data,type) => {
        if (type === "plus") {
            var item = {
                id: data.id,
                quantity: count + 1
            }
            setCount(count + 1)
            dispatch(updateCart(item))
        } else if (count === 1) {
            return
        } else {
            console.log('xxxxxx');
            var item = {
                id: data.id,
                quantity: count - 1
            }
            setCount(count - 1)
            dispatch(updateCart(item))
        }
    }
    const user = useSelector(e => e.user)
    return (
        <div style={{ background: '#f5f6f7', height: 'auto' }}>
            <section className='inner-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='details-gallery'>
                                <div className="details-label-group">
                                    <label className={product.sale == true ? "details-label off" : "sale"}>-{product.sales}%
                                    </label>
                                </div>
                                <div className='details-preview'>
                                    <a>
                                        <Image src={product?.img} />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='details-content'>
                                <h3 className="details-name">
                                    <a href="">{product.title}</a>
                                </h3>
                                <div className="details-meta">
                                    <p>SKU:
                                        <span>1234567</span>
                                    </p>
                                    <p>BRAND:
                                        <a href="">radhuni</a>
                                    </p>
                                </div>
                                <div className='details-rating'>
                                    <Rate disabled defaultValue={5} />
                                </div>
                                <h3 className="details-price">
                                    <del className={product.sale ? "" : "sale"}>{parseFloat(product.prices).toLocaleString()}đ</del>
                                    <span >
                                        {parseFloat(product.price).toLocaleString()}đ
                                    </span>
                                </h3>
                                <div className='product-action'>
                                    <button className='action-minus' onClick={(e) => handUpdate(e, product,"minus")}>
                                        <i className="fa-solid fa-minus" ></i>
                                    </button>
                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value={`${count}`} onChange={() => console.log('xx')} />
                                    <button className="action-plus" title="Quantity Plus" onClick={(e) => handUpdate(e, product,"plus")}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div className='details-list-group'>
                                    <label className="details-list-title">tags:</label>
                                    <ul className="details-tag-list">
                                        <li>
                                            <a >organic</a>
                                        </li>
                                        <li>
                                            <a >fruits</a>
                                        </li>
                                        <li>
                                            <a>chilis</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='details-list-group'>
                                    <label className="details-list-title">Share:</label>
                                    <ul className='details-share-list'>
                                        <li>
                                            <a className="icofont-facebook" title="Facebook">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icofont-twitter" title="Twitter">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icofont-linkedin" title="Linkedin">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icofont-instagram" title="Instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='details-add-group'>
                                    <button className="product-add" title="Add to Cart" onClick={() => {
                                        if (user.userId === null) {
                                            navigate('/signup')
                                        } else {
                                            dispatch(addToCart(product))
                                        }}}>
                                        <i className="fa-solid fa-basket-shopping"></i>
                                        <span>add to cart</span>
                                    </button>
                            </div>
                            <div className="details-action-group">
                                <a className="details-wish wish" href="#" title="Add Your Wishlist">
                                    <i className="fa-solid fa-heart"></i>
                                    <span>add to wish</span>
                                </a>
                                <a className="details-compare" href="compare.html" title="Compare This Item">
                                    <i className="fa-solid fa-shuffle"></i>
                                    <span>Compare This</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
            </section >
            <section className='inner-section tu'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='nav nav-tabs'>
                                <li><a className={previous === 0 ? 'tab-link active ' : "tab-link"} onClick={() => setPrevious(0)}>descriptions</a></li>
                                <li><a className={previous === 1 ? 'tab-link active ' : "tab-link"} onClick={() => setPrevious(1)}>Specifications</a></li>
                                <li><a className={previous === 2 ? 'tab-link active ' : "tab-link"} onClick={() => setPrevious(2)}>reviews (2)</a></li>
                            </div>
                        </div>
                    </div>
                    <div className={previous === 0 ? 'tab-pane  show ' : "tab-pane"}>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='product-details-frame'>
                                    <div className="tab-descrip">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Recusandae delectus natus quasi aperiam.
                                            Nulla perspiciatis ullam ipsa, magni animi eligendi quis mollitia dolor
                                            omnis alias ut aspernatur est voluptatem illo totam iste consequatur vitae laborum ipsam facilis! Ipsa,
                                            voluptatum neque dolor facere autem maiores pariatur, eveniet veritatis vero iure obcaecati
                                        </p>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                            <li>labore possimus architecto, saepe nobis ex mollitia</li>
                                            <li>mollitia soluta magni placeat. Eaque sit praesentium</li>
                                            <li>distinctio ab a exercitationem officiis labore possimus</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='product-details-frame'>
                                    <div className='tab-descrip'>
                                        <img src='https://mironmahmud.com/greeny/assets/ltr/images/video.jpg' />
                                        <a title="Product Video" className="venobox fas fa-play vbox-item" ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={previous === 1 ? 'tab-pane  show ' : "tab-pane"}>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='product-details-frame'>
                                    <table className='table table-bordered'>
                                        <tbody>
                                            <tr><th scope="row">Product code</th><td>SKU: 101783</td></tr>
                                            <tr><th scope="row">Weight</th><td>1kg, 2kg</td></tr>
                                            <tr><th scope="row">Styles</th><td>@Girly</td></tr>
                                            <tr><th scope="row">Properties</th><td>Short Dress</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={previous === 2 ? 'tab-pane  show ' : "tab-pane"}>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='product-details-frame'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='inner-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className="section-heading">
                                <h2>Các mặt hàng này có liên quan</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row content-product-list products-resize'>
                        {
                            products.filter((e) => e.status === "outstanding").map((e) => (
                                <div key={e.id} className="col-md-4 col-sm-6 col-xs-6 pro-loop col-lg-3" >
                                    <div className='product-block product-resize fixheight' style={{ height: '336px' }}>
                                        <div className='product-img image-resize view view-third' style={{ height: '261px' }}>
                                            <div className={e.sale ? "product-sale" : 'sale'}>
                                                <span><label className="sale-lb">- </label>{e.sales}%</span>
                                            </div>
                                            <a href='' onClick={() => {

                                                handDetail(e.id)
                                            }}>
                                                <img src={e.image} alt={e.title} className="first-image  has-img" />
                                                <img src={e.img} alt={e.title} className="second-image" />
                                            </a>
                                            <div className='actionss'>
                                                <div className='btn-cart-products'>
                                                    <a >
                                                        <i className="fa fa-shopping-bag"></i>
                                                    </a>
                                                </div>
                                                <div className='view-details'>
                                                    <a className='view-detail' href='' onClick={() => {

                                                        handDetail(e.id)
                                                    }}>
                                                        <span><i className="fa fa-clone"></i></span>
                                                    </a>
                                                </div>
                                                <div className="btn-quickview-products">
                                                    <a className="quickview" href='' onClick={() => {

                                                        handDetail(e.id)
                                                    }}><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='product-detail clearfix'>
                                            <h3 className="pro-name">
                                                <a >{e.title} </a>
                                            </h3>
                                            <div className="pro-prices">
                                                <p className="pro-price">{parseFloat(product.price).toLocaleString()}₫</p>
                                                <p className="pro-price-del text-left">
                                                    <del className={e.sale ? "compare-price" : 'sale'}>{parseFloat(product.price).toLocaleString()}₫</del>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-sm-12 col-xs-12  pull-center center'>
                            <NavLink className={'btn btn-readmore'} to={'/shop'}>Xem thêm</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Detail