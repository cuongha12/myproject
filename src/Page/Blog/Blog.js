import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Blog/Blog.css"
const Blog = () => {
  return (
    <div className={'blog-res'}>
      <div className="wrap-breadcrumb">
        <div className="clearfix container">
          <div className="row main-header">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
              <ol className="breadcrumb breadcrumb-arrows">
                <li><NavLink to={'/'}>Trang chủ</NavLink></li>
                <li><a >Blog</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-12'>
        <div className='container'>
          <div className='articles'>
            <div className='col-lg-12 title-blog'>
              <h1>Tin tức</h1>
            </div>
            <div className='news-content col-lg-12'>
              <div className='row'>
                <div className='col-lg-5 img-article'>
                  <div className="art-img">
                    <img src="https://file.hstatic.net/1000150349/article/ww_large.jpg" alt="" />
                  </div>
                </div>
                <div className='col-lg-7'>
                  <h2 className="title-article">
                    <a >Cơm cháy kho quẹt món ăn dân dã nhưng ngon "vô đối" ở miền Tây</a>
                  </h2>
                  <div className='content-blog'>
                    <ul className='info-more'>
                      <li>
                        <i className="fa-regular fa-calendar"></i>
                        <time p>15/12/2016</time>
                      </li>
                      <li><i className="fa-regular fa-file-lines"></i><a > Tin tức	</a> </li>
                    </ul>
                    <p>Cơm cháy chấm kho quẹt là một món ăn quen thuộc của người miền Tây.
                      Không quá cầu kì trong thành phần cũng như cách chế biến, nhưng thứ đặc sản dân giã này chính là
                      biểu hiện của sự...
                    </p>
                    <a className="btn-rb " >
                      Xem tiếp
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr class="line-blog"></hr>
            <div className='news-content col-lg-12'>
              <div className='row'>
                <div className='col-lg-5 img-article'>
                  <div className="art-img">
                    <img src="https://file.hstatic.net/1000150349/article/352x176_a3794c95-018e-41f8-b723-270a7bfe189c_large.jpg" alt="" />
                  </div>
                </div>
                <div className='col-lg-7'>
                  <h2 className="title-article">
                    <a >"Chết mê" trước những món ăn ngon truyền thống Ấn Độ</a>
                  </h2>
                  <div className='content-blog'>
                    <ul className='info-more'>
                      <li>
                        <i className="fa-regular fa-calendar"></i>
                        <time p>15/12/2016</time>
                      </li>
                      <li><i className="fa-regular fa-file-lines"></i><a > Tin tức	</a> </li>
                    </ul>
                    <p>Ẩm thực Ấn Độ rất đa dạng về thành phần, hương vị, cách chế biến. Bên cạnh đó món ăn 
                      Ấn còn rất đặc trưng bởi sự kết hợp của các loại gia vị.Bánh mì NaanĐây là loại bánh mì...
                    </p>
                    <a className="btn-rb " >
                      Xem tiếp
                      <span className="fa fa-angle-double-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog