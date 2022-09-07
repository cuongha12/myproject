import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-3 col-xs-12 clear-sm'>
                            <div className='widget-wrapper animated'>
                                <h3 className="title title_left">Giới thiệu</h3>
                                <div className='inner about_us'>
                                    <p className="message">Với hơn 100 nhân viên tư
                                        vấn trên mọi phương diện, không chỉ là hướng dẫn và xử lý các vấn đề
                                        từ Haravan, chúng tôi luôn
                                        mong cùng chia sẻ các kinh nghiệm giúp bạn bán được nhiều hàng hơn.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="fa fa-home"></i>56 Vân côi, Q. Tân Bình, Tp.HCM
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope"></i> <a >hi@haravan.com</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone"></i>1900.636.099
                                        </li>
                                        <li>
                                            <i className="fa fa-print"></i>1900.636.099
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-2 col-xs-12 clear-sm'>
                            <div className='widget-wrapper animated'>
                                <h3 className="title title_left">Liên kết</h3>
                                <div className="inner">
                                    <ul className="list-unstyled list-styled">
                                        <li>
                                            <a >Trang chủ</a>
                                        </li>
                                        <li>
                                            <a >Sản phẩm</a>
                                        </li>
                                        <li>
                                            <a >Blog</a>
                                        </li>
                                        <li>
                                            <a >Giới thiệu</a>
                                        </li>
                                        <li>
                                            <a >Liên hệ</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-3 col-xs-12 clear-sm'>
                            <div className='widget-wrapper animated'>
                                <h3 className="title title_left">Đăng kí nhận tin</h3>
                                <div className='inner'>
                                    <form className='contact-form'>
                                        <div className='group-input'>
                                            <input type="email" required="required" name="contact[email]" id="contact_email" />
                                            <label>Nhập email của bạn</label>
                                            <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                        </div>
                                    </form>
                                    <div className="caption">Hãy nhập email của bạn vào đây để nhận tin!</div>
                                    <div id="widget-social" className="social-icons">
                                        <ul className="list-inline">
                                            <li>
                                                <a target="_blank" href="/" className="social-wrapper facebook">
                                                    <span className="social-icon">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="/" className="social-wrapper twitter">
                                                    <span className="social-icon">
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="/" className="social-wrapper pinterest">
                                                    <span className="social-icon">
                                                        <i className="fa-brands fa-pinterest"></i>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="/" className="social-wrapper google">
                                                    <span className="social-icon">
                                                        <i className="fa-brands fa-google-plus-g"></i>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="/" className="social-wrapper youtube">
                                                    <span className="social-icon">
                                                        <i className="fa-brands fa-youtube"></i>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="/" className="social-wrapper instagram">
                                                    <span className="social-icon">
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-xs-12 clear-sm'>
                            <div className='class="widget-wrapper animated"'>
                                <h3 className="title title_left">Kết nối với chúng tôi</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer