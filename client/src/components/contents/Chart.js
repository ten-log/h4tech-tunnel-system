import React from 'react';
import { Line } from '@ant-design/charts';
import { Breadcrumb } from 'antd';


const Chart =()=>{

    let data = [
          { year: '2012', value: 2 },
          { year: '2013', value: 13 },
          { year: '2014', value: 13},
          { year: '2015', value: 4 },
          { year: '2016', value: 13 },
          { year: '2017', value: 13 },
          { year: '2018', value: 5 },
          { year: '2019', value: 13 },
          { year: '2020', value: 13 },
        ];
      let config = {
          data,
          title: {
            visible: true,
            text: 'Co2-Distribution Chart',
          },
          xField: 'year',
          yField: 'value',
        };

  return (
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Menu</Breadcrumb.Item>
            <Breadcrumb.Item>Location 2</Breadcrumb.Item>
          </Breadcrumb>
            <div id="ContentC-container-box" style={{background: '#fff', padding:24 , minHeight:800 }}>
              <Line {...config} />
            </div>
        </div>
  );
}

export default Chart;
// Breadcrumb 컨텐트 위의 카테고리  표시 기능
