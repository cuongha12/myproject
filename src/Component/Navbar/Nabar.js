import React, { useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Navbar/Nabar.css"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [search, setSearch] = useState('')
    let navigate = useNavigate()
    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120)

        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const handSearch = (e) => {
        if (search === "") {
            e.preventDefault()
            
        } else {
            navigate(`search/${search}`)
            setSearch('')
        }
    }
    return (
        <nav className={'navbar-main  navbar-default cl-pri none'}>
            <div className={scrolled ? ' sticky ' : '  container nav-wrapper check_nav'}>
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