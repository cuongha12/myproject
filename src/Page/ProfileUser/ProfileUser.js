import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EditUser } from '../../Redux/actions/user'
import "../ProfileUser/ProfileUser.css"
const ProfileUser = () => {
    const [user, setUser] = useState([])
    const Profile = async () => {
        return await axios.get('https://orangic-server.herokuapp.com/user')
            .then(res => setUser(res.data))
    }
    useEffect(() => {
        Profile()
    }, [])
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const test = useSelector(e => e.user)
    // const check = user.filter(e => {
    //     return e.iduser.includes(userId.iduser)
    // })
    // dispatch(EditUser(check))
    const check = user.filter(e => {
        return e.id === test.userId.id
    })
    const handUser = (e) => {
        navigate(`/edit/${e}`)
    }
    return (
        <div className='body'>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">

                        {/* {
                            check.map(e => (
                                <div className="col-xl-6 col-md-12 col-sm-12 res-pro" key={e.id}>
                                    <div className="card user-card-full">
                                        <div className="row m-l-0 m-r-0">
                                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                                <div className="card-block text-center text-white">
                                                    <div className="m-b-25">
                                                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                                    </div>
                                                    <h6 className="f-w-600">Tài khoản của tôi</h6>
                                                    <i className="fa-regular fa-pen-to-square profile" onClick={() => handUser(e)}></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8" key={e.id}>
                                                <div className="card-block">
                                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Thông tin cá nhân</h6>
                                                    <div className="row">
                                                        <div className="col-sm-5">
                                                            <p className="m-b-10 f-w-600">Tên tài khoản</p>
                                                            <h6 className="text-muted f-w-400">{e.name}</h6>
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <p className="m-b-10 f-w-600">Email</p>
                                                            <h6 className="text-muted f-w-400">{e.email}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-5">
                                                            <p className="m-b-10 f-w-600">Mật khẩu</p>
                                                            <h6 className="text-muted f-w-400">{e.password}</h6>
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <p className="m-b-10 f-w-600">Phone</p>
                                                            <h6 className="text-muted f-w-400">{e.phone}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        } */}
                        <div className="col-xl-6 col-md-12 col-sm-12 res-pro" >
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 className="f-w-600">Tài khoản của tôi</h6>
                                            <i className="fa-regular fa-pen-to-square profile" onClick={() => handUser(test.userId.id)}></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Thông tin cá nhân</h6>
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <p className="m-b-10 f-w-600">Tên tài khoản</p>
                                                    <h6 className="text-muted f-w-400">{test.userId.name}</h6>
                                                </div>
                                                <div className="col-sm-7">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{test.userId.email}</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <p className="m-b-10 f-w-600">Mật khẩu</p>
                                                    <h6 className="text-muted f-w-400">{test.userId.password}</h6>
                                                </div>
                                                <div className="col-sm-7">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">{test.userId.phone}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {
                            checks.map(e => (
                                <div className="col-xl-6 col-md-12 col-sm-12 res-pro" key={e.id}>
                                    <div className="card user-card-full">
                                        <div className="row m-l-0 m-r-0">
                                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                                <div className="card-block text-center text-white">
                                                    <div className="m-b-25">
                                                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                                    </div>
                                                    <h6 className="f-w-600">Tài khoản của tôi</h6>
                                                    <i className="fa-regular fa-pen-to-square profile" onClick={() => handUser(e)}></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8" key={e.id}>
                                                <div className="card-block">
                                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Thông tin cá nhân</h6>
                                                    <div className="row">
                                                        <div className="col-sm-5">
                                                            <p className="m-b-10 f-w-600">Tên tài khoản</p>
                                                            <h6 className="text-muted f-w-400">{e.name}</h6>
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <p className="m-b-10 f-w-600">Email</p>
                                                            <h6 className="text-muted f-w-400">{e.email}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-5">
                                                            <p className="m-b-10 f-w-600">Mật khẩu</p>
                                                            <h6 className="text-muted f-w-400">{e.password}</h6>
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <p className="m-b-10 f-w-600">Phone</p>
                                                            <h6 className="text-muted f-w-400">{e.phone}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser