import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import "../Form/Form.css"
import * as Yup from "yup";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserToLocalStorage } from '../../Redux/actions/user';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
const Login = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const [show, setShow] = useState(true)
  const User = async () => {
    return await axios.get('https://orangic-server.herokuapp.com/user')
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
        iduser: formData.iduser,
      },
    });
  const userItems = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handSubmit = (e) => {
    e.preventDefault()
    const userId = {
      iduser: uuidv4(),
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

      swal({
        title: "Đăng nhập  thành công!",
        icon: "success",
        button: "Ok!",
      }
      );
      const check = formData.filter(e => {
        return e.email.includes(formik.values.email) || e.phone.includes(formik.values.email)
      })
      localStorage.setItem('user', JSON.stringify(check[0]))
      dispatch(saveUserToLocalStorage(check[0]))
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
                <NavLink to={'/'}>
                  <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="logo" />
                </NavLink>
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
                    <div className='form-group input-password'>
                      <input
                        type={show ? "password" : "text"}
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Mật khẩu"
                        className='form-control'
                      />
                      <i className={show ? "fa-solid fa-eye-slash icon-eye" : "fa-solid fa-eye icon-eye"} onClick={() => setShow(!show)}></i>
                      {formik.errors.password && (
                        <p className="errorMsg"> {formik.errors.password} </p>
                      )}
                    </div>
                    <div className="form-button">
                      <button type="submit">login</button>
                      <p>Bạn có tài khoản chưa?
                        <NavLink to={'/login'}>
                          Đăng kí
                        </NavLink>
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