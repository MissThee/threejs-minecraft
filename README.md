# threejs minecraft
预览地址 [http://mc.missthee.com/](http://mc.missthee.com/)

## 简介
three.js + vite + ts 构建的网页端仿我的世界demo

## 本地运行
  + 开发
    1. clone项目到本地
    2. 项目根目录执行 `npm install`
    3. 项目根目录执行 `npm run dev`，根据控制台提示访问网页
  + 打包 与 预览打包文件
    1. 项目根目录执行 `npm run build`（现打包后文件位于`/docs`仅为方便部署白github page）
    1. 架设本地服务预览打包后文件效果 `npm run server`，根据控制台提示访问网页


## 操作提示：
  + `视角` 点击页面进入鼠标控制视角模式，按 Esc 解除鼠标锁定
  + `移动` W A S D 或 上 下 左 右
  + `跳` 空格
  + `跑` 双击 W 并按住
  + `飞行` 跳起来在空中时再按跳；飞行时空格垂直升高； shift 垂直降低
  + `结束飞行` 飞行时双击空格，或使用 shift 键降低高度知道踩到砖块
  + `消除方块` 左键
  + `添加方块` 右键
  + `切换方块` 滑轮，中间下部有一个旋转的小方块，表示当前正在用的方块（做成 mc 那样的装备栏还有背包界面太麻烦了，懒。。。）
  + `掉出去了` 会掉回来的。掉到-500 的地方，位置会重置
