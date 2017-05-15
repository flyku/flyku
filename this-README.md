# # # 关于javascript闭包中的this对象、、、
我们知道，
this对象是运行时基于函数的执行环境绑定的： 在全局函数中， this等于window，
而当函数被作为某个对象的方法调用时， this等于那个对象。《 Javascript高级程序设计》
在下面的例子中， 理解闭包中的this对象。、、、
# # # 复制代码、、、
var name = "The Window";
var object = {
    name: "My object",
    getNameFunc: function() {
        return function() {
            return this.name;
        };
    }
}
alert(object.getNameFunc()()); // "The Window"
、、、
# # # 复制代码
# # # 为什么最后的结果是 "The Window"
# # # 而不是object里面的name "My object"
# # # 呢？

# # # 首先， 要理解函数作为函数调用和函数作为方法调用。

# # # 我们把最后的一句拆成两个步骤执行：、、、
var first = object.getNameFunc();
var second = first();、、、
其中第一步， 获得的first为返回的匿名函数， 此时的getNameFunc() 作为object的方法调用，
如果在getNameFunc() 中使用this， 此时的this指向的是object对象。

第二部， 调用first函数， 可以很清楚的发现， 此时调用first函数，
first函数没有在对象中调用， 因此是作为函数调用的， 是在全局作用域下，
因此first函数中的this指向的是window。

再看下面这句话：
为什么匿名函数没有取得其包含作用域（ 外部作用域） 的this对象呢？
每个函数被调用时， 其活动对象都会自动取得两个特殊变量： this和arguments。
内部函数在搜索这两个变量时， 只会搜索到其活动对象为止， 因此永远不可能直接访问外部函数中的这两个变量。《 Javascript高级程序设计》
那么， 如何获得外部作用域中的this呢？

可以把外部作用域中的this保存在闭包可以访问到的变量里。 如下：

复制代码、、、
var name = "The Window";
var object = {
    name: "My object",
    getNameFunc: function() {
        var that = this; // 将getNameFunc()的this保存在that变量中
        var age = 15;
        return function() {
            return that.name;
        };
    }
}
alert(object.getNameFunc()()); // "My object"
、、、
复制代码
其中， getNameFunc() 执行时的活动对象有： that / age / 匿名函数， 在执行匿名函数时， 同时引用了getNameFunc() 中的活动对象， 因此可以获取that和age的值。 但是由于是在全局环境中调用的匿名函数， 因此匿名函数内部的this还是指向window。