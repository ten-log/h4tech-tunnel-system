import React , {useState} from 'react';
import {post} from 'axios';
import { Modal, Button  } from 'antd';


export default class DeviceCreate extends React.Component {

  constructor(props){
    super(props);
    this.state ={user:'',device:'',location:'', phone:'',visible:false,  }
  }
  handleFormSubmit =(e)=>{
    e.preventDefault()
      this.addDevice()
          .then((response)=>{
              console.log(response.data);
          })
   this.setState({
        user:'',device:'',location:'', phone:'',visible:false, })
      //  window.location.reload();
  }
  addDevice =()=>{
    const url = '/api/content/devicetable';
    const formData = new FormData();
    formData.append('setOption', 'create');
    formData.append('user', this.state.user);
    formData.append('device',   this.state.device);
    formData.append('location',   this.state.location);
    formData.append('phone',this.state.phone);
    const config ={
      headers:{
          'content-type' : 'multipart/form-data'
      }
    }
    return post(url, formData, config);
  }
  handleValueChange =(e)=>{
    let nextState ={};
    nextState[e.target.name] = e.target.value;  //json 타입을 이런식으로도 만듦;; ㄹㅇ 대단
    this.setState(nextState);
  }
  showModal = () => {
    this.setState({ visible: true, });
  };
  handleOk = e => {
    console.log(e);
    this.setState({ visible: false, });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({  user:'',device:'',location:'', phone:'',visible:false, });
  };

  render() {
    return (
      <div style={{float:'left'}}>

          <Button type="primary" onClick={this.showModal}>
            기기등록
          </Button>
          <Modal title="Device Registration" visible={this.state.visible} onOk={this.handleFormSubmit} onCancel={this.handleCancel} >
              <form> {/*submist을 modal 에서 구현 onSubmit={this.handleFormSubmit} 구문도 삭제함.*/}
                <input placeholder="userName" type="text" name="user" value={this.state.user} onChange={this.handleValueChange} /> <br/>
                <input placeholder="deviceName" type="text" name="device" value={this.state.device} onChange={this.handleValueChange} /> <br/>
                <input placeholder="deviceLocation" type="text" name="location" value={this.state.location} onChange={this.handleValueChange} /> <br/>
                <input placeholder="phoneNumber" type="text" name="phone" value={this.state.phone} onChange={this.handleValueChange} /> <br/> <br/>
                {/*<button type="submit">추가하기</button>
                <button onClick={this.handleCancel}>취소하기</button>
                submist을 onOk 라는 ant의 모달창에서 구현*/}
              </form>
          </Modal>

      </div>
    );
  }
}
/*




const CreateDevice =()=>{

    let handleFormSubmit =(e)=>{
      e.preventDefault()
      addCustomer()
          .then((response)=>{
              console.log(response.data);
          })
      //window.location.reload();
    }

    let addCustomer= ()=>{
      const url = '/api/content/devicetable';
      const formData = new FormData();
      formData.append('key', 5);
      formData.append('User', 't1');
      formData.append('Device', 't2');
      formData.append('Location','t3');
      formData.append('Phone', 't4');
      formData.append('Admit', 1);
      const config ={
        headers:{
          'content-type' : 'application/json'
        }
      }
      return post(url, formData, config);
    }



    return(
        <div>
            <form onSubmit={handleFormSubmit} >

            <input type="submit" />
          </form>
        </div>
    );
}

export default CreateDevice;
*/
