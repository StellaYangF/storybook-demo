# Storybook Design UI Library

## Procedure

### Init a React Project base on typescript

```bash
create-react-app storybook_demo --template typescript
```

### storybook cli install

进入到刚刚创建的 storybook-demo 项目中，执行命令

```bash
npx -p @storybook/cli sb init --type react_scripts 
```

安装storybook addons 插件
```bash
npm i @storybook/addon-viewport @storybook/addon-knobs @storybook/addon-docs @storybook/addon-a11y @storybook/addon-storysource -D
```

### 编写 Button 组件

#### 需求分析

* **颜色**：字体、背景、边框等颜色
* **大小**：控制 button 及里面文字大小
* **点击事件**：若传递 href 则渲染 a 标签
* **loading** 状态
* **disabled** 状态

## 什么是CDD？

CDD(Component-Driven Development) 是组件驱动开发。

模块化是软件开发的原则，随着现在 react 等框架兴起，模块化通过组件形式在软件应用程序设计中存在。这样催生了一种新的模块化形式，称为 CDD，即组件驱动开发。通过了解 CDD 以及如何利用 CDD ，可以使用组件来驱动应用程序的开发，从而受益于这种新的模块化带来的优势。

原子设计其实是 CDD 的一种实现模式，CDD 的好处有很多：

* **更快的开发**：将开发分为组件，使您可以使用重点狭窄的 API 构建模块化的部件。这意味着构建每个组件并学习的时间会更快。
* **维护更简单**：当您需要修改或更新应用程序的一部分时，可以扩展或更新组件，而不必重构应用程序的较大部分。可以将其视为对特定器官而不是整个身体系统进行手术。
* **更好的可重用性**：通过分离关注点，组件可以被重用和扩展以构建多个应用程序，而不必一遍又一遍地重写它们 。
* **更好的TDD**：构建模块化组件时，执行单元测试以验证每个组件的重点功能变得容易得多。大型系统可以更容易地进行测试，因为它更容易理解和区分系统各部分的职责。
* **较短的学习曲线**：当开发人员必须投入新项目时，学习和理解已定义组件的结构比投入整个应用程序要容易得多。
* **更好的系统建模**：当系统由模块化组件组成时，更易于掌握，理解和操作。

## Bugs

* **Cannot find module 'react' or its corresponding type declarations.** 报错主要由于依赖包没有完全安装，手动删除 node_modules 文件夹，执行 `npm install` 重新安装即可。