/**
 * Created by chenzhe on 17/5/10.
 */
app.directive('head', function() {
    return {
        replace:true,
        restrict : 'A', /* restrict this directive to elements */
        scope : {
            myId : '@',        //解析普通字符串 @
            name : '@',    //解析数据 =
            myFn : '&'        //函数 &
        },
        template:"<p class='head'>My first directive: <span ng-bind='name'></span><span ng-bind='myId'></span>" +
        "<a href='javascript:;' type='button' class='btn btn-default' ng-bind='id' ng-click='pop()' >默认按钮</a>" +
        "</p>",
        controller:['$scope',function($scope){
            //共享数据存放在这里
            $scope.id = 'this is a man';
            $scope.title='标题uhijhk';
            $scope.content='<b>啊吃吃吃 <span style="margin-left: 50px;">阿斯顿撒点</span></b>';
            alert(1);
            // $(".head [data-toggle='popover']").popover({
            //     html:true,
            //     title:
            // })
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