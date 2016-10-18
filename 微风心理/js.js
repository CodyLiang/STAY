function changeTitle(idName){
var btn = document.getElementById(idName);
btn.style.border="2px solid rgb(230,168,9)";
}
function recoverTitle(idName){
  var btn = document.getElementById(idName);
  btn.style.border="2px solid #fff";
  btn.style.position="relative";
  btn.style.zIndex="auto";
}
function changeTitle1(idName){
var btn = document.getElementById(idName);
btn.style.border="2px solid #01A8A0";
btn.style.borderBottom="2px solid #fff";
btn.style.position="relative";
btn.style.zIndex="10";
}
function changeTitle2(idName){
var btn = document.getElementById(idName);
btn.style.border="2px solid rgb(231, 13, 111)";
btn.style.borderBottom="2px solid #fff";
btn.style.position="relative";
btn.style.zIndex="10";
}
function changeTitle3(idName){
var btn = document.getElementById(idName);
btn.style.border="2px solid #3a7ff5";
btn.style.borderBottom="2px solid #fff";
btn.style.position="relative";
btn.style.zIndex="10";
}

function change(dName){
  var aa=document.getElementById(dName);

  setTimeout(function () {
    aa.innerHTML=  '<img src="images/dimg.png" style="margin-top:0">';

  }, 10);

}
function recover(dName){
    var aa=document.getElementById(dName);
    setTimeout(function () {

      aa.innerHTML='<img src="images/doctor_img_1.jpg"><p>何医生</p><div class="star_bg"></div><p>4.86分</p><p>上海市第一人民医院</p><p>已有<span>1990</span>人咨询</p>';

    }, 10);
}
function recover1(dName){
    var aa=document.getElementById(dName);
    setTimeout(function () {
      console.log("out");
      aa.innerHTML='<img src="images/doctor_img_2.jpg"><p>何医生</p><div class="star_bg"></div><p>4.86分</p><p>上海市第一人民医院</p><p>已有<span>1990</span>人咨询</p>';

    }, 10);
}
function recover2(dName){
    var aa=document.getElementById(dName);
    setTimeout(function () {
      console.log("out");
      aa.innerHTML='<img src="images/doctor_img_3.jpg"><p>何医生</p><div class="star_bg"></div><p>4.86分</p><p>上海市第一人民医院</p><p>已有<span>1990</span>人咨询</p>';

    }, 10);
}
function recover3(dName){
    var aa=document.getElementById(dName);
    setTimeout(function () {
      console.log("out");
      aa.innerHTML='<img src="images/doctor_img_4.jpg"><p>何医生</p><div class="star_bg"></div><p>4.86分</p><p>上海市第一人民医院</p><p>已有<span>1990</span>人咨询</p>';

    }, 10);
}

function lunbo(img_num){
var arr= new Array();
arr[1]="images/roll_img3.jpg";
arr[2]="images/roll_img2.jpg";
arr[3]="images/roll_img1.jpg";
var num=parseInt(img_num);
idsrc=document.getElementById("roll_img_1");
 idsrc.src=arr[num];

 }



// setInterval(turnpic,3000);
//  return function turnpic(){
//    idsrc=document.getElementById("roll_img_1");
//    if(num==arr.length-1)
//         num=1;
//    else
//         num+=1;
//    idsrc.src=arr[num];
// }
// }
 arr= new Array();
arr[1]="images/roll_img3.jpg";
arr[2]="images/roll_img2.jpg";
arr[3]="images/roll_img1.jpg";
num=1;
myInterval =setInterval(turnpic,3000);
 function turnpic(){
   idsrc=document.getElementById("roll_img_1");
   if(num==arr.length-1)
        num=1;
   else
        num+=1;
   idsrc.src=arr[num];}


function changeBackground(){
  var aa = document.getElementById("abc_1");
  aa.style.display="block";
    aa.style.background="yellow";
}
function changeBackground1(){
  var aa=document.getElementById("abc_1");
  aa.style.background="red";
  aa.style.display="block";
}
function changeBackground2(){
  var aa=document.getElementById("abc_1");
  aa.style.background="green";
  aa.style.display="block";
}
function recoverBackground(){
  var aa=document.getElementById("abc_1");
  aa.style.display="none";
}

function changeBackground_1(){
  var aa = document.getElementById("abc_2");
  aa.style.display="block";
    aa.style.background="yellow";
}
function changeBackground1_1(){
  var aa=document.getElementById("abc_2");
  aa.style.background="red";
  aa.style.display="block";
}
function changeBackground2_1(){
  var aa=document.getElementById("abc_2");
  aa.style.background="green";
  aa.style.display="block";
}
function recoverBackground_1(){
  var aa=document.getElementById("abc_2");
  aa.style.display="none";
}
function changeBackground3_1(){
  var aa=document.getElementById("abc_2");
  aa.style.background="blue";
  aa.style.display="block";
}


function changefooter(){
  var aa=document.getElementById("foot_ul");
  aa.innerHTML="<pre>网页链接 网页链接1</pre>";
}
function changefooter1(){
  var aa=document.getElementById("foot_ul");
  aa.innerHTML="<pre>健康网     婚恋心理     心理咨询     精神咨询     中国心理健康网     职场心理学     平安健康心理     心理学     深圳网     医药卫生网     儿童自闭症     育儿网 精神咨询     中国心理健康网</pre>";
}
