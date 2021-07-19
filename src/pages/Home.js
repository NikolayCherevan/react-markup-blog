import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import {DesktopOutlined, PieChartOutlined, Html5Outlined} from '@ant-design/icons';
const {Header, Content, Footer, Sider} = Layout;

function usePageViews() {
    let location = useLocation();
    return location.pathname

}
function NotFoundPage() {
    return (
        <div>
            oh that page not found sorry
        </div>
    );
}
function IntroHTML() {
    return (
        <div>
            Введение в HTML
        </div>
    );
}
function CSS() {
    return (
        <div>
            css
        </div>
    );
}
function MoreCSS() {

    return (
        <div>
            MoreCSS
        </div>
    );
}
function HTML() {
    return (
        <div>
            HTML
        </div>
    );
}
function MoreHTML() {

    return (
        <div>
            MoreHTML
        </div>
    );
}
function RenderMenuHTML() {
    return (
        <div>
            <Menu theme="dark">
                <Menu.Item
                    className={`${usePageViews() == '/introHTML'
                    ? 'ant-menu-item-selected'
                    : ''}`}
                    key="1"
                    icon={< Html5Outlined />}>
                    <Link to='/introHTML'>Введение</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${usePageViews() == '/html'
                    ? 'ant-menu-item-selected'
                    : ''}`}
                    key="2"
                    icon={< Html5Outlined />}>
                    <Link to='/html'>htmlFirst</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${usePageViews() == '/moreHTML'
                    ? 'ant-menu-item-selected'
                    : ''}`}
                    key="3"
                    icon={< Html5Outlined />}>
                    <Link to='/moreHTML'>htmlSecond</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
function RenderMenuCSS() {
    return (
        <div>
            <Menu theme="dark">
                <Menu.Item
                    className={`${usePageViews() == '/introCSS'
                    ? 'ant-menu-item-selected'
                    : ''}`}
                    key="1"
                    icon={< Html5Outlined />}>
                    <Link to='/introCSS'>Введение</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${usePageViews() == '/css'
                    ? 'ant-menu-item-selected'
                    : ''}`}
                    key="2"
                    icon={< Html5Outlined />}>
                    <Link to='/css'>cssFirst</Link>
                </Menu.Item>
                <Menu.Item
                    className={`${usePageViews() == '/morecss'
                    ? 'ant-menu-item-selected'
                    : ''}`}
                    key="3"
                    icon={< Html5Outlined />}>
                    <Link to='/morecss'>cssSecond</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
function SiderDemo() {
    return (
        <Router>
            <Layout style={{
                minHeight: '100vh'
            }}>
                <Sider collapsible>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to='/htmlMain'>HTML</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/cssMain'>CSS</Link>
                        </Menu.Item>

                    </Menu>
                        <HashRouter>< RenderMenuHTML />
                            <Switch>
                                <Route exact path='/htmlMain' child={< RenderMenuHTML />}/>
                                <Route exact path='/cssMain' child={< RenderMenuCSS />}/>
                            </Switch>
                        </HashRouter>

                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                        padding: 0
                    }}/>

                    <Content
                        style={{
                        margin: '0 16px'
                    }}>
                        <HashRouter>
                            <Switch>
                          <Route exact path='/introHTML' render={props => <IntroHTML {...props}/>}/>
                                <Route exact path='/html' render={props => <HTML {...props}/>}/>
                                <Route path='/moreHTML' render={props => <MoreHTML {...props}/>}/>
                                <Route render={props => <NotFoundPage {...props}/>}/>
                            </Switch>
                        </HashRouter>
                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center'
                    }}>
                        dev blog</Footer>
                </Layout>
            </Layout>
        </Router>
    );
}
export default SiderDemo;