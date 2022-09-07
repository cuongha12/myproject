import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../Redux/actions/cart'
import "../Shop/Shop.css"
const SHop = () => {
  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState(false)
  const [menus, setMenus] = useState(false)
  const [product, setProduct] = useState([])
  const [current, setCurrent] = useState(1)
  const [page, setPage] = useState(false)
  const [sort, setSort] = useState('created-descending')
  const [category, setCategory] = useState(false)

  const number = [1, 2, 3]
  const Product = async () => {
    return await axios.get('http://localhost:3000/product?_page&_limit=12')
      .then(res => setProduct(res.data))
  }
  useEffect(() => {
    Product()
  }, [])

  const mok = [
    {
      id: 1,
      name: 'Rau ăn củ',
      created_date: new Date(2022, 1, 23),
      other: "vegetable"
    },
    {
      id: 2,
      name: 'Rau ăn quả',
      created_date: new Date(2022, 1, 23),
      other: "vegetable"
    },
    {
      id: 3,
      name: 'Trái cây',
      created_date: new Date(2022, 1, 23),
      other: "fruit"
    },
    {
      id: 4,
      name: 'Thịt các loại',
      created_date: new Date(2022, 8, 25),
      other: "meat"
    },
    {
      id: 5,
      name: 'Hải sản',
      created_date: new Date(2022, 8, 25),
      other: "seafood"
    },
    {
      id: 6,
      name: 'Trứng',
      created_date: new Date(2022, 8, 25)
    },
    {
      id: 7,
      name: 'Thực phẩm chay',
      created_date: new Date(2022, 4, 27)
    },
    {
      id: 8,
      name: 'Bánh mì - Bánh ngọt',
      created_date: new Date(2022, 4, 27)
    },
    {
      id: 9,
      name: 'Gạo-Ngũ cốc',
      created_date: new Date(2022, 4, 27)
    },
    {
      id: 10,
      name: 'Thực phẩm ăn liền',
      created_date: new Date(2022, 4, 27)
    },
  ]
  const sortOptions = [
    {
      id: 1,
      name: "Mới nhất",
      title: "created-descending"
    },
    {
      id: 2,
      name: "Giá: Tăng dần",
      title: "price-ascending"
    },
    {
      id: 3,
      name: "Giá: Giảm dần",
      title: "price-descending"
    },
    {
      id: 4,
      name: "Tên: A-Z",
      title: "title-ascending"
    },
    {
      id: 5,
      name: "Tên: Z-A",
      title: "title-descending"
    },
    {
      id: 6,
      name: "Cũ nhất",
      title: "created-ascending"
    },
    {
      id: 7,
      name: "Sản phẩm nổi bật",
      title: "manual"
    },
    {
      id: 8,
      name: "Bán chạy nhất",
      title: "best-selling"
    },
  ]
  const handClick = async (id) => {
    return await axios.get(`http://localhost:3000/product?_page=${id}&_limit=12`)
      .then(res => {
        setProduct(res.data)
        setCurrent(id)
      })
  }
  const handFilter = async (name) => {
    if (name !== 'all') {
      return await axios.get(`http://localhost:3000/product?other=${name}&_order=asc`)
        .then(res => {
          setProduct(res.data)
          setPage(true)
          setShow(false)
          setMenu(false)
          setMenus(false)
        })
    } else {
      Product()
      setCurrent(1)
      setPage(false)
    }
  }
  const handSort = async (e) => {
    let values = e.target.value
    setSort(values)
    if (values === "created-descending") {

    } else if (values === "price-ascending") {
      product.sort((a, b) => a.price - b.price)
    } else if (values === "price-descending") {
      product.sort((a, b) => b.price - a.price)
    } else if (values === "title-ascending") {
      product.sort((a, b) => a.title.localeCompare(b.title))
    } else if (values === "title-descending") {
      product.sort((a, b) => b.title.localeCompare(a.title))
    } else if (values === "created-ascending") {

    } else if (values === "manual") {

    } else if (values === "best-selling") {

    }
  }
  let navigate = useNavigate()
  const handDetail = (item) => {
    navigate(`/detail/${item}`)
  }
  const dispatch = useDispatch()
  const user = useSelector(e => e.user)
  return (
    <div className='shop'>
      <div className="wrap-breadcrumb">
        <div className="clearfix container">
          <div className="row main-header">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
              <ol className="breadcrumb breadcrumb-arrows">
                <li><a href='/'>Trang chủ</a></li>
                <li><a >Danh mục</a></li>
                <li ><span>Tất cả sản phẩm</span></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className='clearfix container shop-bottom'>
        <div className='row'>
          <div className='col-lg-12 visible-sm visible-xs title-shop'>
            <div className="visible-sm visible-xs">
              <h1 className="title-sm">
                Tất cả sản phẩm
              </h1>
            </div>
            <div className='filter-by-wrapper'>
              <div className='filter-by'>
                <div className='sort-filter-option navbar-inactive'>
                  <div className='filterBtn txtLeft btn-navbar-collection'>
                    <span className="list-coll" onClick={() => setCategory(!category)}>
                      <i className="fa fa-server" ></i>
                      Danh mục
                    </span>
                  </div>
                </div>
                <div className='sort-filter-option js-promoteTooltip'>
                  <div className='filterBtn txtLeft showOverlay'>
                    <i className="fa fa-sort-alpha-asc" ></i>
                    <span className='custom-dropdown custom-dropdown--white'>
                      <select className='sort-by custom-dropdown__select custom-dropdown__select--white' onChange={handSort}
                        value={sort}>

                        {
                          sortOptions.map((e) => (
                            <option value={e.title} key={e.id}>{e.name}</option>
                          ))
                        }
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={category ? 'wrapper-shop ' : " mok "}>
            <div className='col-md-12 col-sm-12 col-xs-12 leftsidebar-col'>
              <div className='group_sidebar'>
                <div className='list-group navbar-inner '>
                  <ul className='nav navs sidebar menu'>
                    <li className='item has-sub first'>
                      <a className={""} onClick={() => handFilter('all')}>
                        <span className="lbl">Tất cả sản phẩm</span>
                      </a>
                    </li>
                    <li className='item has-sub  first'>
                      <a className={show ? "active" : ""} onClick={() => setShow(!show)} >
                        <span className="lbl">Rau củ quả</span>
                        <span className="sign drop-down collapsed">
                        </span>
                      </a>
                      <ul className={show ? " children in-child " : "children"}>
                        {mok.filter(e => e.created_date.getDay() === new Date(2022, 1, 23).getDay()).map((x) => (
                          <li className="first" key={x.id}>
                            <a onClick={() => handFilter(x.other)}>
                              <span>{x.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='item has-sub  first'>
                      <a className={menu ? "active" : ""} onClick={() => setMenu(!menu)}>
                        <span className="lbl">Thực phẩm tươi sống</span>
                        <span className="sign drop-down collapsed">
                        </span>
                      </a>
                      <ul className={menu ? " children  in-child" : "children"}>
                        {mok.filter(e => e.created_date.getDay() === new Date(2022, 8, 25).getDay()).map((x) => (
                          <li className="first" key={x.id}>
                            <a onClick={() => handFilter(x.other)}>
                              <span>{x.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='item has-sub  first'>
                      <a className={menus ? "active" : ""} onClick={() => setMenus(!menus)}>
                        <span className="lbl">Thực phẩm khô</span>
                        <span className="sign drop-down collapsed">
                        </span>
                      </a>
                      <ul className={menus ? " children  in-child" : "children"}>
                        {mok.filter(e => e.created_date.getDay() === new Date(2022, 4, 27).getDay()).map((x) => (
                          <li className="first" key={x.id}>
                            <a onClick={() => handFilter(x.other)}>
                              <span>{x.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='item has-sub  first'>
                      <a >
                        <span className="lbl">Thực phẩm bổ dưỡng</span>

                      </a>
                    </li>
                    <li className='item has-sub first'>
                      <a >
                        <span className="lbl">Thực phẩm chế biến</span>

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='wrapper-sticky col-lg-4'>
            <div className=' col-sm-12 col-xs-12 leftsidebar-col'>
              <div className='group_sidebar'>
                <div className='list-group navbar-inner '>
                  <div className="mega-left-title btn-navbar title-hidden-sm">
                    <h3 className="sb-title">Danh mục </h3>
                  </div>
                  <ul className='nav navs sidebar menu'>
                    <li className='item has-sub first'>
                      <a className={""} onClick={() => handFilter('all')}>
                        <span className="lbl">Tất cả sản phẩm</span>
                      </a>
                    </li>
                    <li className='item has-sub first'>
                      <a className={show ? "active" : ""}>
                        <span className="lbl">Rau củ quả</span>
                        <span className="sign drop-down collapsed" onClick={() => setShow(!show)}>
                        </span>
                      </a>
                      <ul className={show ? " children in-child " : ' children '}>
                        {mok.filter(e => e.created_date.getDay() === new Date(2022, 1, 23).getDay()).map((x) => (
                          <li className="first" key={x.id}>
                            <a onClick={() => handFilter(x.other)}>
                              <span>{x.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='item has-sub  first'>
                      <a className={menu ? "active" : ""}>
                        <span className="lbl">Thực phẩm tươi sống</span>
                        <span className="sign drop-down collapsed" onClick={() => setMenu(!menu)}>
                        </span>
                      </a>
                      <ul className={menu ? " children  in-child" : ' children '}>
                        {mok.filter(e => e.created_date.getDay() === new Date(2022, 8, 25).getDay()).map((x) => (
                          <li className="first" key={x.id}>
                            <a onClick={() => handFilter(x.other)}>
                              <span>{x.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='item has-sub  first'>
                      <a className={menus ? "active" : ""}>
                        <span className="lbl">Thực phẩm khô</span>
                        <span className="sign drop-down collapsed" onClick={() => setMenus(!menus)}>
                        </span>
                      </a>
                      <ul className={menus ? " children in-child  " : ' children '}>
                        {mok.filter(e => e.created_date.getDay() === new Date(2022, 4, 27).getDay()).map((x) => (
                          <li className="first" key={x.id}>
                            <a onClick={() => handFilter(x.other)}>
                              <span>{x.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='item has-sub  first'>
                      <a>
                        <span className="lbl">Thực phẩm bổ dưỡng</span>
                      </a>
                    </li>
                    <li className='item has-sub  first'>
                      <a>
                        <span className="lbl">Thực phẩm chế biến</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="list-group_l banner-left hidden-sm hidden-xs">
                  <a >
                    <img src="//hstatic.net/349/1000150349/1000203344/left_image_ad.jpg?v=28" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='content-col  col-lg-8' >
            <div className='row'>
              <div className='main-content'>
                <div className=' hidden-sm hidden-xs col-lg-12'>
                  <div className='sort-collection'>
                    <div className='row'>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1>
                          Tất cả sản phẩm
                        </h1>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='browse-tags'>
                          <span>Sắp xếp theo:</span>
                          <span className='custom-dropdown custom-dropdown--white'>
                            <select className="sort-by custom-dropdown__select custom-dropdown__select--white" onChange={handSort}
                              value={sort}>
                              {sortOptions.map((e) => (
                                <option key={e.id} value={e.title} >{e.name}</option>
                              ))}
                            </select>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 col-sm-12 col-xs-12 content-product-list'>
                  <div className='row product-list'>
                    {
                      product.filter((x) => x.category === "shop").map((e) => (
                        <div className='col-md-4  col-sm-6 col-xs-12 pro-loop' key={e.id}>
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
                                  <a href="/products/xuong-ong-heo-vissan" className="view-detail" onClick={(event) => {
                                    event.preventDefault()
                                    handDetail(e.id)
                                  }}>
                                    <span><i className="fa fa-clone"> </i></span>
                                  </a>
                                </div>
                                <div className="btn-quickview-products">
                                  <a className="quickview" ><i className="fa fa-eye"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="product-detail clearfix">
                              <h3 className="pro-name"><a >{e.title} </a></h3>
                              <div className="pro-prices">
                                <p className="pro-price">{e.price.toLocaleString()}₫</p>
                                <p className="pro-price-del text-left">
                                  <del className={e.sale ? "compare-price" : 'sale'}>{e.prices.toLocaleString()}₫</del>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className={page ? "mok " : 'col-md-12 col-sm-12 col-xs-12 '}>
                  <div className='clearfix'>
                    <div id='pagination'>
                      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-center">
                        {number.map((e) => (
                          <a className={e === current ? "page-node currents" : "page-node"} key={e} onClick={() => handClick(e)}>{e}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >
    </div >
  )
}

export default SHop