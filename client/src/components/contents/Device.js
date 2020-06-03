import React, { useState } from 'react';
import {Row, Col , Breadcrumb , Table, Radio, Divider , Button } from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Device = () => {
 
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Location 3</Breadcrumb.Item>
      </Breadcrumb>
        <div id="ContentC-container-box" style={{background: '#fff', padding:24 , minHeight:800 }}>

          <Button type="primary" style={{float:'right'}} >등록해제</Button>
          <Button type="primary" style={{float:'right', marginRight:'4px'}} >기기등록</Button>
            <Table
              rowSelection={{
                type:rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />

        </div>
    </div>
  );
};

export default Device;

/*
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

export default Device;*/
// Breadcrumb 컨텐트 위의 카테고리  표시 기능
