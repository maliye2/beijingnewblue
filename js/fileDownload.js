window.onload=function(){
	document.querySelector("#see_more").onclick=function(e){
		e.preventDefault();
		document.querySelector("#FileBox").style.height="100%";
		document.querySelector(".upList").style.display="block"

	}
	document.querySelector(".upList").onclick=function(){
		//判断此时窗口大小
		let nowBodyWd=document.body.offsetWidth;
		console.log(nowBodyWd);
		if(nowBodyWd<700){
			document.querySelector("#FileBox").style.height="864px";
		}else{
			document.querySelector("#FileBox").style.height="488px";
		}
		this.style.display="none";

	}
}