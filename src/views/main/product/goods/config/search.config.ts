import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      label: 'id',
      type: 'input',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      rules: [],
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      label: '用户状态',
      type: 'select',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ],
      rules: [],
      placeholder: '请选择用户状态'
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px',
  itemStyle: { padding: '0 5px' }
  // colLayout: { span: 8 }
}
