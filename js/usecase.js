window.onload=function(){
    //点击事件
    let num=0;
    let cishu=0;
    let cishu2=1;
    let other=1;
    document.querySelector(".imgLeft").onclick=function(){
        //获取两个imgbox 的自定义属性值
        if(cishu==0){
            document.getElementsByClassName("CaseImgBox")[num].className="CaseImgBox activeImg";
            document.getElementsByClassName("CaseImgBox")[other].className="CaseImgBox"
            num=1;
            cishu=1;
            other=0;
        }else if(cishu==1){
            document.getElementsByClassName("CaseImgBox")[num].className="CaseImgBox activeImg";
            document.getElementsByClassName("CaseImgBox")[other].className="CaseImgBox";
            num=0;
            cishu=0;
            other=1;
        }
    }
    document.querySelector(".imgRight").onclick=function(){
        if(cishu2==1){
            document.getElementsByClassName("CaseImgBox")[num].className="CaseImgBox activeImg";
            document.getElementsByClassName("CaseImgBox")[other].className="CaseImgBox";
            num=0;
            cishu2=0;
            other=1;
        }else if(cishu2==0){
            document.getElementsByClassName("CaseImgBox")[num].className="CaseImgBox activeImg";
            document.getElementsByClassName("CaseImgBox")[other].className="CaseImgBox"
            num=1;
            cishu2=1;
            other=0;
        }
    }
}