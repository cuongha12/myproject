import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import "../Form/Form.css"
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Redux/actions/user';
const Form = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])
  const User = async () => {
    return await axios.get('http://localhost:3000/user')
      .then(res => setProduct(res.data))
  }
  useEffect(() => {
    User()
  }, [])
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Không được để trống")
        .min(4, "Phải có 4 ký tự trở lên"),
      email: Yup.string()
        .required("Không được để trống")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập một địa chỉ email hợp lệ"
        ),
      password: Yup.string()
        .required("Không được để trống")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),
      confirmedPassword: Yup.string()
        .required("Không được để trống")
        .oneOf([Yup.ref("password"), null], "Mật khẩu phải phù hợp với"),
      phone: Yup.string()
        .required("Không được để trống")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Phải là một số điện thoại hợp lệ"
        ),
    }),
    onSubmit: async (values) => {
      swal({
        title: "Đăng kí tài khoản thành công!",
        icon: "success",
        button: "Ok!",
      });
      const userForm = product.find(e => {
        return e.email === formik.values.email || e.phone === formik.values.phone
      })
      if (userForm) {
        swal({
          title: "Email hoặc số điện thoại này đã có người đăng kí",
          icon: "error",
          button: "Vui lòng đăng kí lại !",
        });
      } else {
        const userCard = await axios.post('http://localhost:3000/user',
          formik.values)
        dispatch(createUser(product))
        navigate('/signup')
      }
    },
  });
  return (
    <div className='form-login'>
      <div className='user-form-part'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
              <div className="user-form-logo">
                <a href='/'>
                  <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="logo" />
                </a>
              </div>
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='user-form-card col-lg-6 col-md-6 col-sm-6'>
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
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter your password"
                        className='form-control'
                      />
                      {formik.errors.password && (
                        <p className="errorMsg"> {formik.errors.password} </p>
                      )}
                    </div>
                    <div className='form-group'>
                      <input
                        type="password"
                        id="confirmedPassword"
                        name="confirmedPassword"
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                        placeholder="Confirm your password"
                        className='form-control'
                      />
                      {formik.errors.confirmedPassword && (
                        <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
                      )}
                    </div>
                    <div className='form-group'>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        placeholder="Enter your phone numbers"
                        className='form-control'
                      />
                      {formik.errors.phone && (
                        <p className="errorMsg"> {formik.errors.phone} </p>
                      )}
                    </div>
                    <div className="form-button">
                      <button type="submit">login</button>
                      <p>Bạn có tài khoản chưa?
                        <a href='signup'>Đăng nhập</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form