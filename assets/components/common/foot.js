/**
 * Created by chenzhe on 17/5/10.
 */
app.directive('test', function() {
    return {
        replace:true,
        restrict : 'A', /* restrict this directive to elements */
        scope : {
            myId : '@',        //解析普通字符串 @
            name : '=',    //解析数据 =
            myFn : '&'        //函数 &
        },
        template:"<div>My first directive: <span ng-bind='name'></span><p ng-bind='id'></p></div>",
        controller:['$scope',function($scope){
            //共享数据存放在这里
            $scope.id = 'this is a man';
            alert(1);
        }]
    };
});