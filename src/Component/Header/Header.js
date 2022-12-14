import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { RemoveUserToLocalStorage } from '../../Redux/actions/user'
import { removeFromCart } from '../../Redux/actions/cart'
import "../Header/Header.component.css"
import SearchReducer from '../../Redux/reducers/search'
import axios from 'axios'
import { createSearch } from '../../Redux/actions/search'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [show, setShow] = useState(false)
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])
    const productSearch = async () => {
        return await axios.get('https://orangic-server.herokuapp.com/product')
            .then(res => setProduct(res.data))
    }
    useEffect(() => {
        productSearch()
    })
    let refHeader = useRef()
    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrolled(e => {
                if (window.scrollY > e + 200) {
                    refHeader.current.classList.remove("stickys")
                    return window.scrollY
                } else if (window.scrollY < e - 100) {
                    refHeader.current.classList.add("stickys")
                    return window.scrollY
                } else if (window.scrollY < 140) {
                    refHeader.current.classList.remove("stickys")
                    return window.scrollY
                }
                return e
            })
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    // useEffect(() => {
    //     window.addEventListener('scroll', _ => {
    //         setscrollH(prev => {
    //             if (window.scrollY > prev + 100) {
    //                 refHeader.current.style.position = 'relative'
    //                 return window.scrollY
    //             } else if (window.scrollY < prev - 100) {
    //                 refHeader.current.style.position = 'fixed'
    //                 return window.scrollY
    //             }
    //             return prev
    //         })
    //     })
    // }, [])
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const handSearch = (e) => {
        if (search === "") {
            e.preventDefault()
        } else {
            e.preventDefault()
            navigate(`search/${search}`)
            setSearch('')
            const obj = {
                array: product,
                value: search
            }
            dispatch(createSearch(obj))
            setShow(false)
        }
    }
    const cartProduct = useSelector(state => state.cart)
    const userPage = useSelector(e => e.user)

    const handLogout = () => {
        dispatch(RemoveUserToLocalStorage(null))
        dispatch(removeFromCart([]))
        navigate('/signup')
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
                                            <li><a className="reg" title="????ng k??">????NG K??</a></li>
                                            <li><a className="log" title="????ng nh???p">????ng nh???p</a></li>
                                        </ul>
                                    </nav>
                                    <div className="header_line"><p>Mi???n ph?? v???n chuy???n<span className="mar-l5">????N H??NG TR??N 900K</span></p></div>
                                </div>
                            </aside>
                        </div>

                        <div className='col-lg-4 col-md-5 col-sm-12 col-xs-12 logo'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-7 col-xs-7'>
                                    <h1>
                                        <NavLink to={'/'}>
                                            <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="default-fresh-food" className="img-responsive logoimg" />
                                        </NavLink>
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
                                            <NavLink to={'signup'}>
                                                ????ng nh???p
                                            </NavLink>
                                        </li>
                                        <li >
                                            <NavLink to={'login'}>
                                                ????ng k??
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>) : (<div className="user d-flex align-items-ct">
                                    <div className="user-logo">
                                        <img src="https://i.picsum.photos/id/242/40/40.jpg?hmac=Sg3qpj7me-RcpNVcBtyspyGRFaWCKZgn65btG8-CH4g" alt="" />
                                    </div>
                                    <ul>
                                        <li >
                                            <NavLink to={'profile'}>
                                                H??? s??
                                            </NavLink>
                                        </li>
                                        <li >
                                            <a onClick={handLogout}>????ng xu???t</a>
                                        </li>

                                    </ul>
                                </div>)}
                                <div className='cart-info hidden-xs'>
                                    <NavLink className="cart-link" to={'cart'}>
                                        <span className="icon-cart">
                                        </span>
                                        <div className="cart-number">
                                            {cartProduct.cartNumber}
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={"nones"} ref={refHeader}>
                <div className=''>
                    <div className={show ? 'evo-search-bar show-search ' : "evo-search-bar "}>
                        <form className="has-validation-callback" onSubmit={handSearch}>
                            <div className="input-group">
                                <input type="text" name="query" className="form-control" placeholder="B???n c???n t??m g?? h??m nay?" value={search} onChange={(e) => setSearch(e.target.value)} />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                                </span>
                            </div>
                        </form>
                        <button className="site-header__search" title="????ng t??m ki???m" onClick={() => setShow(false)}>
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
                                    <NavLink to={'/'} className="logo-wrapper" >
                                        <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" className="img-responsive center-block" />
                                    </NavLink>
                                </div>
                                <div className="evo-flexitem evo-flexitem-fill visible-sm visible-xs">
                                    <NavLink to={'cart'} className="cart ">
                                        <i className="fa fa-cart-arrow-down"></i>
                                        <span className="count_item_pr">{cartProduct.cartNumber}</span>
                                    </NavLink>
                                    <a className="site-header-search cart" title="T??m ki???m" onClick={() => setShow(true)}>
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
                                {userPage.userId === null ? (<li className="nav-item menu-user">
                                    <a className="nav-link " >
                                        <i className="fa-solid fa-circle-user"></i>
                                    </a>
                                    <a className="nav-link " onClick={() => setMenu(false)}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </a>
                                </li>) : (<li className="nav-item ">
                                    <div className='vct' >
                                        <NavLink className="nav-link" to={'profile'} onClick={() => setMenu(false)}>
                                            <img src='https://i.picsum.photos/id/242/40/40.jpg?hmac=Sg3qpj7me-RcpNVcBtyspyGRFaWCKZgn65btG8-CH4g' className='img-user' />
                                        </NavLink >
                                        <NavLink className={'vcta'} to={'profile'} onClick={() => setMenu(false)}>H??? s??</NavLink>
                                    </div>
                                </li>)}
                                <li className='nav-item has-childs'>
                                    <NavLink to={'/'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Trang ch???</NavLink>
                                </li>
                                <li className='nav-item has-childs  '>
                                    <NavLink to={'shop'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>S???n ph???m
                                    </NavLink>
                                </li>
                                <li className='nav-item has-childs'>
                                    <NavLink to={'blog'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Blog</NavLink>
                                </li>
                                <li className='nav-item has-childs'>
                                    <NavLink to={'introduce'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Gi???i thi???u</NavLink>
                                </li>
                                <li className='nav-item has-childs'>
                                    <NavLink to={'contact'} className={({ isActive }) => (isActive ? ' active' : '')} onClick={() => setMenu(false)}>Li??n h???</NavLink>
                                </li>
                            </ul>
                            {
                                userPage.userId === null ? (<ul className='header-login'>
                                    <li><NavLink to={'login'} className={'reg'} >????ng k??</NavLink></li>
                                    <li><NavLink to={'signup'} className={'reg'} >????ng nh???p</NavLink></li>
                                </ul>) : (<ul className='header-login'>
                                    <li><a onClick={handLogout} className="log" title="????ng xu???t"><i className="fa-solid fa-right-from-bracket"></i>????ng xu???t</a></li>
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