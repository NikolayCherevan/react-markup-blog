import React, { Suspense} from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/PacmanLoader";
import { Layout } from 'antd';
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import {
    Switch,
    Route,
    useLocation, Redirect
} from "react-router-dom";
const HTML1 = React.lazy(() => import('../pages/htmlArticles/subcategoriesHTML/HTML1'));
const HTML2 = React.lazy(() => import('../pages/htmlArticles/subcategoriesHTML/HTML2'));
const HTML3 = React.lazy(() => import('../pages/htmlArticles/subcategoriesHTML/HTML3'));
const CSS1 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS1'));
const CSS2 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS2'));
const CSS3 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS3'));
const CSS4 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS4'));
const CSS5 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS5'));
const CSS6 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS6'));
const CSS7 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS7'));
const CSS8 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS8'));
const CSS9 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS9'));
const CSS10 = React.lazy(() => import('../pages/cssArticles/subcategoriesCSS/CSS10'));
const Advanced1 = React.lazy(() => import('../pages/advancedArticles/subcategoriesAdvanced/Advanced1'));
const Advanced2 = React.lazy(() => import('../pages/advancedArticles/subcategoriesAdvanced/Advanced2'));
const Advanced3 = React.lazy(() => import('../pages/advancedArticles/subcategoriesAdvanced/Advanced3'));
const Advanced4 = React.lazy(() => import('../pages/advancedArticles/subcategoriesAdvanced/Advanced4'));
const Advanced5 = React.lazy(() => import('../pages/advancedArticles/subcategoriesAdvanced/Advanced5'));
const JS1 = React.lazy(() => import('../pages/jsArticles/subcategoriesJS/JS1'));
const JS2 = React.lazy(() => import('../pages/jsArticles/subcategoriesJS/JS2'));
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #F68112;
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;
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
            <Suspense className='loader' fallback={  <ClipLoader color={"#F68112"} css={override} size={25} />}>
            <Switch>
                <Route exact path='/' component={() => < HomePage />} />

                <Route
                    path='/cssMain'
                    component={() => HeaderView() === '/cssMain'
                        ?  <Redirect to="/cssMain/CSS1" /> : ''} />
                <Route
                    path='/htmlMain'
                    component={() => HeaderView() === '/htmlMain'
                        ? <Redirect to="/htmlMain/HTML1" /> : ''} />
                <Route
                    path='/advancedMain'
                    component={() => HeaderView() === '/advancedMain'
                        ? <Redirect to="/advancedMain/Advanced1" /> : ''} />
                <Route
                    path='/jsMain'
                    component={() => HeaderView() === '/jsMain'
                        ? <Redirect to="/jsMain/JS1" /> : ''} />
                <Route path="" component={() => HeaderView() !== '/'
                        ? <NotFoundPage /> : ''} />

            </Switch>
       
            <Switch>
               
                <Route path='/htmlMain/HTML1' component={() =>  < HTML1 />} />
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
                <Route path='/advancedMain/Advanced5' component={() => < Advanced5 />} />
                <Route path='/jsMain/JS1' component={() => < JS1 />} />
                <Route path='/jsMain/JS2' component={() => < JS2 />} />
                <Route path="" component={() => HeaderView() !== '/'
                        ? <NotFoundPage/> : ''} />
                
            </Switch>
            </Suspense>
        </Content>
    )
}