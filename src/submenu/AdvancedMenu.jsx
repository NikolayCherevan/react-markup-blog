import React from 'react';
import { Menu } from 'antd';
import {
    Link,
    useLocation,
} from "react-router-dom";
import {
    RiseOutlined,
} from '@ant-design/icons';
function HeaderView() {
    const location = useLocation();
    return location.pathname
}
let arrOfAdvancedTheme = [
    {id:"7)", name: "Терминал. GIT, github, инициализация репозитория локально, загрузка проекта на гит. Встроенные стили браузера. CSS reset"},
    {id:"15)", name: "Best practices в мире верстки. Правильное название классов, id. БЭМ. Семантика. Emmet плагин"},
    {id:"17)", name: "Node modules, npm, Webpack (Gulp, Grunt). SASS, LESS, SCSS."},
    {id:"19)", name: "Верстка “под ключ”. Pixel perfect extension, валидация верстки, кроссбраузерность, адаптивность."},
]
const menuAdvanced= () => {
    return (
        <div className="nice">
            <Menu theme="dark">
                {arrOfAdvancedTheme.map((item,index)=>{
                     return (<Menu.Item
                     className={`${HeaderView() === `/advancedMain/Advanced${index+1}`
                         ? 'ant-menu-item-selected'
                         : ''}`}
                     key={item.id}
                     icon={< RiseOutlined />}>
                     <Link to={`/advancedMain/Advanced${index+1}`}>{item.id} {item.name}</Link>
                 </Menu.Item>)
                })}
                
            </Menu>
        </div>

    )
}
export default menuAdvanced;