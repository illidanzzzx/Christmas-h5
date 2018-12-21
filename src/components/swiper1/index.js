import React ,{Component} from "react"
import './index.css'
import a33 from './images/a-33.png'
import a01 from './images/a-1.png'
import a36 from './images/a-36.png'
import a03 from './images/a-3.png'
import a04 from './images/a-4.png'
import a05 from './images/a-5.png'
import a15 from './images/a-15.png'
import a16 from './images/a-16.png'
import a17 from './images/a-17.png'
import a24 from './images/a-24.png'
import a25 from './images/a-25.png'
import a09 from './images/a-9.png'
import a37 from './images/a-37.png'
import a38 from './images/a-38.png'
import a11 from './images/a-11.png'
import a31 from './images/a-31.png'
export default class App extends Component {
    render() {
      return (
        <div className="swiper-slide">
            <div className="scene-01">
                <audio id="sidio" controls="controls" loop="loop" className="embed" autoPlay="preload">
                    不支持播放器哦
                </audio>
                <div>
                    <img src={a33} className="img-010" alt="" />
                    <img src={a01} className="img-01" alt="" />
                    <img src={a36} className="img-02" alt="" />
                    <img src={a03} className="img-03 animated infinite shake delay-2s" alt="" />
                    <img src={a04} className="img-04 animated infinite bounce delay-2s" alt="" />
                    <img src={a05} className="img-05 animated infinite flash delay-2s" alt="" />
                    <img src={a15} className="img-06" alt="" />
                    <img src={a16} className="img-07" alt="" />
                    <img src={a17} className="img-08" alt="" />
                    <img src={a24} className="img-09" alt="" />
                    <img src={a25} className="img-10" alt="" />
                    <img src={a25} className="img-16" alt="" />
                    <img src={a09} className="img-11" alt="" />
                    <img src={a25} className="img-12" alt="" />
                    <img src={a37} className="img-13" alt="" />
                    <img src={a38} className="img-15  animated bounceInDown flash delay-2s" alt="" />
                    <img src={a11} className="img-16" alt="" />
                    <img src={a31} className="img-17" alt="" />
                </div>
            </div>
        </div>
      );
    }
  }