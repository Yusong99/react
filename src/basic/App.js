
// 所有组件的首字母都需要大写否则会报错
const App = () => {
    const click = () => {
        console.log(123)
    }
    return (
        <div onClick={click}>123</div>
    )
}

export default App
