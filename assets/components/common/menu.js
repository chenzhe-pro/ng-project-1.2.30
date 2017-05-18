/**
 * Created by chenzhe on 17/5/12.
 */
app.directive('pageMenu', function() {
    return {
        replace:true,
        restrict : 'AE', /* restrict this directive to elements */
        scope : {
            myId : '@',        //解析普通字符串 @
            name : '@',    //解析数据 =
            myFn : '&'        //函数 &
        },
        template:
        '<div class="navbar navbar-default" role="navigation">'+
        '        <div class="container-fluid">'+
        '            <div class="navbar-header">'+
        '                <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-th"></span></a>'+
        '            </div>'+
        '            <div>'+
        '                <!--向左对齐-->'+
        '                <ul class="nav navbar-nav navbar-left">'+
        '                    <li class="dropdown active">'+
        '                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">'+
        '                            基础资料'+
        '                            <b class="caret"></b>'+
        '                        </a>'+
        '                        <ul class="dropdown-menu">'+
        '                            <li ><a href="#">jmeter</a></li>'+
        '                            <li><a href="#">EJB</a></li>'+
        '                            <li class="active"><a href="#">Jasper Report</a></li>'+
        '                            <li class="divider"></li>'+
        '                            <li><a href="#">分离的链接</a></li>'+
        '                            <li class="divider"></li>'+
        '                            <li><a href="#">另一个分离的链接</a></li>'+
        '                        </ul>'+
        '                    </li>'+
        '                    <li class="">'+
        '                        <a href="#">系统管理</a>'+
        '                    </li>'+
        '                    <li class="active">'+
        '                        <a href="#">商品管理</a>'+
        '                    </li>'+
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