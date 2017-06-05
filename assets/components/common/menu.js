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
        '                <a class="navbar-brand" href="#"><div class="slds-icon-waffle_container" data-aura-rendered-by="28:0;p"><div class="slds-icon-waffle" data-aura-rendered-by="29:0;p"><div class="slds-r1" data-aura-rendered-by="30:0;p"></div><div class="slds-r2" data-aura-rendered-by="31:0;p"></div><div class="slds-r3" data-aura-rendered-by="32:0;p"></div><div class="slds-r4" data-aura-rendered-by="33:0;p"></div><div class="slds-r5" data-aura-rendered-by="34:0;p"></div><div class="slds-r6" data-aura-rendered-by="35:0;p"></div><div class="slds-r7" data-aura-rendered-by="36:0;p"></div><div class="slds-r8" data-aura-rendered-by="37:0;p"></div><div class="slds-r9" data-aura-rendered-by="38:0;p"></div></div></div> </a>'+
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
        '                    <li class="">'+
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