import React ,{Component} from "react"
import './index.css'
import a05 from './images/a-5.png'
import a41 from './images/a-41.png'
import a42 from './images/a-42.png'
import a43 from './images/a-43.png'
import a46 from './images/a-46.png'
import a52 from './images/a-52.png'
import house from './images/house.png'
import lu from './images/lu.png'
import dong1 from './images/dong1.png'
import dong2 from './images/dong2.png'
export default class App extends Component {
    render() {
      return (
        <div className="swiper-slide">
                <div className="slide4_main">
                    {/* <!--画面3 场景1--> */}
                    <div className="slide4_one">

                        <div className="slide4_one_header"></div>
                        <div className="slide4_content">
                            {/* <!--马车所在位置--> */}
                            <img src={a46} className="slide4_main_car" />
                            <img src={lu} className="slide4_main_lu ludh animated infinite flash delay-2s" />
                        </div>
                        <div className="slide4_one_footer">
                            <span className="slide4_tree"></span>
                            <span className="slide4_tree" style={{right:'-14rem',top:'8rem'}}></span>
                            <span className="slide4_tree_two"></span>
                            {/* <!-- <span className="slide4_tree_three"></span> --> */}
                        </div>
                    </div>
                    {/* <!-- 画面3 场景2 --> */}
                    <div className="slide4_two" style={{display: 'none'}}>
                        <span className="slide4_two_text">
                            <p> 找不到麋鹿了。。。</p>
                            <p>还 怎 么 送 礼 物 呢？</p>
                        </span>
                        <div className="slide4_two_wt animated bounceInDown flash delay-2s" style={{display:'none'}}>
                            {/* <!-- 答题 --> */}
                            <li className="da1">方案1:走着去</li>
                            <li className="da2">方案2:滑雪去</li>
                            <li className="da3">方案3:开车去</li>
                        </div>
                        <img src={a41} alt="圣诞老头" className='slide4_two_sd' />
                        <img src={a42} alt="圣诞铃铛" className='ld animated swing flash delay-2s' />
                        <div className="slide4_error">
                            {/* <!-- 错题显示区 --> */}
                            <div className="slide4_error_one">
                                {/* <!-- 走着去 --> */}
                                <img className="img" src={dong1} alt="" />
                            </div>
                            <div className="slide4_error_two">
                                {/* <!--滑雪去--> */}
                                <img className="img" src={dong2} alt="" />
                            </div>
                            <div className="slide4_error_two_1">
                                {/* <!--滑雪去--> */}
                                <img className="hxdh" src={a43} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- 画面3 场景3 --> */}
                    <div className="slide4_there" id="page3" style={{display:'none'}}>
                        <img className="slide4_a52" src={a52}/>
                        <img className="slide4_a05" src={a05}/>
                    </div>
                </div>
            </div>
      );
    }
  }