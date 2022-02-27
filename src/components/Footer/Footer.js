import React from 'react'
import './Footer.css'

const dataFooter = {
    title: 'Bạn thấy sao về chúng tôi?',
    description: 'Tiệm ảnh màu lá là dịch vụ thuê chụp ảnh chất lượng với sự tham gia phối cảnh, trang điểm, chụp ảnh của bọn mình. Cho ra đời hàng trăm sản phẩm ảnh từ phong cảnh, chân dung đến phối cảnh sản phẩm. Chúng tớ sẵn sàng giúp bạn, nhóm của bạn hay sản phẩm của các bạn được trở thành phiên bản tốt nhất của mình',
    noCopyRight: 'Bản quyền thuộc về Tiệm ảnh màu lá'
}

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <h3>{dataFooter.title}</h3>
                <p>{dataFooter.description}</p>
                <ul className='socials'>
                    <li><a href='#'><i className='fa-brands fa-facebook'></i></a></li>
                    <li><a href='#'><i className='fa-brands fa-youtube'></i></a></li>
                    <li><a href='#'><i className='fa-brands fa-instagram'></i></a></li>
                    <li><a href='#'><i className='fa-brands fa-facebook-messenger'></i></a></li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {dataFooter.noCopyRight}</p>
            </div>
        </footer>
    )
}

export default Footer
