import React, { useState ,useEffect } from 'react';
import {Row, Col , Breadcrumb , Table, Radio, Divider , Button } from 'antd';
import CreateDevice from './CreateDevice';

const Device = () => {  // userState란  기본값을 () 안에 넣어주고 첫번째인자는 상태의 값 두번째는 상태를 결정하는 함수입니다.

let [data, setData] = useState(null);

    useEffect(()=>{
    fetch('http://localhost:5000/api/content/devicetable')
        .then(res=>res.json())
      //  .then(res=>{if(){
        //  json 의 렝스 구하고 여기서 숫자값을 등록 대기와 허가로 구분해주는생각을일단 하고있음
    //    }})
        .then(res=>setData(res))
  }, []);

/*  let a =1;
  data = [
    {
      key: '1',
      User: 'JohnBrown',
      Device: '잘만든 카메라',
      Location: '세종 터미널  ',
      Phone: '01012341234',
      Admit: 0,
    },
    {
      key: '2',
      User: '갈만배',
      Device: '잘만든 티비',
      Location: '대전 터미널  ',
      Phone: '01012341234',
      Admit: 0,
    },
    {
      key: '3',
      User: '몽쉘',
      Device: '잘만든 냉장고',
      Location: '개인 터미널  ',
      Phone: '01012341234',
      Admit: 0,
    },
    {
      key: '4',
      User: '미네랄워터',
      Device: '급하게 만든 에어컨',
      Location: '국세청 터미널  ',
      Phone: '01012341234',
      Admit: a ==1 ? '등록완료' : '등록대기',
    },
  ];
*/

  const columns = [
    {
      title: 'User',
      dataIndex: 'User',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Device',
      dataIndex: 'Device',
    },
    {
      title: 'Location',
      dataIndex: 'Location',
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
    },
    {
      title: 'Admit',
      dataIndex: 'Admit',
    },
  ];
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.User === 'admin', // Column configuration not to be checked 매니져일때 이걸로 해서 매니져는 조종 못하게 해야함
      name: record.User,
    }),
  };

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Location 3</Breadcrumb.Item>
      </Breadcrumb>
        <div id="ContentC-container-box" style={{background: '#fff', padding:24 , minHeight:800 }}>
            {data?  <Table rowSelection={{type: 'checkbox',...rowSelection, }} columns={columns} dataSource={data} />: null }
            <CreateDevice />
        </div>
    </div>
  );
};

export default Device;

/*
//    <button  type="submit" style={{float:'right'}} >등록삭제</button>
//    <button onClick={() => {console.log('수정이요')}} type="submit" style={{float:'right', marginRight:'4px'}} >등록수정</button>
  //  <button onClick={() => {console.log('왜안에선 안')}} type="submit" style={{float:'right', marginRight:'4px'}} >기기등록</button>



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
