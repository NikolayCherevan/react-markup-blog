import React, { Suspense } from 'react';
import FooterMain from '../partials/Footer';
import HeaderMain from '../partials/Header';
import SidebarMain from '../partials/Sidebar';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/PacmanLoader";
import { Layout} from 'antd';
import 'antd/dist/antd.css';
const ContentMain = React.lazy(() => import('../partials/Content'));
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #F68112;
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;

export default function SiderDemo() {

    return (
        <Layout style={{
            minHeight: '100vh'
        }}>
            <SidebarMain/>
            <Layout className="site-layout">
                <HeaderMain />
               <Suspense fallback={<ClipLoader color={"#F68112"} css={override} size={25} />}>
                        <ContentMain/>
                    </Suspense>
                <FooterMain />
            </Layout>
        </Layout>
    );
}