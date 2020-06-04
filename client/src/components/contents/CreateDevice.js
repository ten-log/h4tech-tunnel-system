import React , {useState} from 'react';
import {post} from 'axios';
import { Modal, Button  } from 'antd';


export default class CreateDevice extends React.Component {


  constructor(props){
    super(props);
    this.state ={
      name:'',
      part:'',
      id:'',
      pw:'',
      phone:'',
      email:'',
      visible:false,
    }
  }
  handleFormSubmit=(e)=>{
    e.preventDefault()
    this.addDevice()
        .then((response)=>{
            console.log(response.data);
        })
    this.setState({
      name:'',
      part:'',
      id:'',
      pw:'',
      phone:'',
      email:''
    })
    window.location.reload();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          기기등록
        </Button>
        <Modal title="Device Registration" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} >
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
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
