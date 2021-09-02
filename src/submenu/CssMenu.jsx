import React from 'react';
import { Menu } from 'antd';
import {
    Link,
    useLocation,
} from "react-router-dom";
import {
    BorderlessTableOutlined,
} from '@ant-design/icons';
function HeaderView() {
    const location = useLocation();
    return location.pathname
}
let arrOfCSSTheme = [
    {id:"4)", name: "CSS introduction. Инструменты разработчика в браузере"},
    {id:"5)", name: "Псевдоклассы, псевдоэлементы, комментарии"},
    {id:"6)", name: "Свойства для форматирования текста, background свойства, градиент, тень, прозрачность, цвета. Определение цвета, шрифта, прозрачности и тени в Photoshop"},
    {id:"8,9)", name: "Блочная модель. Поток. Float. Font-awesome, icons(svg,png,fonts), google fonts"},
    {id:"10)", name: "Позиционирование , слои, координаты, z-index, transition, transform, центрирование элемента относительно родителя"},
    {id:"11)", name: "Flex. Верстка layout по макету. Flex-froggy"},
    {id:"13,14)", name: "Adaptive, responsive верстка. Breakpoints. Бургер меню. Mobile first подход."},
    
    {id:"16)", name: "Grid. Поддержка браузерами. Debug tools in Chrome"},
    
    {id:"18)", name: "CSS frameworks. Bootstrap(Uikit, Materialize)"},
    
    {id:"20)", name: "CSS - advanced. CSS фигуры, animation keyframe , iframe. "}
]
const menuCSS = () => {
    return (
        <div className="nice">
            <Menu theme="dark">
                {arrOfCSSTheme.map((item,index)=>{
                     return (<Menu.Item
                     className={`${HeaderView() === `/cssMain/CSS${index+1}`
                         ? 'ant-menu-item-selected'
                         : ''}`}
                     key={item.id}
                     icon={< BorderlessTableOutlined />}>
                     <Link to={`/cssMain/CSS${index+1}`}>{item.id} {item.name}</Link>
                 </Menu.Item>)
                })}
                
            </Menu>
        </div>

    )
}
export default menuCSS;