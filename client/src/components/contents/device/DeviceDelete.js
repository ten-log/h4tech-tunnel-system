import React from 'react';
import {post} from 'axios';
import {Button} from 'antd';

const DeviceDelete = (props) => {  // userState란  기본값을 () 안에 넣어주고 첫번째인자는 상태의 값 두번째는 상태를 결정하는 함수입니다.

const handleFormSubmit =()=>{
      let de_id = props.de_id;
      const url = '/api/content/devicetable';
      const formData = new FormData();
      formData.append('setOption', 'delete');
      formData.append('de_id', de_id);
      const config ={
        headers:{ 'content-type' : 'multipart/form-data' }}
      return post(url, formData, config);
    }
  return (
    <div style={{marginLeft:100}}>
      <form>
        <Button type="primary" onClick={handleFormSubmit} >등록삭제</Button>
      </form>
    </div>
  );
};

export default DeviceDelete;
