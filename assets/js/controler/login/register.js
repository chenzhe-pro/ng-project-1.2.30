/**
 * Created by limin on 2017/6/5.
 */
app.controller("register_controller",function($scope,$http,$service){
    $scope.form={
        username:'',
        password:'',
        phone:'',
        mail:''
    }
    $scope.submit=function (isValid) {
        var data={
            enterpriseName:$scope.form.username ,
            mail:$scope.form.mail,
            password:$scope.form.password,
            mobilePhone:$scope.form.phone
        };

        if(isValid){
            $http({
                method: 'POST',
                url: common.projectPath+'register',
                // url: 'http://172.16.0.253:8061/register',
                data:data
            }).then(function successCallback(response) {
                // 请求成功执行代码
            }, function errorCallback(response) {
                // 请求失败执行代码
            });
        }



    }
});
