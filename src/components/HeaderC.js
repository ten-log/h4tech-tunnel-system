import React from 'react';
import { Typography,  Avatar} from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
const { Title } = Typography;

function HeaderC(){
  return(
    <div>
    <Avatar style={{float:'right' }} src='./user-icon-test1.jpg' />
     <Title style={{color:'white', float:'left'}} level={3}><LaptopOutlined />공공시설물(터널) 사고예방 시스템</Title>
    </div>
  );
}

export default HeaderC;
