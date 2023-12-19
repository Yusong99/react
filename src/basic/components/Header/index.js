import './index.css'
import {useState} from "react";

// 组件的首字母记得大写，这样才能识别
const Foot = () => {
    // 状态管理
    // 不要直接修改当前状态的值，应该创建新值
    // const [count, setCount] = useState(10);
    const [arr, setCount] = useState([1,2,3])
    return <span
    onClick={()=>setCount([...arr, 4])}
    >{arr}</span>
}

const Header = () => {
    return <div>
        <Foot></Foot>
        Header</div>
}

export default Header
