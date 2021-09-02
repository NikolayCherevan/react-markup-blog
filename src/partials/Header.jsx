
import { Layout, Menu} from 'antd';
import {
    Link,
    useLocation,
} from "react-router-dom";

const { Header } = Layout;
function HeaderView() {
    const location = useLocation();
    return location.pathname;
}
export default function HeaderMain() {
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0
            }}>
     
 <Menu theme="dark" mode="horizontal" collapsed="false">
                <Menu.Item
                    className={`${HeaderView() === '/htmlMain' || HeaderView().includes('/htmlMain')
                        ? 'ant-menu-item-selected'
                        : 'not-selected'}`}
                    key="1">
                    <Link to='/htmlMain'>HTML</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${HeaderView() === '/cssMain' || HeaderView().includes('/cssMain')
                        ? 'ant-menu-item-selected'
                        : 'not-selected'}`}
                    key="2">
                    <Link to='/cssMain'>CSS</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${HeaderView() === '/advancedMain' || HeaderView().includes('/advancedMain')
                        ? 'ant-menu-item-selected'
                        : 'not-selected'}`}
                    key="2">
                    <Link to='/advancedMain'>Advanced</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${HeaderView() === '/jsMain' || HeaderView().includes('/jsMain')
                        ? 'ant-menu-item-selected'
                        : 'not-selected'}`}
                    key="2">
                    <Link to='/jsMain'>JS</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}