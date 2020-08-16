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