// 获取验证码按钮点击判断手机号是否注册并ajax响应服务端发送验证码
function sendMessage() {
  var phone = document.getElementById('phone');
  var tel = phone.value;
  $.ajax({
    url: "https://user.niuguwang.com/api/checkMobile.ashx",
    type: "POST",
    dataType: "json",
    data: {
      mobile: tel,
    },
    success: function (data) {
      if (data.result == 1) {
        if (data.code != 0) {
          sms = 29;
          timeType = '注册失败';
        }
        else {
          sms = 21;
          timeType = '注册成功';
        }
      }
    },
    error: function () {

    }
  })
}