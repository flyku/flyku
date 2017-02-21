###执行：flyku -g  创建项目

###执行：flyku -s http  开启服务

###执行：flyku -b xxx.html 添加一个模版



###引用路径根目录形式----“/”开头，“/”代表根目录：例如--------
###<link rel="stylesheet" href="/src/styles/base.css" role="debug"/>
### 模板文件中的静态资源引用
m.html 中，css文件的引用，以及img标签引用的图片，都可以使用相对路径，如：
```
<link href="./xxx.css">

<div>
    <img src='./a.jpg'/>
</div>

<div>
    <img src='./<%= fileDir %>/b.jpg'/>
</div>
```
```
以上代码中第一个img标签中使用的图片是相对于m.html的图片，css 文件时相对于html的css文件。 第二个img标签含有变量，此时的路径就是针对于使用m.html的 html 文件的相对路径。

index.js 和 data.js 中，完整的img标签引用的图片或link引用的css资源，如果是相对路径，是相对于 m.html，否则，也是相对于使用该模板的页面。

xxx.css 中，资源引用可以依照 css 文件使用相对路径，如：
```
div{
    background: url(./a.jpg);
}
```
以上代码引用的是相对于xxx.css，和其同级的 a.jpg.




###头部和尾部等公共的html片段，写在pages/header文件夹下

###html文件的后缀名由于cms限制，只能使用.htm不能使用.html！！！(强制）
###防止打包压缩后造成文件无法访问。例如：index.htm   不能使用index.html

###ico图标路径如下所示，不准改变
###<link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />

###可以建立ui下的module文件，也可以不用，根据实际情况而定。多模板形式使用module比较方便。