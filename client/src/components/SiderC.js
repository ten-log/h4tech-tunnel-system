import React from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function SiderC(){

  return(
    <div>
      <Menu   defaultSelectedKeys={['Dashboard']}   mode="inline">
        <Menu.Item key='Dashboard'>
          Dashboard
        </Menu.Item>
          <SubMenu key="sub1"  icon={<MailOutlined />}  title={<span>Menu</span> }>
            <Menu.Item key='location1' >Camera</Menu.Item>
            <Menu.Item key='location2' >Chart</Menu.Item>
            <Menu.Item key='location3' >Device</Menu.Item>
          </SubMenu>
      </Menu>
    </div>
  )
}

export default SiderC;

//        //<Menu.ItemGroup key=' BoardMenu' title='CameraMain'>   </Menu.ItemGroup>
