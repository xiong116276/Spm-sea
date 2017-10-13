# Spm-sea

seajs用spm-sea打包

# 一环境准备
## 1.1操作系统 
 windows
## 1.2 Nodejs
 Nodejs (当前发布的最高版本)
 到nodejs官网主页下载最新版本的nodejs，默认安装即可。
 安装确认：打开CMD，执行node -v 出现node版本代表安装成功。
## 1.3 SPM
 最新的spm打包工具会将模块打包压缩为传统的js文件格式，不用seajs进行模块加载。若要保持commonjs格式需使用spm-sea工具打包。
 以管理员身份打开CMD 执行 npm install spm -g
 出现warn提示可忽略，出现err根据提示重新进行操作。
 安装过程10分钟左右，安装后运行spm help，出现命令提示代表安装成功。
## 1.4 SPM-SEA
 将模块打包为commonjs格式使用的工具。
 安装命令同spm一样简单。以管理员身份运行CMD执行nmp install spm-sea -g
# 二 配置与执行
## 2.1 SPM构建打包
### 2.1.1 备份文件
为保证开发代码的完整，将需要打包的js文件复制到新建的文件夹中。此处新建spmweb文件夹，将index和modules两个文件夹拷贝到文件夹下。
### 2.1.2 构建配置
在spmweb下建立配置文件package.json (必须这样命名)。Spmweb下的目录结构如下。(Dist为构建过程中自动生成)
{
  "name": "cweb",
  "version": "1.0.0",
  "description": "build with seajs",
  "spm": {
    "main": "./index/main.js"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "http://seajs.org/LICENSE.md"
    }
  ]
}
编辑package.json。配置说明可查看官方文档中文版
### 2.1.3编辑代码适应打包格式
 将所有require()函数中的别名调用改为相对路径调用。
 修改前用的是index.jsp配置的别名调用，如下：
 修改后直接使用相对路径调用，如下:
### 2.1.4 spm构建
  打开CMD切换到spmweb目录下执行spm build
  在spmweb文件下多出了dist文件夹 dist/cweb/1.0.0/index路径下的main.js就是打包压缩出来的文件。将文件改名为main.min.js。新建一个main.js,将         main.min.js内代码格式化后写入main.js方便测试时寻找错误行。
### 2.1.5 测试运行
 将构建生成的dist文件拷贝进项目工程下
 Spm打包后的文件使用的是传统方式，所以不需要引入seajs。将index.jsp页面代码修改只引入socket.js和main.js
 运行查看效果
 Spm打包压缩后的文件使用传统方式，不破坏开发时使用模块化js的特性，保持了可维护性。但运行时失去了seajs异步懒加载的支持。
 测试几个基本功能可用，测试未覆盖所有功能。
## 2.2 SPM-sea 构建打包
### 2.2.1 修改package.json
为了将两次打包的文件区别开，将package.json中的name改为spmsea
### 2.2.2 修改代码适应spm-sea打包
Spm-sea构建时会自动将所有要打包的js包裹为Modules/Transport规范define(id,des,function(a,b,c){})。所以我们项目代码中CMD规范的包裹define(function(a,b,c){})必须注释掉。Require调用依然是相对路径
### 2.2.3 执行spm-sea构建
打开CMD切换到spmweb路径下执行spm-sea
### 2.2.4 测试运行
将打包生成的dist文件夹拷贝到项目工程中，同样建立一个main.js存放格式化的js代码。
修改index.js代码
CMD规范中一个模块就是一个文件，打包后多个模块都在一个文件中，将必须根据id来use入口模块。Seajs中use和require的匹配规则都是以路径为匹配，所以必须保证入口模块的id就是打包后文件的路径。若不是将用别名来统一。
使用spm-sea打包，保留了模块化开发可维护优势的同时，在运行时依然使用seajs异步加载。但需要将对js代码进行整理去掉cmd规范部分，打包出来的代码还需要再次修改才能正常使用。
