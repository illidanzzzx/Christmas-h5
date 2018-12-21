import React ,{Component} from "react"
import './index.css'
import a19 from './images/a-19.png'
export default class App extends Component {
    render() {
      return (
        <div className="swiper-slide">
            <div className="slide2_main">
                <p className="scene-02title"></p>
                <img className="scene-02Img" src={a19} />
            </div>
        </div>
      );
    }
  }