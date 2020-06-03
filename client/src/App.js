import React from 'react';
import './App.css';
import { Layout  } from 'antd';

import HeaderC from './components/HeaderC';
import SiderC from './components/SiderC';
import ContentC from './components/ContentC';
import FooterC from './components/FooterC';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
        <Header style={{padding:15}}>
            <HeaderC />
        </Header>
      <Layout>
          <Sider style={{}}>
              <SiderC />
          </Sider>
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <ContentC />
                </Content>
               <Footer style={{ textAlign: 'center' }}>
                    <FooterC />
               </Footer>
            </Layout>
      </Layout>
    </Layout>

    </div>
  );
}

export default App;
