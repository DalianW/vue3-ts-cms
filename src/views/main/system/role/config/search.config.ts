import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'intro',
      label: '权限介绍',
      type: 'input',
      rules: [],
      placeholder: '请输入角色名称'
    },
    {
      field: 'createTime',
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
