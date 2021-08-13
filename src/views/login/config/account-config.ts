// 编写规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,11}$/,
      message: '用户名必须是5-11个字母和数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是三位以上的字符和数字',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '手机号是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^1[3|5|6-9][0-9]{9}$/,
      message: '手机号格式出错误',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '手机验证码是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4,6}$/,
      message: '手机验证码格式错误',
      trigger: 'blur'
    }
  ]
}
