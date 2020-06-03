import React from 'react';
import { Line } from '@ant-design/charts';
import { Breadcrumb } from 'antd';


export default class Chart extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          chartid:null,
          data: null
      };
  }

  componentDidMount() {
     fetch('http://localhost:5000/content/co2table')
         .then(res=>res.json())
         .then(result=> this.setState({data: result ,...result}));
 }
 
    render(){
      const {chartid , data} = this.state;
      let config ={
            data,
            title: {
              visible: true,
              text: 'Co2-Distribution Chart',
            },
            xField: 'year',
            yField: 'cotwo',
          }
    return (
          <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Menu</Breadcrumb.Item>
              <Breadcrumb.Item>Location 2</Breadcrumb.Item>
            </Breadcrumb>
              <div id="ContentC-container-box" style={{background: '#fff', padding:24 , minHeight:800 }}>

              {chartid ? `this is ${chartid}` : 'Hello World'}

                <Line {...config} />
              </div>
          </div>
    );
    }
}
// Breadcrumb 컨텐트 위의 카테고리  표시 기능
