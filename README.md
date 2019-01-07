# vue-cli-plugin-commit(git commit style guides)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 目的：
  1. 统一团队 Git Commit 提交格式，便于代码review，版本发布以及日志自动化生成等
  2. 统一团队的 Git WorkFlow，包括分支使用，tag，issue规范等
  3. 通过插件的形式，前端Vue项目一键集成git commit message 提交规范

## Angular的git commit 的基本规范

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
### 所有的type类型：

> type代表某次提交的类型，例如是新增功能（feature）或者修复一个bug

* feat： 新增功能
* fix: 修复bug
* docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
* style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
* refactor: 代码重构，没有加新功能或者修复 bug
* perf: 优化相关，比如提升性能、体验
* test: 测试用例，包括单元测试、集成测试等
* chore: 改变构建流程、或者增加依赖库、工具等
* revert: 回滚到上一个版本
* ci: 更改了CI配置文件或者脚本（Travis, Gitlab-CI）

### 格式要求

```
# type:类型
# scope: 本次提交的作用范围，某个模块或者文件
# 标题行9(subject)：50个字符以内，描述主要变更内容，尽量以动词开头（如：添加，修改，更新等）
#
# 主体内容(body)：更详细的说明文本，建议72个字符以内。 需要描述的信息包括:
#
# * 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等
# * 他如何解决这个问题? 具体描述解决问题的步骤
# * 是否存在副作用、风险? 
#
# 尾部(footer)：如果需要的化可以添加一个链接到issue地址或者其它文档，或者关闭某个issue。
```
Git分支与版本发布规范
> 待补充

## 实施方案

### 工具
  * [commitlint](https://github.com/marionebl/commitlint)
  * [commitizen](https://github.com/commitizen/cz-cli)
  * [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
  * [husky](https://github.com/typicode/husky)
  * [编辑器插件支持](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)

### 接入流程

接入参考项目为[vue-cli-plugin-commit](https://github.com/haitaodesign/vue-cli-plugin-commit)，具体操作如下：
* 第一步，安装所需要的依赖

```
yarn add @commitlint/cli @commitlint/config-angular @commitlint/config-conventional commitizen cz-conventional-changelog husky conventional-changelog-cli -D
```

* 新增scripts

```
"scripts": {
  "commit": "git-cz",
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
},
```

* 新增husky