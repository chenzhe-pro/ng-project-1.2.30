/**
 * Created by chenzhe on 17/5/10.
 */
app.directive('pageHead', function() {
    return {
        replace:true,
        restrict : 'EA', /* restrict this directive to elements */
        scope : {
            myId : '@',        //解析普通字符串 @
            name : '@',    //解析数据 =
            myFn : '&'        //函数 &
        },
        transclude:true,
        template:
        '<div class="head clearfix">'+
        '        <img src="../../assets/img/logo.png" alt="" class="logo">'+
        '        <div class="right_">'+
        '            <span class="user_name">admin</span>'+
            '<i class="fa fa-question animated" aria-hidden="true"></i>'+
            '<i class="fa fa-cog animated" aria-hidden="true"></i>'+
            '<i class="fa fa-bell animated" aria-hidden="true"></i>'+
        '            <div class="dropdown">'+
        '                 <i class="fa fa-user-circle-o dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>'+
        '                <ul class="dropdown-menu">'+
        '                    <li><a href="#">个人中心</a></li>'+
        '                    <li class="divider"></li>'+
        '                    <li><a href="#">退出</a></li>'+
        '                </ul>'+
        '            </div>'+
        '        </div>'+
        '    </div>',
        // templateUrl:'../../assets/components/common/head.html', //引用该组件的html相对html的路径
        controller:['$scope',function($scope){
            //共享数据存放在这里
            $scope.id = 'this is a man';
            $scope.title='标题uhijhk';
            $scope.content='<b>啊吃吃吃 <span style="margin-left: 50px;">阿斯顿撒点</span></b>';
            $(".head .btn").popover({
                html:true,
                title:$scope.title,
                content:$scope.content
            });
            $('.fa-question').hover(function () {
                $(this).addClass("pulse")
            },function () {
                $(this).removeClass("pulse")
            });
            $('.fa-cog').hover(function () {
                $(this).addClass("rotateIn")
            },function () {
                $(this).removeClass("rotateIn")
            });
            $('.fa-bell').hover(function () {
                $(this).addClass("swing")
            },function () {
                $(this).removeClass("swing")
            });
            $scope.pop=function () {
                // $("a.btn").append("asdasdasdasd")
            }
        }]
    };
});