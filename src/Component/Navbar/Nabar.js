import axios from 'axios';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { createSearch } from '../../Redux/actions/search';
import SearchReducer from '../../Redux/reducers/search';
import "../Navbar/Nabar.css"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [search, setSearch] = useState('')
    const [product, setProduct] = useState([])
    const productSearch = async () => {
        return await axios.get('https://orangic-server.herokuapp.com/product')
            .then(res => setProduct(res.data))
    }
    useEffect(() => {
        productSearch()
    })
    let navigate = useNavigate()
    let refHeader = useRef()
    useLayoutEffect(() => {
        const handleScroll = () => {
            // setScrolled(e => {
            //     if (window.scrollY > e + 200) {
            //         refHeader.current.classList.remove("sticky")
                   
            //         return window.scrollY

            //     } else if (window.scrollY < e - 100) {
            //         refHeader.current.classList.add("sticky")
            //         refHeader.current.classList.remove("container")
                
            //         return window.scrollY
            //     } else if (window.scrollY < 140) {
            //         refHeader.current.classList.remove("sticky")
            //         refHeader.current.classList.add("container")
            //         return window.scrollY
            //     }
            //     return e
            // })
            setScrolled(window.scrollY > 120)

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
        }
    }
    return (
        <nav className={'navbar-main  navbar-default cl-pri none'} >
            <div className={ scrolled ? 'sticky' : 'container nav-wrapper check_nav'} >
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='navbar-collapse nav-ba'>
                            <ul className=' navbar-navs '>
                                <li>
                                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="dropdown">
                                    <NavLink to={'shop'} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                        <span>Sản phẩm</span>
                                        <span className="sub-arrow">...</span>
                                    </NavLink>
                                    <ul className='dropdown-menus'>
                                        <li>
                                            <a href="" className="current has-submenu" title="Rau củ quả">Rau củ quả
                                                <span className="sub-arrow">...</span>
                                            </a>
                                            <ul className='dropdown-menuss'>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Rau ăn củ</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Rau ăn quả</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Trái cây</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="" className="current has-submenu" title="Rau củ quả">Thực phẩm tươi sống
                                                <span className="sub-arrow">...</span>
                                            </a>
                                            <ul className='dropdown-menuss'>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Thịt các loại</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Hải sản</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Trứng</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="" className="current has-submenu" title="Rau củ quả">Thực phẩm khô
                                                <span className="sub-arrow">...</span>
                                            </a>
                                            <ul className='dropdown-menuss'>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Thực phẩm chay</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ"> Bánh mì - Bánh ngọt</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Gạo - Ngũ cốc</a>
                                                </li>
                                                <li>
                                                    <a href="" title="Rau ăn củ">Thực phẩm ăn liền</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="" title="Thực phẩm bổ dưỡng">Thực phẩm bổ dưỡng</a>
                                        </li>
                                        <li>
                                            <a href="" title="Thực phẩm bổ dưỡng">Thực phẩm chế biến</a>

                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to={'blog'} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'introduce'} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                        Giới thiệu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'contact'} className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                        Liên hệ
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='hidden-xs pull-right right-menu'>
                            <ul className="nav navbar-nav pull-right sm">
                                <li className="col-md-12">
                                    <div className="search-bar">
                                        <div className="">
                                            <form action="" onSubmit={
                                                handSearch
                                            }>
                                                <input type="text" name="q" placeholder="Tìm kiếm..." autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar