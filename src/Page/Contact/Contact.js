import { useFormik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Contact/Contact.css";
import * as Yup from "yup";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      text: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Không được để trống"),
      email: Yup.string()
        .required("Không được để trống")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập một địa chỉ email hợp lệ"
        ),
      text: Yup.string()
        .required("Không được để trống")
    }),
    onSubmit: async (values) => {

    },
  });
  return (
    <div className='blog-res'>
      <div className="wrap-breadcrumb">
        <div className="clearfix container">
          <div className="row main-header">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
              <ol className="breadcrumb breadcrumb-arrows">
                <li><NavLink to={'/'}>Trang chủ</NavLink></li>
                <li><a >Liên hệ</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <span className="header-contact header-page ">
                <h1>Liên hệ</h1>
              </span>
              <div className='content-contact '>
                <p className="text-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.310729061172!2d106.6539626784669!3d10.787496261978522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecbb6275cc3%3A0x634b1cfb9f2ed0be!2zNTYgVsOibiBDw7RpLCBwaMaw4budbmcgNywgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1446015505979" width="100%" height="350" frameBorder={0} allowFullScreen="" />
                </p>
                <div className='row'>
                  <div className='col-lg-7'>
                    <h3>Viết nhận xét</h3>
                    <div className=' col-lg-12' >
                      <form className='user-form' onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder="Enter your name"
                            className='form-control'
                          />
                          {formik.errors.name && (
                            <p className="errorMsg"> {formik.errors.name} </p>
                          )}
                        </div>
                        <div className='form-group'>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Enter your email"
                            className='form-control'
                          />

                          {formik.errors.email && (
                            <p className="errorMsg"> {formik.errors.email} </p>
                          )}
                        </div>
                        <div className='form-group'>
                          <textarea className='form-control' placeholder="Viết bình luận"
                            id="text"
                            name="text"
                            value={formik.values.text}
                            onChange={formik.handleChange}>
                            {formik.errors.email && (
                              <p className="errorMsg"> {formik.errors.text} </p>
                            )}
                          </textarea>
                        </div>
                        <div className="form-button btn-contact">
                          <button type="submit" className='btn-rb'>Gửi liên hệ</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='col-lg-5'>
                    <h3>Chúng tôi ở đây</h3>
                    <h3 class="name-company">Fashion Style</h3>
                    <p>	Giải pháp bán hàng toàn diện từ website đến cửa hàng	</p>
                    <ul className="info-address">
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>56 Vân côi, Phường 7, Quận Tân Bình, Tp. Hồ Chí Minh</span>
                      </li>
                      <li>
                        <i className="fa-regular fa-envelope"></i>
                        <span>hi@haravan.com</span>
                      </li>

                      <li>
                        <i className="fa-solid fa-phone"></i>
                        <span>1900.636.099</span>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Contact