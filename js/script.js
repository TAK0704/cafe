// Whole-script strict mode syntax
"use strict";

$(document).ready(function(){
            $('.slider').bxSlider({
                auto: true,
                pause: 5000,
            });
        });
 
 $(function(){
  $('.box p').addClass('move');
  $(window).scroll(function(){
    $(".box").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass('move');
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
});

/*
――――――――――――――――――――
歩行アニメーション
――――――――――――――――――――
*/
var anim_tgt = document.getElementById("anim_tgt");
 
//変数宣言と初期化
var x_henka = 0;
var y_henka = 0;
var houkou = 1;
 
anim_tgt.onclick = function() {
    setInterval("idou(1,1,anim_tgt)", 5);
}
 
//▼idou関数
//・第１引数でx方向の移動量
//・第２引数でy方向の移動量
//・第３引数で移動対象要素
//を定義しています。
function idou(x, y, anim_tgt){
    x_henka += x*houkou;
    //y_henka += y*houkou;
     
    anim_tgt.style.transform = 'translate(' + x_henka + 'px, ' + y_henka + 'px)';
    anim_tgt.style.transform += 'scale(' + -1*houkou + ', 1)';
 
    if( x_henka == 300 || x_henka == -1){
        houkou = houkou * -1;
    }
}
 
//――――――――――――――――――――
//デバック用
//――――――――――――――――――――
var debug1 = document.getElementById("debug1");
var debug2 = document.getElementById("debug2");
 
setInterval(debugtes, 1);
 
function debugtes(){
    debug1.innerHTML = "　●x:" + houkou ;
    debug2.innerHTML = "　●x_henka:" + x_henka ;
}
