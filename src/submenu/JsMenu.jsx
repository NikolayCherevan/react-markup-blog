import React from 'react';
import { Menu } from 'antd';
import {
    Link,
    useLocation,
} from "react-router-dom";
import {
    RocketOutlined,
} from '@ant-design/icons';
function HeaderView() {
    const location = useLocation();
    return location.pathname
}
let arrOfJSTheme = [
    {id:"22)", name: "JS basic. DOM"},
    {id:"23)", name: "JQuery, jquery libs, swiper(slick) и другие JS библиотеки"},
]
const menuJS = () => {
    return (
        <div className="nice">
            <Menu theme="dark">
                {arrOfJSTheme.map((item,index)=>{
                     return (<Menu.Item
                     className={`${HeaderView() === `/jsMain/JS${index+1}`
                         ? 'ant-menu-item-selected'
                         : ''}`}
                     key={item.id}
                     icon={< RocketOutlined />}>
                     <Link to={`/jsMain/JS${index+1}`}>{item.id} {item.name}</Link>
                 </Menu.Item>)
                })}
                
            </Menu>
        </div>

    )
}
export default menuJS;