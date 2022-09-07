import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import "../Form/Form.css"
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserToLocalStorage } from '../../Redux/actions/user';
import swal from 'sweetalert';

const Login = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const User = async () => {
    return await axios.get('http://localhost:3000/user')
      .then(res => setFormData(res.data))
  }
  useEffect(() => {
    User()
  }, [])
  const formik = useFormik(
    {

      initialValues: {
        email: "",
        password: "",
      },
    });
  const userItems = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handSubmit = (e) => {
    e.preventDefault()
    const userId = {
      user: formik.values.email,
      password: formik.values.password
    }
    const user = formData.find((e) => {
      return (e.email === formik.values.email && e.password === formik.values.password) ||
        (e.name === formik.values.email && e.password === formik.values.password) ||
        (e.phone === formik.values.email && e.password === formik.values.password)
    })
    if (formik.values.email === "" && formik.values.password === "") {
      return
    } else if (!user) {
      swal({
        title: "Đăng nhập thất bại!",
        text: "Tài khoản hoặc mật khẩu không chính xác",
        icon: "error",
        button: "Vui lòng đăng nhập lại!",
      });
    }
    else if (!!user) {
      localStorage.setItem('user', JSON.stringify(userId))
      dispatch(saveUserToLocalStorage(userId))
      swal({
        title: "Đăng nhập  thành công!",
        icon: "success",
        button: "Ok!",
      }
      );
      navigate('/')
    }
  }
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
                  <form className='user-form' onSubmit={(e) => handSubmit(e)}>
                    <div className='form-group'>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
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
                        placeholder="Mật khẩu"
                        className='form-control'
                      />
                      {formik.errors.password && (
                        <p className="errorMsg"> {formik.errors.password} </p>
                      )}
                    </div>
                    <div className="form-button">
                      <button type="submit">login</button>
                      <p>Bạn có tài khoản chưa?
                        <a href='login'>Đăng kí</a>
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

export default Login