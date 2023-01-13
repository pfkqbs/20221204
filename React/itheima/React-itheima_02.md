
## `React` 组件进阶：

### 组件通讯介绍

- <font color="red">组件</font> 是独立且封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据。为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通。这个过程就是 <font color="red">组件通讯</font>。

### 组件的 `props`
- 组件时封闭的，要接收外部数据应该通过 `props` 来实现
- **`props` 的作用**： <font color="red">接收传递给组件的数据</font>
- **传递数据**: <font color="red">给组件标签添加属性</font>
- **接收数据**： 函数组件通过 <font color="red">参数 `props`</font> 接收数据，类组件通过 <font color="red">`this.props`</font> 接收数据
- **特点**：
    - 可以给组件传递**任意类型**的数据
    - <font color="red">`props`</font> 是 <font color="red">只读</font> 的对象，只能读取属性的值，无法修改对象
    - **注意**：使用类组件时，如果写了构造函数，<font color="red">应该将 `props` 传递给`super()`</font>  ,否则，无法在构造函数中获取到`props`
    ```js
    class Hello extends React.Conponent{
        constructor(props){
            //推荐将props 传递给父类构造函数
            super(props)
            console.log( this.props )
        }
        render(){
            console.log('render', this.props )
            return ( <div>接收到的数据： {this.props.age}</div>)
        }
    }
    ```


- 函数组件代码：
```js
<Hello 
    name="jack" 
    age={19} 
    colors={["red","green","blue"] }
    fn={() =>console.log('这是一个函数')} 
    tag={<p>这是一个p标签</p>}/>

function Hello (props){
    console.log(props)
    return (
        <div>接收到的数据： {props.name}</div>
        <div>接收到的数据： {props.tag}</div>
        <div>接收到的数据： {props.fn}</div>
    )
}
```
- 类式组件代码：
```js
class Hello extends React.Component {
    render (){
        console.log(this.props)
        return (
            <div>接收到的数据： {this.props.age}</div>
        )
    }
}
<Hello name="jack" age={19} />
```

### 组件通讯的三种方式

#### 组件之间的通讯分为3种：

- 1、父组件 --> 子组件
- 2、子组件 --> 父组件
- 3、兄弟组件

#### 父组件传递数据给子组件

- 1、父组件提供传递的 `state` 数据
- 2、给子组件标签添加属性，值为 `state` 中的数据
- 3、子组件中通过 `props` 接收父组件中传递的数据
```js
/* 父组件 */
class Parent extends React.Component {
    state = {lastName:"老王"}
    render(){
        return(
            <div>
                传递数据给子组件：<Child name={this.state.lastName } />
            </div>
        )
    }
}
```
```js
//子组件
function Child(props){
    return (
        <div>
            子组件接收到数据：{props.name}
        </div>
    )
}
```
```js
/* 父组件 */
class Parent extends React.Component {
    state = {lastName:"老王"}
    render(){
        return(
            <div>
                传递数据给子组件：<Child name={this.state.lastName } />
            </div>
        )
    }
}
//子组件
function Child(props){
    return (
        <div>
            子组件接收到数据：{props.name}
        </div>
    )
}
reactDOM.render(<Parent />,document.getElementById('root'))
```

#### 子组件传递数据给父组件
- 思路：利用后调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数
    - 1、父组件提供一个回调函数（用于接收数据）
    - 2、将该函数作为属性的值，传递给子组件
    - 3、子组件通过 `props` 调用回调函数
    - 4、将子组件的数据作为参数传递给回调函数
    - **注意**：回调函数中 `this` 指向问题
    ```js
    //父组件
    class Parent extends React.Component{

        //1  父组件提供一个回调函数（用于接收数据）
        getChildMsg = (msg) =>{
            console.log("接收带子组件的数据",msg)

            this.setState({
                parentMsg:data
            })
        }
        render (){
            return (
                <div>
                    父组件： { this.state.parentMsg }
                    /* 2  将该函数作为属性的值，传递给子组件 */
                    子组件：<Child getMsg={this.getChildMsg} />
                </div>
            )
        }
    }
    ```
    ```js
    //子组件
    class Child extends React.Component{

        state = {childMsg:"React"}

        handleClick = () => {

            //- 3、子组件通过 `props` 调用回调函数
            //- 4、将子组件的数据作为参数传递给回调函数  
            this.props.getMsg( this.state.childMsg )
        }
        render (){
            return (
                <div>
                    <button onClick={this.handleClick}> 点我，给父组件传递数据 </button>
                </div>
            )
        }
    }
    ```
#### 兄弟组件
- 将**共享状态**提升到最近的公共父组件中，由**公共父组件** 管理这个状态
- **思想**： **状态提升**
- 公共父组件职责：
    - 1 提供共享状态 
    - 2.提供操作共享状态的方法
