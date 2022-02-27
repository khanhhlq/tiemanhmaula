import React from 'react'
import About from './components/About/About'
import GirdImages from './components/GirdImages/GirdImages'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='content'>
                    <p>#tiemanhmaula</p>
                    <p>Chào mừng đến với</p>
                    <p>Tiệm ảnh màu lá</p>
                    <p>Một bức ảnh là một bí mật của bí mật. Nó càng thể hiện nhiều, bạn càng biết ít</p>
                    <a href='https://www.facebook.com/TiemAnhMauLa/'>
                        <button className='button'>Ghé thăm fanpage</button>
                    </a>
                </div>
            </div >
            <About />
            <GirdImages />
        </>
    )
}

export default Home;
