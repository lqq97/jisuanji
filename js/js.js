/**
 * Created by Administrator on 2016/8/11.
 */
var screenObj=document.getElementById('screen');


function inputKey(num){
    //screenObj.value是屏幕的值；
   // num是按下的数；
    if(clearBool==false){

    }
    if(clearBool==true){
        screenObj.value='0';//清屏
        clearBool=false;//清屏结束
    }
   if(screenObj.value=='0'&& num!='.'){//如果屏幕的值已经是0并且再按下的数字在0-9之间；
       screenObj.value=num;//则屏幕的值=按下的数字；（替换作用）
   }
   else {
       if(screenObj.value.indexOf('.')==-1 &&(num=='.')//indexOf中找不到则值是-1；
           ||num!='.')//在屏幕中没有点，且按下的是点，并且输入的数是0-9之间的；
       {
           screenObj.value+=num;//屏幕的值累加；
       }
   }
}
function del(){//每次删除一个数；
    screenObj.value=screenObj.value.substr(0,screenObj.value.length-1);}
 function clearFun(){//全部清零；
 screenObj.value='0'; }

function sqr(){//开方
     screenObj.value=Math.sqrt(screenObj.value);}

var beforeNum,afterNum,signGlobal,clearBool=false,count= 0;//signGlobal符号，clearBool=false是否需要清屏,count=0是符号使用次数；
function operatingFun(sign){
    ++count;
    if(count>1){
        beforeNum=result();
    }

    beforeNum=screenObj.value;//屏幕的值是旧的值；
    signGlobal=sign;//符号进入
    clearBool=true;//  确认要清屏一次进入


}

function result(){
    afterNum=screenObj.value;
    var beforeNew=Number(beforeNum);
    var afterNew=Number(afterNum);

switch (signGlobal){
        case'%':  screenObj.value=beforeNew-afterNew*Math.floor( beforeNew/afterNew) ; break;
        case'+': screenObj.value=beforeNew+afterNew;break;
        case'-': screenObj.value=beforeNew-afterNew;break;
        case'*': screenObj.value=beforeNew*afterNew;break;
        case'/': screenObj.value=beforeNew/afterNew;break;
    }
    clearBool=true;
}






