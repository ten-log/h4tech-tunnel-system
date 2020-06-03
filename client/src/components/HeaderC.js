import React from 'react';
import { Typography,  Avatar} from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default class HeaderC extends React.Component{
    constructor(props){
      super(props)
      this.state={
          username:null
      }
    }

      componentDidMount() {
         fetch('http://localhost:5000/haeder/usertable')
             .then(res=>res.json())
             .then(result=> this.setState({username: result[0].user_name, ...result}));
     }
    render(){
      const {username} = this.state;
      return(
        <div>
        <div style={{float:'right' ,color:'white'}}>{username ? `${username}` : 'your not user'}</div>
        <Avatar style={{float:'right' }} src='./user-icon-test1.jpg' />
         <Title style={{color:'white', float:'left'}} level={3}><LaptopOutlined />공공시설물(터널) 사고예방 시스템</Title>
        </div>
      );
    }
}
