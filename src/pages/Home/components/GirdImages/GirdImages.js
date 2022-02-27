import React from "react";
import './GirdImages.css'
import gird1 from './images/gird-1.jpg'
import gird2 from './images/gird-2.jpg'
import gird3 from './images/gird-3.jpg'
import gird4 from './images/gird-4.jpg'
import gird5 from './images/gird-5.jpg'
import gird6 from './images/gird-6.jpg'
import gird7 from './images/gird-7.jpg'
import gird8 from './images/gird-8.jpg'
import gird9 from './images/gird-9.jpg'
import gird10 from './images/gird-10.jpg'
import gird11 from './images/gird-11.jpg'
import gird12 from './images/gird-12.jpg'
import gird13 from './images/gird-13.jpg'
import gird14 from './images/gird-14.jpg'
import gird15 from './images/gird-15.jpg'

const Demo = () => {
    return (
        <>
            <div className="main">
                <h1>BỘ SƯU TẬP</h1>
                <p>Hãy ngắm nhìn thật lâu và chiêm ngưỡng nó</p>
                <div className="gallery">
                    <div className="img">
                        <img src={gird5} />
                    </div>
                    <div className="img">
                        <img src={gird2} />
                    </div>
                    <div className="img">
                        <img src={gird3} />
                    </div>
                    <div className="img">
                        <img src={gird4} />
                    </div>
                    <div className="img">
                        <img src={gird1} />
                    </div>
                    <div className="img">
                        <img src={gird6} />
                    </div>
                    <div className="img">
                        <img src={gird7} />
                    </div>
                    <div className="img">
                        <img src={gird8} />
                    </div>
                    <div className="img">
                        <img src={gird9} />
                    </div>
                    <div className="img">
                        <img src={gird10} />
                    </div>
                    <div className="img">
                        <img src={gird11} />
                    </div>
                    <div className="img">
                        <img src={gird14} />
                    </div>
                    <div className="img">
                        <img src={gird13} />
                    </div>
                    <div className="img">
                        <img src={gird15} />
                    </div>
                    <div className="img">
                        <img src={gird12} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo;