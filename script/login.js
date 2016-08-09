/**
 * Created by yujintang on 16/8/4.
 */

function checkpwd() {
    var regExp = /^[\s\S]{6,20}$/;
    if (!regExp.test($("#password").val())) {
        $("#warnShow").html('密码长度必须大于6');
    } else {
        $("#warnShow").html('');
    }
}

function checkrepwd() {
    if ($("#password").val() !== $("#repassword").val()) {
        $("#warnShow").html('两次输入密码不一致');
    } else {
        $("#warnShow").html('');
    }
}

function checkaccount() {
    var regExp = /\w{6,12}$/;
    if (!regExp.test($("#account").val())) {
        $("#warnShow").html('账号不能使用特殊字符,长度在6-12之间');
    } else {
        $("#warnShow").html('');
    }

}