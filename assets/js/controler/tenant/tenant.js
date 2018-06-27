/**
 * Created by Raman on 17/6/6.
 */
app.controller("tenant_controller", function ($scope, $http, $service) {
    $scope.modify_tenant = {};
    $scope.dropdown_list = [
        {id: 1, value: '租户状态1'},
        {id: 2, value: '租户状态2'}
    ];
    $scope.tenantList = [
        {
            name: 'xixi',
            "enterpriseName": "enter_co4834",
            "id": "id_46289",
            "mail": "string@mail.cn",
            "mobilePhone": "13433898701",
            "password": "pw_string1"
        },
        {
            name: 'dongxong',
            "enterpriseName": "enter_3467",
            "id": "id_8666",
            "mail": "string@mail.com",
            "mobilePhone": "17777898701",
            "password": "pw_string1"
        }
    ];
    $scope.tenant_list = function () {
        $http({
            method: 'POST',
            url: common.projectPath + '/tat/tenant/list'
            // url: 'http://172.16.0.253:8061/login',
        }).then(function successCallback(response) {
            var res = res.data;
            // 请求成功执行代码
            // for(var key in $scope.tenant_form){
            //     $scope.tenant_form[key]='';
            // }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    $scope.modifyTenant = function (index) {
        console.log(index);
        angular.copy($scope.tenantList[index], $scope.modify_tenant);
    }
});