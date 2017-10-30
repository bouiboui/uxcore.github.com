# Menu

- category: Components
- chinese: 导航菜单
- order: 18
- subtype: Navigation

---

为页面和功能提供导航的菜单列表。

## API

## Props

### Menu

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| mode | 菜单类型 | enum 'vertical', 'horizontal', 'inline' | vertical |
| selectedKeys | 当前选中的菜单项 key 数组 |  |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 |  |  |
| openKeys | 当前展开的菜单项 key 数组 |  |  |
| defaultOpenKeys | 初始展开的菜单项 key 数组 |  |  |
| onSelect | 被选中时调用，参数 {item, key, selectedKeys} 对象 | function | 无 |
| onDeselect | 取消选中时调用，参数 {item, key, selectedKeys} 对象，仅在 multiple 生效 | function | 无 |
| onOpenChange | 菜单打开或关闭时调用，参数 openKeys 数组 | function | 无 |
| onOpen | 同 onOpenChange，为了兼容旧版本保留的方法，将来会移除。参数 {openKeys} 对象 | function | 无 |
| onClose | 同 onOpenChange，为了兼容旧版本保留的方法，将来会移除。参数 {openKeys} 对象 | function | 无 |
| onClick | 点击 menuitem 调用此函数，参数为 {item, key} | function | 无 |
| style | 根节点样式 | object |  |

### Item

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| disabled | 是否禁用 | Boolean | false |
| key | item 的唯一标志 | String |  |

### SubMenu

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 子菜单项值 | String or React.Element | |
| children | (MenuItem or SubMenu)[] | 子菜单的菜单项 | |