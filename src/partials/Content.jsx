import { Layout } from 'antd';
import HomePage from "../pages/HomePage";
import IntroductionCSS from "../pages/cssArticles/IntroductionCSS";
import IntroductionHTML from "../pages/htmlArticles/IntroductionHTML";
import IntroductionAdvanced from '../pages/advancedArticles/IntroductionAdvanced';
import IntroductionJS from '../pages/jsArticles/IntroductionJS';
import NotFoundPage from "../pages/NotFoundPage";
import HTML1 from "../pages/htmlArticles/subcategoriesHTML/HTML1";
import HTML2 from "../pages/htmlArticles/subcategoriesHTML/HTML2";
import HTML3 from '../pages/htmlArticles/subcategoriesHTML/HTML3';
import CSS1 from "../pages/cssArticles/subcategoriesCSS/CSS1";
import CSS2 from "../pages/cssArticles/subcategoriesCSS/CSS2";
import CSS3 from "../pages/cssArticles/subcategoriesCSS/CSS3";
import CSS4 from "../pages/cssArticles/subcategoriesCSS/CSS4";
import CSS5 from "../pages/cssArticles/subcategoriesCSS/CSS5";
import CSS6 from "../pages/cssArticles/subcategoriesCSS/CSS6";
import CSS7 from "../pages/cssArticles/subcategoriesCSS/CSS7";
import CSS8 from "../pages/cssArticles/subcategoriesCSS/CSS8";
import CSS9 from "../pages/cssArticles/subcategoriesCSS/CSS9";
import CSS10 from "../pages/cssArticles/subcategoriesCSS/CSS10";
import Advanced1 from '../pages/advancedArticles/subcategoriesAdvanced/Advanced1';
import Advanced2 from '../pages/advancedArticles/subcategoriesAdvanced/Advanced2';
import Advanced3 from '../pages/advancedArticles/subcategoriesAdvanced/Advanced3';
import Advanced4 from '../pages/advancedArticles/subcategoriesAdvanced/Advanced4';
import JS1 from '../pages/jsArticles/subcategoriesJS/JS1';
import JS2 from '../pages/jsArticles/subcategoriesJS/JS2';

import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

const { Content} = Layout;
function HeaderView() {
    const location = useLocation();
    return location.pathname
}

export default function ContentMain() {
    return(
        <Content style={{
            margin: '0 16px'
        }}>
            <Switch>
                <Route exact path='/' component={() => < HomePage />} />

                <Route
                    path='/cssMain'
                    component={() => HeaderView() === '/cssMain'
                        ? < IntroductionCSS /> : ''} />
                <Route
                    path='/htmlMain'
                    component={() => HeaderView() === '/htmlMain'
                        ? < IntroductionHTML /> : ''} />
                <Route
                    path='/advancedMain'
                    component={() => HeaderView() === '/advancedMain'
                        ? < IntroductionAdvanced /> : ''} />
                <Route
                    path='/jsMain'
                    component={() => HeaderView() === '/jsMain'
                        ? <IntroductionJS /> : ''} />
                <Route component={() => < NotFoundPage />} />
            </Switch>
            <Switch>

                <Route path='/htmlMain/HTML1' component={() => < HTML1 />} />
                <Route path='/htmlMain/HTML2' component={() => < HTML2 />} />
                <Route path='/htmlMain/HTML3' component={() => < HTML3 />} />
                <Route path='/cssMain/CSS1' component={() => < CSS1 />} />
                <Route path='/cssMain/CSS2' component={() => < CSS2 />} />
                <Route path='/cssMain/CSS3' component={() => < CSS3 />} />
                <Route path='/cssMain/CSS4' component={() => < CSS4 />} />
                <Route path='/cssMain/CSS5' component={() => < CSS5 />} />
                <Route path='/cssMain/CSS6' component={() => < CSS6 />} />
                <Route path='/cssMain/CSS7' component={() => < CSS7 />} />
                <Route path='/cssMain/CSS8' component={() => < CSS8 />} />
                <Route path='/cssMain/CSS9' component={() => < CSS9 />} />
                <Route path='/cssMain/CSS10' component={() => < CSS10 />} />
                <Route path='/advancedMain/Advanced1' component={() => < Advanced1 />} />
                <Route path='/advancedMain/Advanced2' component={() => < Advanced2 />} />
                <Route path='/advancedMain/Advanced3' component={() => < Advanced3 />} />
                <Route path='/advancedMain/Advanced4' component={() => < Advanced4 />} />
                <Route path='/jsMain/JS1' component={() => < JS1 />} />
                <Route path='/jsMain/JS2' component={() => < JS2 />} />
            </Switch>
        </Content>
    )
}