/*
 * @Author: lihaitao 
 * @Date: 2019-02-25 17:35:17 
 * @Last Modified by: lihaitao
 * @Last Modified time: 2019-03-09 15:29:08
 */
module.exports = (api, option) => {
  // 模板渲染
  if (option.replace) {
    api.render('./template')
    // package.json修改
    api.extendPackage({
      devDependencies: {
        "@commitlint/cli": "^7.2.1",
        "@commitlint/config-angular": "^7.1.2",
        "@commitlint/config-conventional": "^7.1.2",
        "commitizen": "^3.0.5",
        "cz-conventional-changelog": "2.1.0",
        "husky": "^1.3.1",
        "conventional-changelog-cli": "^2.0.11"
      },
      scripts: {
        "commit": "git-cz"
      },
      // git 钩子
      husky: {
        "hooks": {
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
      },
      config: {
        "commitizen": {
          "path": "cz-conventional-changelog"
        }
      }
    })
    console.log('添加moor-commitlint插件成功！')
  } else {
    console.log('添加moor-commitlint插件失败！')
  }
}
