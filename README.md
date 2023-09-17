# Bug反馈

[Github Issues](https://github.com/liulei6577/vscode-osp-gwt-form/issues)
# 如何使用

插件仅在`javascript`语言模式下生效，适用于GWT版表单，如果已经安装React版本请禁用React版本。

由于OSP是在web端进行代码编写，复制粘贴到VSCODE后并不能明确的知道变量的类型，
所以插件设计为根据变量名称来区分对象类型，为了更好的使用该插件，请遵循以下变量命名规则：

- EFRowSet类型的变量，请以rowset(不区分大小写)结尾
- EFDataSet类型的变量，请以dataset(不区分大小写)结尾
- modelContainer命名为MC
- FormModel一般命名为FormModel1

# Postfix Completion

支持类似于Jetbrains系列软件的Postfix Completion

目前已经支持：

- var

# 代码片段

| keywords      | snippet                                                       |
|---------------|---------------------------------------------------------------|
| mcg           | `MC.getValue($1, $2)`                                         |
| mcs           | `MC.setValue($1, $2)`                                         |
| newpo         | `let PO = new JParamObject();`                                |
| newrs         | `$wnd.EFRowSet()`                                             |
| vnewrs        | `var $1 = $wnd.EFRowSet();`                                   |
| newds         | `$wnd.EFDataSet()`                                            |
| vnewds        | `var $1 = $wnd.EFDataSet();`                                  |
| UUID          | `UUID()`                                                      |
| uuid          | `uuid()`                                                      |
| FM            | `FormModel$1`                                                 |
| fmbrs         | `var billRowSet = FormModel$1.getBillDataSet().getRowSet(0);` |
| fct           | `$wnd.getCurrentTime($1)`                                     |
| fctyyyyMMdd   | `$wnd.getCurrentTime("yyyyMMdd")`                             |
| fctyyyyMM     | `$wnd.getCurrentTime("yyyyMM")`                               |
| rt0           | `return returnObject.setReturnString("0");`                   |
| rt1           | `return returnObject.setReturnString("1");`                   |
| fords         |  [Ref](#fords)                                                |
| salert        |  [Ref](#salert)                                               |
| sconfirm      |  [Ref](#sconfirm)                                             |

## fords

```javascript
for (var $1 = 0; $1 < $2.getRowCount(); $1++) {
    var $3 = $2.getRowSet($1);
}
```

## salert
```javascript
$wnd.showAlert("$1", "${2|系统提示|}", "${3|MESSAGE_WARN,MESSAGE_ERROR,MESSAGE_NORMAL,MESSAGE_QUESTION|}", "${4|确定|}", ${5|null,FunctionComp|})
```

## sconfirm
```javascript
$wnd.showConfirm("$1", "${2|系统提示|}", "${3|MESSAGE_WARN,MESSAGE_ERROR,MESSAGE_NORMAL,MESSAGE_QUESTION|}", "${4|确定|}", "${5|取消|}", ${6|null,FunctionComp|}, ${7|null,FunctionComp|})
```

# 添砖加瓦

## 环境准备

1. 拉取项目代码

2. 安装nodejs

3. 安装vsce

    ```shell
    npm install --global @vscode/vsce
    ```
4. 安装项目所需依赖包
    ```shell
    npm install
    ```

## 运行

按`F5`运行，成功后会打开用于调试的vscode程序窗口。

## 打包

```shell
npm run package
```

打包完成后会得到[项目名称]+[版本号]+.vsix的文件