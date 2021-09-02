import React from 'react';
import { Menu } from 'antd';
import {
    Link,
    useLocation,
} from "react-router-dom";
import {
    Html5Outlined,
} from '@ant-design/icons';
function HeaderView() {
    const location = useLocation();
    return location.pathname
}
let arrOfHTMLTheme = [
    {id:"1)", name: `Этапы разработки web проекта. Верстальщик vs Frontend-developer. Рендеринг страниц. Инструменты разработки. Кроссбраузерность, валидность верстки. Браузеры. 
    базовая HTML - структура. Дерево документа`},
    {id:"2, 3)", name: "HTML теги, типы тегов, layout веб страницы"},
    {id:"12)", name: "HTML - формы"},
]

const menuHtml = () => {
    return (
        <Menu theme="dark">
            {arrOfHTMLTheme.map((item, index) => {
                return (<Menu.Item
                    className={`${HeaderView() === `/htmlMain/HTML${index + 1}`
                        ? 'ant-menu-item-selected'
                        : ''}`}
                    key={item.id}
                    icon={< Html5Outlined />}>
                    <Link to={`/htmlMain/HTML${index + 1}`}>{item.id} {item.name}</Link>
                </Menu.Item>)
            })}
        </Menu> 
    )
}
export default menuHtml;