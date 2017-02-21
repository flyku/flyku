/**
 * @describe: 所有相关配置
 * 以下路径配置时需要以 kConfig 的父文件夹（项目根路径）路径为基础，不得使用相对路径
 */
(function (window, undefined) {
    var allConfigs = {
        /**
         *  commonJS 和 nodejs 都可以加载此模块
         * -------- begin -----------*/
        /**
         *  请保证修改好此端口后，修改 http.port
         *  base路径映射到的目标文件夹必须是kConfig的直接上级文件夹，
         *  即项目根目录，否则合并会出错
         */
        "base": "http://localhost:9329",
        /**
         *  附加的根路径，此数组中的路径会自动映射到静态服务器的根目录
         */
        "additionRoot": [],
        "alias": {
            "jquery": "lib/jquery",
            "jsonselect": "lib/jsonselect",
            "tpHelper": "lib/tpHelper",
            "global": "src/scripts/ui/global"
        },
        "paths": {
            "utils": "src/scripts/utils",
            "ui": "src/scripts/ui",
            "template": "src/template"
        },
        "debug": true,
        /* --------end-----------*/

        /**
         * nodejs build 文件时需要的配置文件
         * -------- begin -----------*/
        "template": "src/template", // 项目中待编译模版的路径
        "buildTemplate": "kConfig/moduleTemplate", //编译模版需要的 js 模块模版
        "output": "output", //输出路径
        "cssOutput": "src/styles/business.css",
        "header": "__publish__/header",
        /* --------end-----------*/

        /**
         * 打包模块, 可设置多个
         * path 是要打包文件的入口模块路径
         * name 是输出文件名称
         * -------- begin -----------*/
        "packModules": [
            {"path": "src/scripts/index", "name": "business"}
        ],
        /* --------end-----------*/

        /**
         * server port
         * -------- begin -----------*/
        "http": {
            "port": "9329"  //请保证修改好此端口后，修改 base 的端口号
        },
        "weinre": {
            "port": "10089"
        },
        /**
         * 控制使用发布命令时，筛选出符合以下规则的页面进行发布
         */
        htmlPublishFilter :[/\.htm$|\.html$/],
        /**
         * 需要拷贝到发布目录的静态资源，目前只支持文件夹
         */
        "staticResource": [
            {source: "./icons", target: "./"},
            {source: "./src/images", target: "./"},
            {source: "./plugins", target: "./"}
        ],
        urlMapping: [
            {
                url: /(.*)/,
                target: "/pages{$1}"
            }
        ],
        /**
         * cleancss 压缩的一些配置，不写会启用默认配置
         * 见官方文档：https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-programmatically
         */
        cssmin: {
            advanced: false,
            aggressiveMerging: false,
            compatibility: 'ie7'
        },
        htmlmin: {
             minifyJS: true,
             minifyCSS: true
            // collapseWhitespace: false,
            // conservativeCollapse: false,
            // preserveLineBreaks: false,
            // removeRedundantAttributes: true,
            // removeStyleLinkTypeAttributes: true
        },
        __htmls: {},
        /**
         * 此字段由遍历程序自动生成，请勿手动配置，无效
         */
        __files: {}
        /* --------end-----------*/
    };

    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        module.exports = allConfigs;
    } else if (typeof define === 'function') {
        define(function () {
            return allConfigs;
        });
    }
})(this);
