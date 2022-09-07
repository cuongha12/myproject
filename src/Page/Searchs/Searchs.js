import React from 'react'
import "../Searchs/Searchs.css"
const Searchs = () => {
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
            <section className='signup search-main collections-container margin-bottom-20 margin-top-30'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h1 className="title-head text-center margin-bottom-20 margin-top-0">Nhập từ khóa để tìm kiếm sản phẩm</h1>
                        </div>
                        <div className="col-md-6 col-md-offset-3">
                            <form className='has-validation-callback'>
                                <div className='input-group'>
                                    <input type="text" class="form-control" placeholder="Bạn cần tìm gì hôm nay?" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Searchs