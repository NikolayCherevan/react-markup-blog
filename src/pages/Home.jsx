import React from 'react';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import FooterMain from '../partials/Footer';
import HeaderMain from '../partials/Header';
import SidebarMain from '../partials/Sidebar';
import ContentMain from '../partials/Content';
export default function SiderDemo() {

    return (
        <Layout style={{
            minHeight: '100vh'
        }}>
            <SidebarMain/>
            <Layout className="site-layout">
                <HeaderMain />
              <ContentMain/>
                <FooterMain />
            </Layout>
        </Layout>
    );
}