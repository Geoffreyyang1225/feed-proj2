# AfterShip Feed 演示站

本项目为纯静态前端页面，用于演示 AfterShip Feed 的前端呈现效果：
- 合并展示（Consolidated Listing）：同品多商家报价整合对比
- 捆绑（Bundle）：组合销售以提升客单与转化

## 本地运行

直接用浏览器打开 `index.html` 即可。

或使用本地服务器（推荐）：

```bash
python3 -m http.server 5173
# 打开 http://localhost:5173/
```

## 交互
- 顶部导航或右上角下拉切换视图
- “模拟库存波动”每 1.5s 刷新库存
- “紧凑卡片样式”切换卡片密度

## 结构
- `index.html`：页面结构
- `styles.css`：样式与主题
- `script.js`：示例数据与渲染逻辑

## 说明
- 未接入真实数据接口，仅作 UI/交互效果演示
