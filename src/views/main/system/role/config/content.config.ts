export const contentTableConfig = {
  propList: [
    {
      prop: 'name',
      label: '真实姓名',
      minWidth: '100',
      slotName: 'name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      slotName: 'intro'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新事件',
      minWidth: '100',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showIndexColum: true,
  showSelectColum: true,
  title: '角色列表'
}
