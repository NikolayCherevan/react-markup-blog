import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import { createBrowserHistory } from "history";
import {LinkContainer} from 'react-router-bootstrap';
const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


const history = createBrowserHistory();
function Home() {

    return (
        <div>
            hom
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
class SiderDemo extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Router history={history}>
                <Layout style={{
                    minHeight: '100vh'
                }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"/>
                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={< PieChartOutlined />}>
                                <Link to="/react-markup-blog">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={< DesktopOutlined />}>
                                <Link to="/css">CSS</Link>
                            </Menu.Item>

                            <Menu.Item key="3" icon={< DesktopOutlined />}>
                                <Link to="/morecss">More css</Link>
                            </Menu.Item>

                        </Menu>
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

                            <Switch>
                                <Route path="/react-markup-blog" exact children={< Home />}/>
                                <Route path="/css" children={< CSS />}/>
                                <Route path="/morecss" children={< MoreCSS />}/>
                            </Switch>

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
}
export default SiderDemo;