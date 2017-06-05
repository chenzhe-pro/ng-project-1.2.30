/**
 * Created by chenzhe on 17/5/17.
 */
app.directive('filterForm', function() {
    return {
        replace:true,
        restrict : 'A', /* restrict this directive to elements */
        scope : {
            title:'@',
            dropdown:'@',
            // select:'=select',
            iconClass:'@'
        },
        transclude:true,
        templateUrl:'../../assets/components/common/filter_form.html', //引用该组件的html相对html的路径
        controller:['$scope',function($scope){
            //共享数据存放在这里
            $scope.close_slide=function () {
                $('.filter_form').css({'right':'-450px','box-shadow':'none'});
                $(".content_content .content").css({'padding-right':'0'});
            }
        }],
        link:function(scope,element,attr){

        }
    };
});