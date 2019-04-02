window.onload=function(){

	let mySwiper = new Swiper ('.swiper-container', {
		loop: true, // 循环模式选项;
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
	})
	//返回顶端
	document.getElementsByClassName("pageUp")[0].onclick=function(e){
		//获取此前的高度
		let nowBodyTop=window.document.body.scrollTop
	}
	
	document.getElementById("rightExeTopBox").onclick=function(){
		document.querySelector(".Ask").style.display="block"
		document.querySelector(".bodyShow").style.display="block";
	}
	document.querySelector(".bodyShow").onclick=function(){
		this.style.display="none";
		document.querySelector(".Ask").style.display="none"
	}



	window.onresize=function(){
		 let nowBodyWd=document.body.offsetWidth;
		if(nowBodyWd<700){
			document.querySelector("#FileBox").style.height="864px";
		}else{
			document.querySelector("#FileBox").style.height="488px";
		}
	};
	
	//以下代码必须放到最后
	//使用案例页面轮播图js
	
}