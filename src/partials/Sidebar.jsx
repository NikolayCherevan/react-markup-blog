import MenuCSS from "../submenu/CssMenu";
import MenuHtml from "../submenu/HtmlMenu";
import MenuAdvanced from "../submenu/AdvancedMenu";
import MenuJS from "../submenu/JsMenu";
import { Layout} from 'antd';
// import Social from "./Social";
import {
    Switch,
    Route,
    Link,
    useLocation,
} from "react-router-dom";

const {Sider } = Layout;

function HeaderView() {
    const location = useLocation();
    return location.pathname;
}
const SidebarMenu = props => {
    switch(true) {
        case props.category === "html": {
            return <MenuHtml />
        }
        case props.category === "css": {
            return <MenuCSS />
        }
        case props.category === "advanced": {
            return <MenuAdvanced />
        }
        case props.category === "js": {
            return <MenuJS />
        }
        default: {
            return '';
        }
    }
}

export default function SidebarMain() {
    return(
        <Sider style={{
            textAlign: 'center'
        }} collapsible>
              {HeaderView() === '/'
                ? <div className="logo" />
                : <Link
                    to="/"
                    >
                  <div className="logo" />
                </Link>}
            <Switch>
         
                {/* <Route exact path='/' render={props => <Social />} /> */}
                
               
                <Route path='/htmlMain' render={props => <SidebarMenu category='html' />} />
                <Route path='/cssMain' render={props => <SidebarMenu category='css' />} />
                <Route path='/advancedMain' render={props => <SidebarMenu category='advanced' />} />
                <Route path='/jsMain' render={props => <SidebarMenu category='js' />} />
                
                </Switch>
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
    )
}