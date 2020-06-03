import React from 'react';
import { Row, Col , Breadcrumb} from 'antd';

const Device =()=>{

  return (
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Menu</Breadcrumb.Item>
            <Breadcrumb.Item>Location 3</Breadcrumb.Item>
          </Breadcrumb>
            <div id="ContentC-container-box" style={{background: '#fff', padding:24 , minHeight:800 }}>
                <Row gutter={[16, 16]}>
                </Row>
            </div>
        </div>
  );
}

export default Device;
// Breadcrumb 컨텐트 위의 카테고리  표시 기능
