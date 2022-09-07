import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { RemoveUserToLocalStorage } from '../../Redux/actions/user'
import { removeFromCart } from '../../Redux/actions/cart'
import "../Header/Header.component.css"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [show, setShow] = useState(false)
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState("")

    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120)

        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    let navigate = useNavigate()
    const handSearch = (e) => {
        if (search === "") {
            e.preventDefault()
        } else {
            navigate(`search/${search}`)
            setSearch('')
        }
    }
    const cartProduct = useSelector(state => state.cart)
    const userPage = useSelector(e => e.user)
    const dispatch = useDispatch()
    const handLogout = () => {
        dispatch(RemoveUserToLocalStorage(null))
        dispatch(removeFromCart([]))
    }
    return (
        <>
            <header className='header bkg hidden-sm hidden-xs none'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-7 col-sm-12 col-xs-12 '>
                            <aside className='top-info'>
                                <div className="navholder">
                                    <nav id="subnav">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa fa-phone" aria-hidden="true"></i>1900.636.099</a>
                                            </li>
                                            <li><a className="reg" href="/account/register" title="Đăng ký">ĐĂNG KÝ</a></li>
                                            <li><a className="log" href="/account/login" title="Đăng nhập">Đăng nhập</a></li>
                                        </ul>
                                    </nav>
                                    <div className="header_line"><p>Miễn phí vận chuyển<span className="mar-l5">ĐƠN HÀNG TRÊN 900K</span></p></div>
                                </div>
                            </aside>
                        </div>

                        <div className='col-lg-4 col-md-5 col-sm-12 col-xs-12 logo'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-7 col-xs-7'>
                                    <h1>
                                        <a href="/">
                                            <img src="//hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="default-fresh-food" className="img-responsive logoimg" />
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                            <div className='row justify-content-around'>
                                {userPage.userId === null ? (<div className="user d-flex align-items-ct">
                                    <div className="user-logo">
                                        <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX9wIx4V&_nc_oc=AQk240MFmDZPEd3RcnK4XuAA6lEYpbDpmhmlk7acC4-EbZi1KTJZ9Xbcj-F6gn59AGw&_nc_ht=scontent.fhan14-3.fna&oh=00_AT89Be0iH9CQ7zGROk1CVM_YrtlvO_MccMXtJ5jnEBAU-w&oe=633935F8" alt="" />
                                    </div>
                                    <ul>
                                        <li >
                                            <a href="/signup">Đăng nhập</a>
                                        </li>
                                        <li >
                                            <a href="/login">Đăng ký</a>
                                        </li>
                                    </ul>
                                </div>) : (<div className="user d-flex align-items-ct">
                                    <div className="user-logo">
                                        <img src="https://mcdn.nhanh.vn/store/18131/ps/20171117/22228659_1958158637798279_6481759436594791816_n_552x640.jpg" alt="" />
                                    </div>
                                    <ul>
                                        <li >
                                            <a onClick={handLogout}>Đăng xuất</a>
                                        </li>

                                    </ul>
                                </div>)}
                                <div className='cart-info hidden-xs'>
                                    <a className="cart-link" href="/cart">
                                        <span className="icon-cart">
                                        </span>
                                        <div className="cart-number">
                                            {cartProduct.cartNumber}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={scrolled ? 'stickys nones ' : "nones"}>
                <div className=''>
                    <div className={show ? 'evo-search-bar show-search ' : "evo-search-bar "}>
                        <form className="has-validation-callback" onSubmit={handSearch}>
                            <div className="input-group">
                                <input type="text" name="query" className="form-control" placeholder="Bạn cần tìm gì hôm nay?" value={search} onChange={(e) => setSearch(e.target.value)} />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                                </span>
                            </div>
                        </form>
                        <button className="site-header__search" title="Đóng tìm kiếm" onClick={() => setShow(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div className={'headers nones'}>
                    <div className={'container'}>
                        <div className='row top-header'>
                            <div className='col-md-12 col-sm-12 col-xs-12 evo-header-mobile'>
                                <button type="button" className="evo-flexitem evo-flexitem-fill navbar-toggle collapsed visible-sm visible-xs" id="trigger-mobile" onClick={() => setMenu(!menu)}>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="logo evo-flexitem evo-flexitem-fill">
                                    <a href="/" className="logo-wrapper" >
                                        <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" className="img-responsive center-block" />
                                    </a>
                                </div>
                                <div className="evo-flexitem evo-flexitem-fill visible-sm visible-xs">
                                    <a className="cart " href="/cart">
                                        <i className="fa fa-cart-arrow-down"></i>
                                        <span className="count_item_pr">   {cartProduct.cartNumber}</span>
                                    </a >
                                    <a className="site-header-search cart" title="Tìm kiếm" onClick={() => setShow(true)}>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={show ? "blur" : "end"} onClick={() => setShow(false)}>
            </div>
            <div className='nones'>
                <div className={menu ? "blur" : "end"} onClick={() => setMenu(false)}>
                </div>
                <div className={menu ? 'container nav-evo-watch actives ' : 'container nav-evo-watch '}>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <ul id="nav" className='nav'>
                                {userPage.userId === null ? (<li className="nav-item ">
                                    <a className="nav-link " >
                                        <i className="fa-solid fa-circle-user"></i>
                                    </a>
                                </li>) : (<li className="nav-item ">
                                    <a className="nav-link " >
                                        <img src='https://mcdn.nhanh.vn/store/18131/ps/20171117/22228659_1958158637798279_6481759436594791816_n_552x640.jpg' className='img-user'/>
                                    </a>
                                </li>)}
                                <li className='nav-item has-childs'>
                                    <NavLink to={'/'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Trang chủ</NavLink>
                                </li>
                                <li className='nav-item has-childs  '>
                                    <NavLink to={'shop'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Sản phẩm
                                    </NavLink>
                                </li>
                                <li className='nav-item has-childs'>
                                    <NavLink to={'blog'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Blog</NavLink>
                                </li>
                                <li className='nav-item has-childs'>
                                    <NavLink to={'introduce'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Giới thiệu</NavLink>
                                </li>
                                <li className='nav-item has-childs'>
                                    <NavLink to={'contact'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Liên hệ</NavLink>
                                </li>
                            </ul>
                            {
                                userPage.userId === null ? (<ul className='header-login'>
                                    <li><a className="reg" title="Đăng ký" href='/login'>Đăng ký</a></li>
                                    <li><a className="log" title="Đăng nhập" href='/signup'>Đăng nhập</a></li>
                                </ul>) : (<ul className='header-login'>
                                    <li><a onClick={handLogout} className="log" title="Đăng xuất"><i className="fa-solid fa-right-from-bracket"></i>Đăng xuất</a></li>
                                </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header