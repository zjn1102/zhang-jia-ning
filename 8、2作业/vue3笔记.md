## vue3中的响应式原理

#### vue2的响应式

##### 实现原理：

​	1对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持   getter  setter****）

​	2数组类型：通过重写更新数组的一系列方法来实现拦截（就是说用数组的方法进行包裹，更新数组或输出一个新的数组）

##### 存在问题：

​	1新增属性、删除属性、界面不会更新（如果想要完成更新需要使用set（）方法实现）

​	2直接通过下标修改数组，界面不会自动更新（目前vue版本疑似已解决这个问题，通过下标也可以进行修改）

#### vue3的响应式

##### 实现原理：  

​	1const定义一个常量，使用new Proxy实例化一个Proxy对象（参数值，{}对象）对象中同样存在get和set。

​	2get和set中存在两个参数分别是target，propName

## reactive与ref的对比

#### 从定义的角度对比

1ref用来定义基本数据类型

2.reactive用来定义：对象或数组类型数据

3ref 也可以定义对象或数组，它内部会自动通过reactive转为代理对象

#### 从原理的角度对比

1ref通过Object.defineProperty（）的get和set来实现响应式

2.reactive通过Proxy来实现响应式，并通过Reflect操作原对象内部数据

#### 从使用角度对比

1.ref定义的数据：操作数据需要添加.value，读取数据时，模板中直接读取不需要添加.value。

2.reactive定义的数据，操作和读取都不需要添加.value

## setup的注意点

#### 执行时机

在钩子函数beforecreate之前就会被调用，所以并没有this对象的产生，无法在setup中使用this

#### setup的参数

##### 1props 

值为对象，包含组建外部传递过来的值，或者组件内部声明或接收过得属性

##### 2context:上下文对象

​	attrs:值为对象，所有外部传递过来的值，在没有从props中定义或声明的话，都存在于这个对象中。相当于VUE2中的this.$attrs

​	slots:值为收到的插槽内容，相当于this.$slots

​	emit：分发自定义事件的函数，相当于this.$emit