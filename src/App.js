import React, { Component } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import './App.css';
import Slide1 from './components/swiper1'
import Slide2 from './components/swiper2'
import Slide3 from './components/swiper3'
import Slide4 from './components/swiper4'
import Slide5 from './components/swiper5'
import Slide6 from './components/swiper6'
import Slide7 from './components/swiper7'
import Slide8 from './components/swiper8'

class App extends Component {
  componentDidMount() {
    // TODO: 配音没加
    // $(".scene-01").click(function () {
    //   $("#sidio").html('<source src="music/music-01.mp3" type="video/mp4"></source>');
    //   setTimeout(function () {
    //       $("#sidio")[0].load();
    //   }, 10)
    //   $("#sidio")[0].load();
  // })

  var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      on: {
          slideChangeTransitionEnd: function () {
              switch (this.activeIndex) {
                  case 0:
                      $("#sidio").html('<source src="music/music-01.mp3" type="video/mp4"></source>');
                      $("#sidio")[0].load();
                      break;
                  case 1:
                      // 第二页的动画
                      $("#sidio").html('<source src="music/music-02.mp3" type="video/mp4"></source>');
                      $("#sidio")[0].load();
                      $(".scene-02title").text("糟糕，雾太大了")
                      var scene2Img = $(".scene-02Img");
                      $(".scene-02title").addClass("css3dh")
                      $(".scene-02title").addClass("animated")
                      $(".scene-02title").addClass("bounceInDown")
                      scene2Img.animate({
                          height: '80%'
                      }, 2000)
                      setTimeout(function () {
                          $(".scene-02title").text("向上滑动")
                      }, 2000);
                      break;
                  case 2:
                      $("#sidio").html('<audio id="sidio" autoplay="preload"><source src="music/music-03.mp3" type="video/mp4"></source>不支持播放器哦 </audio>');
                      $("#sidio")[0].load();
                      // 隐藏文字，显示选项
                      setTimeout(function () {
                          $(".slide4_one").css("display", "none");
                          $(".slide4_two").css("display", "block");
                          setTimeout(function () {
                              $(".slide4_two_text").css("display", "none");
                          }, 1000)
                          setTimeout(function () {
                              $(".slide4_two_wt").css("display", "block");
                              $("#sidio").html(
                                  '<source src="music/music-04.mp3" type="video/mp4"></source>'
                              );
                              $("#sidio")[0].load();
                          }, 2000)
                      }, 2000)
                      // 点击第一个的动画
                      $(".da1").click(function () {
                          $(".ld").css("display", "none");
                          $(".slide4_two_sd").attr("src", "images/a-44.png");
                          setTimeout(function () {
                              $(".slide4_error").css("display", "block");
                              $(".slide4_error_one").css("display", "block");
                          }, 500)
                          setTimeout(function () {
                              $(".slide4_error").css("display", "none");
                              $(".slide4_error_one").css("display", "none");
                              $(".ld").css("display", "block");
                              $(".slide4_two_sd").attr("src", "images/a-41.png");
                          }, 2000)
                      })
                      // 点击第二个的动画
                      $(".da2").click(function () {
                          $(".slide4_error").css("display", "block");
                          $(".slide4_error_two_1").css("display", "block");
                          $(".hxdh").animate({
                              top: '20rem',
                              width: '5rem',
                              height: "10rem"
                          }, 2000);
                          setTimeout(function () {
                              // $(".slide4_error").css("display", "none");
                              // $(".slide4_error_two").css("display", "none");
                              $(".slide4_error_two_1").css("display", "none");
                              $(".slide4_error_two").css("display", "block");
                              setTimeout(function () {
                                  $(".slide4_error").css("display", "none");
                                  $(".slide4_error_two").css("display",
                                      "none");
                                  $(".hxdh").css("width", "7rem");
                                  $(".hxdh").css("height", "14rem");
                                  $(".hxdh").css("top", "top");
                              }, 2000)
                          }, 2000)
                      })
                      $(".da3").click(function () {
                          $("#page3").css("display", "block");
                          $(".slide4_a05").animate({
                            top: '21rem'
                        }, 2000);
                      })
                      break;
                  case 3:
                      // TODO
                      break;
                  case 4:
                      // TODO
                      break;
                  case 5:
                      // TODO
                      break;
                  case 6:
                      // TODO
                      break;
                  case 7:
                      // TODO
                      break;
                    
              }
          },
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });

  window.onload = function () {
      $('.scene-01').trigger("click");
      $('.scene-01').trigger("click");
      var img16 = $(".img-16");
      // 新增首页修改
      var img1 = $(".img-01")
      var img3 = $(".img-03")
      var img4 = $(".img-04")
      var img5 = $(".img-05")
      var img15 = $(".img-15")
      setTimeout(() => {
          img1.show(300)
          setTimeout(() => {
              img1.hide()
              img4.show(300)
              setTimeout(() => {
                  img4.hide()
                  img3.show(300)
                  setTimeout(() => {
                      img3.hide()
                      img5.show(300)
                      setTimeout(() => {
                          img5.hide()
                          img15.show(300)
                      }, 800)
                  }, 800)
              }, 800)
          }, 800)
      }, 800)
      // 新增首页修改结束
      img16.animate({
          top: '34rem'
      }, 4000);
      img16.animate({
          left: '-1rem',
          top: '44rem',
      }, 2000);
      img16.animate({
          display: 'none',
      }, 1000);
      var img17 = $(".img-17");
      img17.animate({
          top: '34rem'
      }, 2000);
      img17.animate({
          left: '-1rem',
          top: '44rem',
          display: 'none'
      }, 2000);
  }
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
        </div>
      </div>
    );
  }
}

export default App;
