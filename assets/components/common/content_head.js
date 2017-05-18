/**
 * Created by chenzhe on 17/5/17.
 */
app.directive('contentHead', function() {
    return {
        replace:true,
        restrict : 'A', /* restrict this directive to elements */
        scope : {
            title:'@',
            dropdown:'@',
            // select:'=select',
            iconClass:'@',
            // btnText:'@',
            // btnFn:'&'
        },
        transclude:true,
        // template:
        // '<div class="content_head clearfix">'+
        // '    <div class="content_head_title" ng-class="{dropdown_:dropdown.length>0}">'+
        // '        <div class="icon_area" ng-class="{mt10:dropdown.length>0}"><span class="glyphicon glyphicon-th"></span></div>'+
        // '        <div class="text_title">'+
        // '            <p>商品管理</p>'+
        // '            <div class="dropdown">'+
        // '                <span data-toggle="dropdown" id="dLabel">{{select.value}} <span class="caret"></span></span>'+
        // '                <ul class="dropdown-menu" aria-labelledby="dLabel">'+
        // '                    <li ng-repeat="x in dropdown_list" repeat-finish="repeatFinishFun" ng-click="change(x)"><a href="javascript:;" id="x.id">{{x.value}}</a></li>'+
        // '                </ul>'+
        // '            </div>'+
        // '        </div>'+
        // '        <div class="fr">'+
        // '            <a type="button" class="btn btn-primary btn-sm mt10" href="javascript:;">筛选条件</a>'+
        // '        </div>'+
        // '    </div>'+
        // '</div>',
        templateUrl:'../../assets/components/common/content_head.html', //引用该组件的html相对html的路径
        controller:['$scope',function($scope){
            //共享数据存放在这里
            $scope.initJQ=function () {
                // $('.text_title .dropdown').on('hide.bs.dropdown', function (e) {
                //     // do something…
                //     $scope.$apply(function () {
                //         $scope.select=$scope.dropdown_list[0];
                //     })
                // })
            };
            $scope.dropdown_list=[
                {id:1,value:'全部订单'},
                {id:2,value:'全部订单2'},
                {id:3,value:'已支付'}
            ];
            $scope.select=$scope.dropdown_list[0];
            $scope.change=function (x) {
                $scope.select=x;
            };
            $scope.repeatFinishFun=function () {

            };
            $scope.repeatFinishFun1=function () {
                // $scope.initJQ();
                console.log(222)
            };

            // $scope.$on('repeatFinish',function () {
            //     $scope.initJQ();
            // })
        }],
        link:function(scope,element,attr){

        }
    };
});