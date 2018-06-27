/**
 * Created by limin on 2017/6/5.
 */
app.controller("login_controller",function($scope,$http,$service){
    $scope.form={
        username:'1',
        password:'',
        phone:'',
        mail:''
    }
    $scope.submit=function () {

        // $('#defaultForm').bootstrapValidator({
        //     message: 'This value is not valid',
        //     live: 'disabled',
        //     feedbackIcons: {
        //         valid: 'glyphicon glyphicon-ok',
        //         invalid: 'glyphicon glyphicon-remove',
        //         validating: 'glyphicon glyphicon-refresh'
        //     },
        //     submitHandler: function(validator, form, submitButton) {
        //         // validator is the BootstrapValidator instance
        //         // form is the jQuery object present the current form
        //         form.find('.alert').html('Thanks for signing up. Now you can sign in as ' + validator.getFieldElements('username').val()).show();
        //     },
        //     fields: {
        //         username: {
        //             message: 'The username is not valid',
        //             validators: {
        //                 notEmpty: {
        //                     message: 'The username is required and can\'t be empty'
        //                 },
        //                 stringLength: {
        //                     min: 6,
        //                     max: 30,
        //                     message: 'The username must be more than 6 and less than 30 characters long'
        //                 },
        //                 regexp: {
        //                     regexp: /^[a-zA-Z0-9_\.]+$/,
        //                     message: 'The username can only consist of alphabetical, number, dot and underscore'
        //                 },
        //             }
        //         },
        //         email: {
        //             validators: {
        //                 notEmpty: {
        //                     message: '邮箱不能为空'
        //                 },
        //                 emailAddress: {
        //                     message: '请填写正确的邮箱地址'
        //                 }
        //             }
        //         },
        //         phone: {
        //             validators: {
        //                 notEmpty: {
        //                     message: '手机号码不能为空'
        //                 },
        //                 stringLength: {
        //                     min: 11,
        //                     max: 11,
        //                     message: '请输入11位手机号码'
        //                 },
        //                 regexp: {
        //                     regexp: /^1[3|5|8]{1}[0-9]{9}$/,
        //                     message: '请输入正确的手机号码'
        //                 }
        //             }
        //         },
        //         password: {
        //             validators: {
        //                 notEmpty: {
        //                     message: 'The password is required and can\'t be empty'
        //                 }
        //             }
        //         }
        //     },
        //
        // });
        // $('#defaultForm').data('bootstrapValidator').validate();
        // console.log($("#defaultForm").data('bootstrapValidator').isValid())
        // if($("#defaultForm").data('bootstrapValidator').isValid()){
        //     var data={
        //         enterpriseName:$scope.form.username ,
        //         mail:$scope.form.mail,
        //         password:$scope.form.password,
        //         mobilePhone:$scope.form.phone
        //     };
        //     $http({
        //         method: 'POST',
        //         url: common.projectPath+'login',
        //         // url: 'http://172.16.0.253:8061/login',
        //         data:data
        //     }).then(function successCallback(response) {
        //         $("#defaultForm").bootstrapValidator('resetForm', true);
        //         // 请求成功执行代码
        //         // for(var key in $scope.form){
        //         //     $scope.form[key]='';
        //         // }
        //     }, function errorCallback(response) {
        //         // 请求失败执行代码
        //     });
        // }


        // $scope.nameValidate=quicker.validate($scope.form.username,1);


    }
});
