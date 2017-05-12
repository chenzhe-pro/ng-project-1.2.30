/**
 * quicker.js created by Zhe Chen on 16/9/2.
 * (c) 2016 Zhe Chen
 * 该脚本应在body外引用
 */
function quickerFunction(){
    this.setCookie=function(objName,objValue,path,objHours){
        var str = objName + "=" + encodeURI (objValue);
        if(objHours > 0){//为时不设定过期时间，浏览器关闭时cookie自动消失
            var date = new Date();
            var ms = objHours*3600*1000;
            date.setTime(date.getTime() + ms);
            str += (";expires=" + date.toGMTString());
        }
        if(path){
            str+=((path) ? (";path=" + path) : "");
        }
        document.cookie = str;
    };
    this.getCookie=function(name) {
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr != null) {
            return decodeURI(arr[2]);
        }
        return null;
    };
    this.delCookie=function(name,path){
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=this.getCookie(name);
        if(cval!=null){
            var str = name + "="+'aaa'+";expires="+exp.toGMTString();
            if(path){
                str+=((path) ? (";path=" + path) : "");
            }else{
                str+=";path=/";
            }
            document.cookie= str;
        }
    };
    this.placeholder=function(nodes,pcolor) {
        if(!("placeholder" in document.createElement("input"))){
            for(i=0;i<nodes.length;i++) {
                var self = nodes[i],
                    placeholder = self.getAttribute('placeholder') || '';
                self.onfocus = function () {
                    if (this.value == this.getAttribute('placeholder')) {
                        this.value = '';
                        this.style.color = "";
                    }
                };
                self.onblur = function () {
                    if (this.value == '') {
                        this.value = this.getAttribute('placeholder');
                        this.style.color = pcolor;
                    }
                };
                self.value = placeholder;
                self.style.color = pcolor;
            }
        }
    };
    this.dateStringToLongTime=function(datestr,type){
        var arr,year,month,dt,hour,minute,longTime,date;
        if(type!==" ")
        {
            arr=datestr.split(" ")[0].split(type);
            year=arr[0],month=arr[1],dt=arr[2];
            hour=datestr.split(" ")[1].split(':')[0];
            minute=datestr.split(" ")[1].split(':')[1];
        }
        date=new Date(year,parseInt(month)-1,dt,hour,minute);
        longTime=date.getTime();
        return longTime;
    };
    this.longTimeToDateString=function(longtime,type){
        var date=new Date(longtime),m=(date.getMonth()+1)<11?"0"+(date.getMonth()+1):(date.getMonth()+1),
            d=date.getDate()<10?"0"+date.getDate():date.getDate(),h=date.getHours()<10?"0"+date.getHours():date.getHours(),
            min=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
        var str=date.getFullYear()+type+m+type+d+" "+h+":"+min;
        return str;
    };
    this.returnTop=function () {
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0
    };
    this.validate=function (v,type) {
        // type:1.空值,2.手机,3.email,4.数字,5,校验密码:数字、字母、下划线6-12位
        var reg;
        switch (type){
            case 1:
                if(!v)
                    return false;
                else return true;
                break;
            case 2:
                reg=/^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
                return reg.test(v);
                break;
            case 3:
                reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                return reg.test(v);
                break;
            case 4:
                reg=/^[0-9]$/;
                return reg.test(v);
                break;
            case 5:
                reg=/^[\w*\_*]{6,12}$/;
                return reg.test(v);
                break;
        }
    };
    this.getParam=function(p){
        var url=window.location.href,search=window.location.search,
            paramsArr=search.replace("?",'').split('&'),params={},result;
        for(var i=0;i<paramsArr.length;i++)
        {
            if(paramsArr[i].indexOf(p)===0)
            {
                result=paramsArr[i].split('=')[1];
                break;
            }
        }
        return result;
    };
    this.windowClientSize=function() {
        var e = window,
            a = 'inner';

        if (!('innerWidth' in window )){
            a = 'client';
            e = document.documentElement || document.body;
        }

        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };

    //以下方法都兼容ie
    //页面的滚动条是否到达底部
    this.isBottom=function (offset) {
        //页面高度=滚动条高度+可视区域高度
        var clientHeight=this.getClientHeight(),scrollTop=this.getScrollTop(),
            pageHeight=this.getScrollHeight();
        if(pageHeight+offset<=clientHeight+scrollTop)
        {
            return true;
        }
    };
    //某个元素的滚动条是否到达底部
    this.isBottomForElement=function (offset,element) {
        //容器页面高度=容器滚动条高度+容器可视区域高度
        var clientHeight=element.offsetHeight,scrollTop=element.scrollTop,
            pageHeight=element.scrollHeight;
        if(pageHeight+offset<=clientHeight+scrollTop)
        {
            return true;
        }
    };
    //某个元素是否到达底部
    this.isMoveToPos=function (element,offset,type,leaveStop) {
        //元素高度=滚动条高度+可视区域高度
        var clientHeight=this.getClientHeight(),scrollTop=this.getScrollTop(),elementHeight;
        if(type=='top') elementHeight=this.offsetTop(element);
        else if(type=="bottom") elementHeight=this.offsetTop(element)+element.offsetHeight;
        else console.error("isMoveToPos type is 'top' or 'bottom'");
        if(elementHeight+offset<=clientHeight+scrollTop)
        {
            return true;
        }
    };
    this.getScrollTop=function ()
    {
        var scrollTop=0;
        if(document.documentElement&&document.documentElement.scrollTop)
        {
            scrollTop=document.documentElement.scrollTop;
        }
        else if(document.body)
        {
            scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    };
    this.getClientHeight=function ()
    {
        var clientHeight=0;
        if(document.body.clientHeight&&document.documentElement.clientHeight)
        {
            clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        else
        {
            clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        return clientHeight;
    };
    /********************
     * 取文档内容实际高度
     *******************/
    this.getScrollHeight=function ()
    {
        return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    };
    /*
     获取元素离页面顶部距离
     */
    this.offsetTop=function ( elements ){
        var top = elements.offsetTop;
        var parent = elements.offsetParent;
        while( parent != null ){
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return top;
    };
    this.offsetLeft=function( elements ){
        var left = elements.offsetLeft;
        var parent = elements.offsetParent;
        while( parent != null ){
            left += parent.offsetLeft;
            parent = parent.offsetParent;
        }
        return parent;
    };
}
var quicker=new quickerFunction();
