/**
 * Created by chenzhe on 17/5/10.
 */
//angular相关公共方法
var serviceFunction=function(){
    this.getTime=function(str){
        var date=str.split(" ")[0],dateArr=date.split("-");
        var time=str.split(" ")[1],timeArr=time.split(":");
        var d=new Date(parseInt(dateArr[0]),parseInt(dateArr[1])-1,parseInt(dateArr[2]),parseInt(timeArr[0]),parseInt(timeArr[1]));
        return d.getTime();
    };
    this.formatDate=function(d,type){
        var date=new Date(d),s;
        if(type=="hour")
        {
            s=date.toLocaleTimeString();
        }
        else if(type=="day")
        {
            s=date.toLocaleDateString();
        }
        else if(type=='month'){
            s=(date.getMonth()+1)+"月";
        }
        else {
            s=(date.getFullYear())+"年";
        }
        return s;
    };
    this.isLogin=function(data){
        //option
        if(typeof(data.isLogin) !== "undefined" && !data.isLogin){
            window.location.href=redirect_url;
            return false;
        }
        else  return true;
    };
    this.formatDate_long=function(time_long){
        var date=new Date(time_long),m=(date.getMonth()+1)<11?"0"+(date.getMonth()+1):(date.getMonth()+1),
            d=date.getDate()<10?"0"+date.getDate():date.getDate(),h=date.getHours()<10?"0"+date.getHours():date.getHours(),
            min=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
        var str=date.getFullYear()+"-"+m+"-"+d+" "+h+":"+min;
        return str;
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
    this.commonAjax=function($http,option){
        var loading=$(".loading"),bg=$(".bg_mask");
        if(option.loading)
        {
            bg.removeClass("none");
            loading.removeClass("none");
        }
        if(option.cache)
        {
            if (cacheData.length > 0) {
                for (var i = 0; i < cacheData.length; i++) {
                    if (cacheData[i].params == option.data && cacheData[i].url == option.url)//找到缓存数据,无需请求直接返回返回缓存数据
                    {
                        option.fun(cacheData[i].data);
                        if (option.loading) {
                            bg.addClass("none");
                            loading.addClass("none");
                        }
                        return;
                    }
                }
            }
        }
        $http({
            method:option.method,
            url: option.url,
            data:option.data,
            cache:true,//get请求才有用
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}//post使用
        }).success(function(data){
            option.fun(data);
            if(option.loading)
            {
                bg.addClass("none");
                loading.addClass("none");
            }
            if(option.cache) {
                cacheData.push({params: option.data, url: option.url, data: data});
            }
        });
    };
    this.returnTop=function(){
        $("body").scrollTop(0);
        document.documentElement.scrollTop=0
    };
    this.queryString=function(p){
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
    this.loginOut=function($http){
        $.cookie("loginName",'',{expires: -1, path:'/'});
        $.cookie("name",'',{expires: -1, path:'/'});
        $.cookie("userId",'',{expires: -1, path:'/'});
        $.cookie("verificationCode",'',{expires: -1, path:'/'});
        //$.cookie("JSESSIONID",'',{expires: -1, path:'/'});
        window.sessionStorage.starttimel='';
        window.sessionStorage.endtimel='';
        window.sessionStorage.day=0;
        window.sessionStorage.keySelect='';
        this.commonAjax($http,{
            method:"post",
            url: searchData+"/login/logout",
            data:
                "",
            fun:function(data){
                if(data=="true")
                {
                    //alert('退出成功！');
                    window.location.href=redirect_url.split("?")[0];
                }
                else
                {
                    common.alert("退出失败，请重试");
                }
            }
        });
    };
    this.userId=quicker.getCookie("userId");
    this.name=decodeURI(quicker.getCookie("name"));
    this.menuList=[];
};


var locationUrl = window.location.host;
var index_searchData=
        //"http://192.168.0.56:8080/search/cralwer";
        "../data/search.json",
    searchData="http://"+locationUrl;
$(function(){ $('input, textarea').placeholder(); });
//分类构建app
var app,url=window.location.href;
if(url.indexOf("login.html")<0)
{
    //页面模块配置
    // if(url.indexOf("index.html")>-1||url.indexOf("competeAnl.html")>-1)
    // {
    //     app=angular.module('app', ['highcharts-ng']);
    // }
    // else if(url.indexOf("dataReport.html")>-1||url.indexOf("contentAnl.html")>-1)
    // {
    //     app=angular.module('app', ['ngSanitize']);
    // }
    // else if(url.indexOf("eventTracking.html")>-1)
    // {
    //     app=angular.module('app', ['ngRoute','ngSanitize']);
    // }
    // else
    // {
    //     app=angular.module('app', []);
    // }
    app=angular.module('app', ['ngSanitize']);
    app.service("$service",serviceFunction);
    app.filter('trustHtml', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    })

}


