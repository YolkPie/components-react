## PAIMAI UI 组件库

### 安装之前

该项目使用了[travis-ci](https://travis-ci.org/)进行了[预览页面](https://yolkpie.github.io/components-react/)的自动构建，因此代码需要同步到[github](https://github.com/YolkPie/components-react)。

代码克隆到本地之后，需要先增加github源：

> git remote add github https://github.com/YolkPie/components-react.git

当<b>master分支更新</b>之后，在执行了`git push`将代码推送到git.jd.com之后，再执行`git push github`将更新同步给github，接下来travis会自动构建预览页。

> 预览页地址：https://yolkpie.github.io/components-react/

### 安装与启动

#### 安装

> npm install

#### 启动

> npm run storybook

#### 发布npm包

> npm run publish

#### 组件库关联

> npm run link

#### 编译npm包

> npm run bundle:all

#### 编译预览页面

> npm run build-storybook
