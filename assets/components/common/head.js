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
        '            <div class="dropdown">'+
        '                 <span class="glyphicon glyphicon-user dropdown-toggle"></span>'+
        // '                <img src="../../assets/img/ion-avatar.png" alt="" class="dropdown-toggle user_pic" data-toggle="dropdown"> <b class="caret"></b>'+
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
            $scope.pop=function () {
                // $("a.btn").append("asdasdasdasd")
            }
        }]
    };
});