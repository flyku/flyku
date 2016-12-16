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
        "base": "http://localhost:9527",
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
            "port": "9527"  //请保证修改好此端口后，修改 base 的端口号
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
            {source: "./src/images", target: "./"}
        ],
        urlMapping: [
            {
                url: /(.*)/,
                target: "/pages{$1}"
            }
        ],
        /**
         * 资源上传到静态服务器后的根路径
         */
        "serverUrl": "http://mat1.gtimg.com/chinanba/web",
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
        htmlWaitTime: 800,
        /**
         * 服务器的一些固定配置
         */
        url: {
            /**
             * 服务器根地址
             */
            server: 'http://server.example.com',
            /**
             * 创建文件夹服务
             */
            newDir: '/xxx/newDir',
            /**
             * 上传文件服务
             */
            upload: 'xxx/upload',
            /**
             * 上传html文件服务
             */
            htmlfileserver: 'xxx/uploadhtml',
            /**
             * 修改已有旧文件的服务
             */
            htmlfileupdate: '/xxx/edit',
            /**
             * 增加新文件的服务
             */
            htmlfileadd: '/xxx/save',
            /**
             * 搜索文件列表的服务
             */
            htmlfilelist: '/xxx/search?',
            /**
             * 登陆到cms的地址
             */
            login: 'http://example.com/login?'
        },
        /**
         * cms频道名称
         */
        channelName: '名称',
        /**
         * cms频道id
         */
        channelId: 'test',
        /**
         * 是否覆盖上传
         */
        overwrite: true, //是否覆盖
        /**
         *  静态资源文件过滤
         *  正则表达式
         *  正则匹配对象是整个文件路径，如：'F:\\xxxx\\xxx\\xxx-cms\\xxx\\v001\\a.js'
         */
        staticResourcesFileFilter: [/\.htm/, /\.html/],
        /**
         * 静态资源映射到服务器的规则
         * key 是 本地资源文件夹地址, 请使用绝对路径或者命令行执行位置的相对路径
         * value 是 远程服务器静态资源文件夹地址,第一个字符不能是 /，后果自负
         * 另外，value还会决定 _toserver 时静态资源的地址。
         * 静态资源地址生成规则： serverUrl + channelId + {staticResourcesMapping.{value}}
         */
        staticResourcesMapping: {
            './__publish__': 'XX/'
        },
        /**
         * html 上传修改用字段，决定html会上传到哪个分类下，类似html上传的根路径，对应 __publish__ 目录
         * 对于 __publish__ 文件夹中的html文件，它们的父级文件夹是catalog的名字
         * 注意在pages中创建文件夹时，不可有重名的。
         */
        catalog: '',
        /**
         * 安全上传模式，会提示你已经存在同名文件，这时候，不能更新文件
         */
        htmlSafeAdd: false,
        /**
         * 此字段由遍历程序自动生成，请勿手动配置，无效
         * { 'filename':'filecode'
         *  }
         */
        __htmls: {},
        /**
         * 此字段由遍历程序自动生成，请勿手动配置，无效
         * { 'serverurl/sharepage/':
            { '.': [ 'F:\\xxxx\\xxx\\xxx\\xxx\\xxx\\xx.js',
                     '... ],
               V01: [ 'F:\\xxx\\xxx\\xxx\\xx.js' ]
            }
           }
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