- 要通讯的子组件只需通过 **`props`** 接收状态或操作状态的方法
```js
class Counter extends React.Component {
    //提供共享状态
    state = {
        count:0
    }
    //提供修改数据的方法
    onIncrement = () =>{
        this.setState({
            count:this.state.count +1
        })
    }
    render(){
        return (
            <div>
                <Child1 count={this.state.count}/>
                <Child2 onIncrement={this.onIncrement}/>
            </div>
        )
    }
}
const Child1 = props =>{
    return <h1>计数器：{props.count}</h1>
}
const Child2 = props =>{
    return <button onClick={()=>props.onIncrement()}>点击 +1 </button>
}
ReactDOM.render(<Counter />,document.getElementById('root'))
```

### `Context`
- 如果两个组件时远方亲戚（比如，嵌套组件） 可以使用 `Context` 实现组件通讯
- `Context` 提供了两个组件： `Provider` ， `Consumer`
- `Provider` 组件： 用来 提供 数据
- `Consumer` 组件： 用来 消费 数据

> - <App />
>    - <Node />
>        - <SubNode />
>            - <Child />

- 思考： `App` 组件要船体数据给 `Child` 组件，该如何处理？
    - 处理方式：使用 `props` 一层一层组件往下传递（繁琐）
    - <font color="red">作用：跨组件传递数据</font>（比如： 主题、语言等）
        - 使用步骤：
            - 1、调用 `React.createContext()` 创建 `Provider` (提供数据) 和 `Consumer` (消费数据) 两个组件
            ```const { Provider，Consumer } = React.createContext()```
            - 2、使用 `Provider` 组件作为父节点
            ```js
            <Provider>
                <div className="App">
                    <Child1 />
                </div>
            </Provider>
            ```
            - 3、设置 `value` 属性，表示要传递的数据
            ```< Provider value="pink"/>```
            - 4、调用 `Consumer` 组件接收数据
            ```js
            <Consumer>
                { data => <span>data 参数表示接收到的数据 -- {data}</span>}
            </Consumer>
            ```

            ```js
            // 1--调用 `React.createContext()` 创建 `Provider` (提供数据) 和 `Consumer` (消费数据) 两个组件
            const { Provider，Consumer } = React.createContext()

            class App extends React.Component {
                render(){
                    return (
                        /*   2--使用 `Provider` 组件作为父节点 */
                        /*   3--设置 `value` 属性，表示要传递的数据 */
                        <Provider value="pink">
                            <div className="App">
                                <Node />
                            </div>
                        </Provider>
                    )
                }
            }
            const Node = props =>{
                return (
                    <div class="node">
                        <SubNode />
                    </div>
                )
            }
            const SubNode = props =>{
                return (
                    <div class="subnode">
                        <Child />
                    </div>
                )
            }
            const Child = props =>{
                return (
                    <div class="child">
                        /* 4--调用 `Consumer` 组件接收数据 */
                         <Consumer>
                         { data => <span>data 参数表示接收到的数据 -- {data}</span>}
                         </Consumer>
                    </div>
                )
            }
            ReactDOM.render(<App />,document.getElementById('root'))
            ```

### `props` 深入
#### `children` 属性
- `children` 属性： 表示组件标签的子节点。当组件标签有子节点时，`props` 就会有该属性
- `children` 属性与普通的 `props` 一样，值可以是任意值 （文本、`React` 元素、组件、甚至是函数）
```js
function Hello(props){
    return (
        <div>
            组件的子节点： { props.children }
        </div>
    )
}
<Hello>我是子节点</Hello>
```
看代码演示： `children` 为文本节点
```js
import React from 'react'
import ReactDOM from 'react-dom'
const App = props =>{
    console.log( props )
    return (
        <div>
            <h1>组件标签的子节点：</h1>

            {/* 获取子节点 */}
            {props.children}
        </div>
    )
}
ReactDOM.render(<App>我是子节点</App>,document.getElementById('root'))
```
看代码演示： `children` 也可以为`React` 元素、组件、甚至是函数
```js
import React from 'react'
import ReactDOM from 'react-dom'
const Test = () => <button>我是button 组件</button>
const App = props =>{
    console.log( props )
    // props.children()
    return (
        <div>
            <h1>组件标签的子节点：</h1>

            {/* 获取子节点 */}
            {props.children}
        </div>
    )
}
ReactDOM.render(<App>
    {/* <p>我是子节点，p标签</p> */}
    <Test />
</App>,document.getElementById('root'))
```

#### `props` 校验
- 对于组件来说， `props` 是外来的，无法保证组件使用者传入什么格式的数据
```js
import React from 'react'
import ReactDOM from 'react-dom'

const App = props =>{
    const arr = props.colors
    const lis = arr.map( (item,index) =><li></li>)

    return (
        <ul>
            {lis}
        </ul>
    )
}
ReactDOM.render(<App />,document.getElementById('root'))
```
### 组件的声明周期

### `render-props` 和高阶组件



