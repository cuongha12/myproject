import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkOutCart, removeFromCart, updateCart } from '../../Redux/actions/cart'
import swal from 'sweetalert';

import '../Cart/Cart.css'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch()
    const cartProduct = useSelector(e => e.cart)
    const [products, setProducts] = useState(cartProduct)
    let navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products.cartItems))
    }, [products])
    const upDate = (e, data, type) => {

        e.preventDefault()
        if (type === "plus") {
            var item = {
                id: data.id,
                quantity: data.quantity + 1
            }
            dispatch(updateCart(item))
        } else if (data.quantity === 1) {

            swal({
                text: "Bạn chắc chắn muốn bỏ sản phẩm này?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Xoá sản phẩm thành công", {
                            icon: "success",
                        });
                        const kaka = [...products.cartItems]
                        const removeCart = kaka.filter(e => e.id !== data.id)
                        setProducts({ cartItems: removeCart });
                        dispatch(removeFromCart((removeCart)))
                    }
                })
        }
        else {
            var item = {
                id: data.id,
                quantity: data.quantity - 1
            }
            dispatch(updateCart(item))
        }
    }
    const hanDele = (id) => {
        const data = [...products.cartItems];
        const cartFilter = data.filter((c) => c.id !== id.id);
        setProducts({ cartItems: cartFilter });
        dispatch(removeFromCart((cartFilter)))
    }
    const handCheckOut = (ids) => {
        dispatch(checkOutCart(([])))
        const data = [];
        setProducts({ cartItems: data });
        navigate('/')
    }
    const itemsPrice = products.cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    var ship = 50000
    const shipPrice = itemsPrice + ship;

    return (
        <div>
            <div className="wrap-breadcrumb">
                <div className="clearfix container">
                    <div className="row main-header">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ol className="breadcrumb breadcrumb-arrows">
                                <li><a href='/'>Trang chủ</a></li>
                                <li><a >Giỏ hàng</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {
                products.cartItems.length === 0 ?
                    (<div className="content-page" >
                        <div className='container'>
                            <div className="col-md-12  col-xs-12 col-sm-12 col-lg-12">
                                <div className="cart-empty">
                                    <img src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/empty-cart.png?1661616129384" className="img-responsive center-block" />
                                    <div className="btn-cart-empty">
                                        <a className="btn btn-default" href="/shop" title="Tiếp tục mua sắm">Tiếp tục mua sắm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (<section className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='row'>
                                    <div className='col-md-12 col-sm-12 col-xs-12'>
                                        <span className="header-page clearfix">
                                            <h1>Giỏ hàng</h1>
                                        </span>
                                        <form className='cart-form'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="image">&nbsp;</th>
                                                        <th className="item">Tên sản phẩm</th>
                                                        <th className="qty">Số lượng</th>
                                                        <th className="price">Giá tiền</th>
                                                        <th className="remove">&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                {
                                                    products.cartItems.map((e) => (
                                                        <tbody key={e.id}>
                                                            <tr>
                                                                <td className="image">
                                                                    <div className="product_image">
                                                                        <a>
                                                                            <img src={e.img} alt="Bắp bò Úc giá tay" />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td className="item">
                                                                    <a>
                                                                        <strong>{e.name}</strong>
                                                                    </a>
                                                                </td>
                                                                <td className="qty qua">
                                                                    <div>
                                                                        <button className='action-minus' onClick={(x) => upDate(x, e, "minus")}>
                                                                            <i className="fa-solid fa-minus"></i>
                                                                        </button>
                                                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value={`${e.quantity}`} onChange={() => console.log(1)} />
                                                                        <button className="action-plus" title="Quantity Plus" onClick={(x) => upDate(x, e, "plus")}>
                                                                            <i className="fa-solid fa-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="price">{((e.price) * (e.quantity)).toLocaleString()}₫</td>
                                                                <td className="remove">
                                                                    <a className="cart" onClick={() => hanDele(e)}>
                                                                        <i className="fa-solid fa-xmark"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    ))
                                                }
                                                <tbody>
                                                    <tr className="summary">
                                                        <td className="image ">&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        <td className="text-center"><b>Tạm tính:</b></td>
                                                        <td className="price">
                                                            <span className="total">
                                                                <strong>{itemsPrice.toLocaleString()}₫</strong>
                                                            </span>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr className="summary">
                                                        <td className="image kay">&nbsp;</td>
                                                        <td className="image kay" > &nbsp;</td>
                                                        <td className="text-center "><b>Phí ship:</b></td>
                                                        <td className="price ">
                                                            <span className="total ">
                                                                <strong>{ship.toLocaleString()}₫</strong>
                                                            </span>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr className="summary">
                                                        <td className="image kay">&nbsp;</td>
                                                        <td className="kay">&nbsp;</td>
                                                        <td className="text-center  "><b>Tổng Cộng:</b></td>
                                                        <td className="price">
                                                            <span className="total">
                                                                <strong>{shipPrice.toLocaleString()}₫</strong>
                                                            </span>
                                                        </td>
                                                        <td >&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='row'>
                                                <div className=' col-lg-6 col-md-6 col-sm-6 col-xs-12 '>

                                                </div>
                                                <div className='col-md-6 col-sm-6 col-xs-12 cart-buttons inner-right inner-left col-lg-6'>
                                                    <div className='buttons' >
                                                        <button type="submit" className="button-default" onClick={(e) => {
                                                            e.preventDefault()
                                                            swal({
                                                                title: "Đặt hàng thành công!",
                                                                text: `Tổng đơn hàng  ${shipPrice.toLocaleString()}₫`,
                                                                icon: "success",
                                                                button: "Ok!",
                                                            });
                                                            handCheckOut(products.cartItems)
                                                        }
                                                        }>Thanh toán</button>

                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12  col-xs-12 continue-shop">

                                                    <a className='router' href='/shop'>
                                                        <i className="fa fa-reply"></i> Tiếp tục mua hàng</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >)
            }

        </div >
    )
}

export default Cart