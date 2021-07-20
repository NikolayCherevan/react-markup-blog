import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Layout, Menu, Button, Alert, Tag} from 'antd';
import {
    Html5Outlined,
    WarningOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,
    useLocation,
    Redirect
} from "react-router-dom";
import IntroductionCSS from './cssArticles/IntroductionCSS'
import IntroductionHTML from './htmlArticles/IntroductionHTML'
import CSS1 from './cssArticles/subcategoriesCSS/CSS1'
import HTML1 from './htmlArticles/subcategoriesHTML/HTML1'
import CSS2 from './cssArticles/subcategoriesCSS/CSS2'
import HTML2 from './htmlArticles/subcategoriesHTML/HTML2'
const {Header, Content, Footer, Sider} = Layout;

function Social() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            maxWidth: '100px',
            alignItems: 'center',margin: '0 auto'
        }}>
            <h1 
            style={{
            color: 'white',
            padding: '20px'
        }}>
                Find us
            </h1>
            <Tag icon={< TwitterOutlined />} color="#55acee">
                Twitter
            </Tag>
            <Tag icon={< YoutubeOutlined />} color="#cd201f">
                Youtube
            </Tag>
            <Tag icon={< FacebookOutlined />} color="#3b5999">
                Facebook
            </Tag>
            <Tag icon={< LinkedinOutlined />} color="#55acee">
                LinkedIn
            </Tag>
        </div>
    );
}
function HomePage() {
    return (
        <div>
            Welcome page
        </div>
    );
}
function NotFoundPage() {
    return (
        <div>
            <Alert
                style={{
                marginTop: '20px'
            }}
                message="Error"
                description="  oh.. that page not found sorry"
                type="error"
                showIcon/>
        </div>
    );
}
const SidebarMenu = props => {

    function checkCategory() {

        if (props.category === "html") {
            return (
                <Menu theme="dark">
                    <Menu.Item
                        className={`${HeaderView() === '/htmlMain/HTML1'
                        ? 'ant-menu-item-selected'
                        : ''}`}
                        key="1"
                        icon={< Html5Outlined />}>
                        <Link to='/htmlMain/HTML1'>First article html</Link>
                    </Menu.Item>
                    <Menu.Item
                        className={`${HeaderView() === '/htmlMain/HTML2'
                        ? 'ant-menu-item-selected'
                        : ''}`}
                        key="2"
                        icon={< Html5Outlined />}>
                        <Link to='/htmlMain/HTML2'>Second article html</Link>
                    </Menu.Item>
                </Menu>

            )
        }
        if (props.category === "css") {
            return (
                <div className="nice">
                    <Menu theme="dark">
                        <Menu.Item
                            className={`${HeaderView() === '/cssMain/CSS1'
                            ? 'ant-menu-item-selected'
                            : ''}`}
                            key="1"
                            icon={< Html5Outlined />}>
                            <Link to='/cssMain/CSS1'>First article css</Link>
                        </Menu.Item>
                        <Menu.Item
                            className={`${HeaderView() === '/cssMain/CSS2'
                            ? 'ant-menu-item-selected'
                            : ''}`}
                            key="2"
                            icon={< Html5Outlined />}>
                            <Link to='/cssMain/CSS2'>Second article css</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            )
        }

    }
    return (
        <div>
            {checkCategory()}
        </div>
    );
};
function HeaderView() {
    const location = useLocation();
    return location.pathname
}
function SiderDemo() {

    return (
        <Layout style={{
            minHeight: '100vh'
        }}>
            <Sider style={{
                textAlign: 'center'
            }} collapsible>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item
                        className={`${HeaderView() === '/htmlMain' || HeaderView().includes('/htmlMain')
                        ? 'ant-menu-item-selected'
                        : ''}`}
                        key="1">
                        <Link to='/htmlMain'>HTML</Link>
                    </Menu.Item>
                    <Menu.Item
                        className={`${HeaderView() === '/cssMain' || HeaderView().includes('/cssMain')
                        ? 'ant-menu-item-selected'
                        : ''}`}
                        key="2">
                        <Link to='/cssMain'>CSS</Link>
                    </Menu.Item>

                </Menu>
                <Switch>
                    <Route exact path='/' render={props => <Social/>}/>
                    <Route path='/htmlMain' render={props => <SidebarMenu category='html'/>}/>
                    <Route path='/cssMain' render={props => <SidebarMenu category='css'/>}/></Switch>
                {HeaderView() === '/'
                    ? ''
                    : <Link
                        to="/"
                        className="ant-btn ant-btn-primary"
                        style={{
                        marginTop: '20px'
                    }}>
                        GO home
                    </Link>}
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                    padding: 0
                }}/>

                <Content style={{
                    margin: '0 16px'
                }}>
                    <Switch>
                        <Route exact path='/' component={() =>< HomePage />}/>

                        <Route
                            path='/cssMain'
                            component={() => HeaderView() === '/cssMain'
                            ? < IntroductionHTML />: ''}/>
                        <Route
                            path='/htmlMain'
                            component={() => HeaderView() === '/htmlMain'
                            ? < IntroductionCSS />: ''}/>

                        <Route component={() =>< NotFoundPage />}/>
                    </Switch>
                    <Switch>

                        <Route path='/htmlMain/HTML1' component={() =>< HTML1 />}/>
                        <Route path='/htmlMain/HTML2' component={() =>< HTML2 />}/>
                        <Route path='/cssMain/CSS1' component={() =>< CSS1 />}/>
                        <Route path='/cssMain/CSS2' component={() =>< CSS2 />}/>
                    </Switch>
                </Content>
                <Footer style={{
                    textAlign: 'center'
                }}>
                    dev blog</Footer>
            </Layout>
        </Layout>
    );
}
export default SiderDemo;