import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import "../Edit/Edit.css";
import * as Yup from "yup";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Edit = () => {
    const { id } = useParams()
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    })
    const Profile = async () => {
        return await axios.get(`https://orangic-server.herokuapp.com/user/${id}`)
            .then(res => setUser(res.data))
    }
    useEffect(() => {
        Profile()
    }, [])
    const editUser = useSelector(e => e.user)
    const [show, setShow] = useState(true)
    const [shows, setShows] = useState(true)
    const formik = useFormik({
        initialValues: {
            email: editUser.edit.email,
            name: editUser.edit.name,
            phone: editUser.edit.phone,
            password: editUser.edit.password,
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

        },
    });
    
    return (
        <div className='bodys'>
            <div className="container-xl px-4 mt-4">
                <div className="mt-0 mb-4">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card mb-4 mb-xl-0">
                                <div className="card-header">Ảnh đại diện</div>
                                <div className="card-body text-center">
                                    <img className="img-account-profile rounded-circle mb-2" src="https://img.icons8.com/bubbles/100/000000/user.png" alt="" />
                                    <div className="small font-italic text-muted mb-4">JPG hoặc PNG không lớn hơn 5 MB</div>
                                    <input type="file" id="myFile" name="filename" className="btn" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card mb-4">
                                <div className="card-header">Chi tiết tài khoản</div>
                                <div className="card-body">
                                    <form className='user-form' onSubmit={formik.handleSubmit}>
                                        <div className='form-group'>
                                            <label className="small mb-1" >Tên đăng nhập</label>
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
                                            <label className="small mb-1" >Email</label>
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
                                        <div className='form-group input-password'>
                                            <label className="small mb-1" >Mật khẩu</label>
                                            <input
                                                type={show ? "password" : "text"}
                                                id="password"
                                                name="password"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your password"
                                                className='form-control'
                                            />
                                            <i className={show ? "fa-solid fa-eye-slash icon-eyee" : "fa-solid fa-eye icon-eyee"} onClick={() => setShow(!show)}></i>
                                            {formik.errors.password && (
                                                <p className="errorMsg">{formik.errors.password} </p>
                                            )}
                                        </div>
                                        <div className='form-group input-passwords'>
                                            <label className="small mb-1" >Vui lòng nhập lại mật khẩu</label>
                                            <input
                                                type={shows ? "password" : "text"}
                                                id="confirmedPassword"
                                                name="confirmedPassword"
                                                value={formik.values.confirmedPassword}
                                                onChange={formik.handleChange}
                                                placeholder="Confirm your password"
                                                className='form-control'
                                            />
                                            <i className={shows ? "fa-solid fa-eye-slash icon-eyee" : "fa-solid fa-eye icon-eyee"} onClick={() => setShows(!shows)}></i>
                                            {formik.errors.confirmedPassword && (
                                                <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
                                            )}
                                        </div>
                                        <div className='form-group'>
                                            <label className="small mb-1" >Số điện thoại</label>
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
                                        <div className="form-button btn-contact">
                                            <button type="submit" className='btn-rb'>Lưu</button>
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

export default Edit