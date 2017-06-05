/**
 * Created by chenzhe on 17/5/17.
 */
app.directive('contentHead', function() {
    return {
        replace:true,
        restrict : 'A', /* restrict this directive to elements */
        scope : {
            title:'@',
            dropdown:'=',
            iconClass:'@',
            // openFilter:'&'
        },
        transclude:true,
        // template:,
        templateUrl:'../../assets/components/common/content_head.html', //引用该组件的html相对html的路径
        controller:['$scope',function($scope){
            //共享数据存放在这里
            $scope.select=$scope.dropdown[0];
            $scope.change=function (x) {
                $scope.select=x;
                $scope.$emit('change-dropdown', x);
            };
            $scope.openFilter=function () {
                $('.filter_form').css({'right':'0','box-shadow':' 0 2px 4px 0 rgba(0, 0, 0, 0.40)'});
                $(".content_content .content").css({'padding-right':'450px'});
            };
            $scope.repeatFinishFun=function () {

            };
        }],
        link:function(scope,element,attr){

        }
    };
});