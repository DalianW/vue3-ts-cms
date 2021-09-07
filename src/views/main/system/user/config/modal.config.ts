import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      options: [],
      placeholder: '请选择部门'
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      options: [],
      placeholder: '请选择角色'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: '5px 0'
  }
}
