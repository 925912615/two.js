# two.js

画板，切图

预览地址： https://github.com/925912615/two.js

现有功能雏形：
1.事件控制系统
2.画笔模块
3.目标选中与操作控制
4.放大缩小，平移
5.绘制规则图形能力
6.栈存储，回退恢复
7.文字系统
8.选中功能
9.图片、音频、视频控制
10.表格编辑功能
11.图标编辑功能
12.动画系统
13.PPT操作、预览功能

# 														TWO

## 简介：

我们可以创建一个Canvas封装类，该类封装了Canvas的基本操作方法，如创建画布、设置画布大小等。同时，我们还可以添加一些方法来实现不同的功能。

首先是画笔功能。我们可以添加方法来设置画笔的样式、粗细和颜色，并提供鼠标或触摸事件来实现手绘功能。用户可以自由绘制出想要的图形和线条。

其次是画规则图形功能。我们可以添加方法来绘制常见的图形，如圆形、矩形、三角形等。用户可以通过指定参数来确定图形的大小、位置和样式，从而快速绘制规则图形。

撤销和恢复功能是非常实用的功能。我们可以利用栈来保存每一步的绘制操作，当用户点击撤销时，从栈中取出上一步的操作进行回退，点击恢复时，从栈中取出下一步的操作进行恢复。这样用户可以随时回到之前的绘制状态或重新恢复绘制。

另外，擦除功能也是常用的功能之一。我们可以添加方法来将指定区域的像素设置为透明，实现擦除的效果。用户可以通过选择擦除工具，轻松地擦除之前绘制的内容。

通过封装Canvas，我们可以提供一个简单易用的接口，使用户能够方便地进行绘图操作，并实现各种功能。这样，用户可以根据自己的需求，自由地绘制各种图形和图像，并且可以随时撤销、恢复或擦除之前的绘制内容。

## 开始

```javascript
<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>切图工具</title>
    <style>
        #app canvas {
            transform-origin: 0 0;
            margin: auto;
            box-shadow: 0 0 5px rgba(0, 0, 0, .27), 0 0 20px rgb(108 117 125) inset;
            background-color: #f8f9fa !important;
            overflow: hidden;
        }
    </style>
</head>

<body>
    <!-- 1.引入工具 -->
    <script src="./lib/two.js"></script>
    <!-- 2.提供一个挂载标签 -->
    <div id="app"></div>

</body>
<script>
    // 3.创建场景
    const scene = new Two.drawiBoardBagua({ width: 800, height: 600 })
    //4.获取容器
    const app = document.querySelector('#app')
    //5.向容器添加画板
    app.appendChild(scene.domElement)
    //6.渲染
    scene.render()
</script>

</html>
```

这时候一个画板就成功创建了

#### 注：

如果您操作后界面什么也看不到，请检查下是否设置画布样式，默认是白色的



## 矩形Rect

```
// 矩形
    const rect = scene.Rect({ x: 200, y: 200, width: 100, height: 200 })
```

入参：

| 参数名称 | 参数说明      | 类型   | 是否必填 |
| -------- | ------------- | ------ | -------- |
| x        | 画布x轴坐标点 | number | 是       |
| y        | 画布y轴坐标点 | number | 是       |
| width    | 矩形宽度      | number | 是       |
| height   | 矩形高度      | number | 是       |

## 画笔 pen

```
scene.setModel('textarea')
```

没错这样就能打开一个画笔

