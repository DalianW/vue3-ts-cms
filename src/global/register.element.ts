import type { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElForm,
  ElInput,
  ElCheckbox,
  ElFormItem,
  ElTabPane,
  ElTabs,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus'
const components = [
  ElButton,
  ElForm,
  ElInput,
  ElCheckbox,
  ElFormItem,
  ElTabPane,
  ElTabs,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
