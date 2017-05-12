/**
 * Created by chenzhe on 17/5/11.
 */
app.controller("head_controller",function($scope,$http){
    $scope.name='chenzhe哈撒打算打算';
    $(".tooltip_btn").tooltip({
        html:true,
        title:"撒打算打算的撒打算的撒",
        content:'a112222'
    });
})