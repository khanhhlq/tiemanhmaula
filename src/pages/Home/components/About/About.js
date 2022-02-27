import React from 'react'
import './About.css'
import author1 from './/author/author1.jpg'
import author2 from './author/author2.jpg'
import author3 from './author/author3.jpg'
import author4 from './author/author4.jpg'

const dataUserName = {
    user1: 'Võ Chí Khánh',
    user2: 'Nguyễn Đình Hùng',
    user3: 'Đinh Trần Đăng Huy',
    user4: 'Nguyễn Khánh Min'
}

const About = () => {
    return (
        <div className="about">
            <h1 className="heading">Thành viên của tiệm ảnh màu lá</h1>
            <span className='line'></span>
            <div className="row">
                <div className="profile">
                    <img src={author1} className="profile-img" />
                    <h3 className="user-name">{dataUserName.user1}</h3>
                    <h5>Creative Director</h5>
                </div>
                <div className="profile">
                    <img src={author2} className="profile-img" />
                    <h3 className="user-name">{dataUserName.user2}</h3>
                    <h5>Managing Partner</h5>
                </div>
                <div className="profile">
                    <img src={author3} className="profile-img" />
                    <h3 className="user-name">{dataUserName.user3}</h3>
                    <h5>Project Manager</h5>
                </div>
                <div className="profile">
                    <img src={author4} className="profile-img" />
                    <h3 className="user-name">{dataUserName.user4}</h3>
                    <h5>Project Manager</h5>
                </div>
            </div>
        </div>
    )
}

export default About;
