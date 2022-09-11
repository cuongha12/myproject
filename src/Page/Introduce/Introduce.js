import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Introduce/Introduce.css'
const Introduce = () => {
  return (
    <div >
      <div className="wrap-breadcrumb">
        <div className="clearfix container">
          <div className="row main-header">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
              <ol className="breadcrumb breadcrumb-arrows">
                <li><NavLink to={'/'}>Trang chủ</NavLink></li>
                <li><a >Giới thiệu</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 about-us'>
              <span className="header-page ">
                <h1>Giới thiệu</h1>
              </span>
              <h3 class="about-heading2-home">Chào mừng bạn đến với <span>Fresh Food</span></h3>
              <p>Điều đặc biệt khi tới Fresh Food là bạn không cần
                 phải lo lắng tới chất lượng sản phẩm,dịch vụ,thực phẩm,... 
                 Chúng tôi luôn mang đến cho khách hàng chất lượng sản phẩm và thực phẩm an toàn nhất ,
                  sạch  nhất cho người dùng sử dụng. 
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Introduce