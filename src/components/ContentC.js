import React, { useState } from 'react';
import { Breadcrumb , Slider ,Row, Col} from 'antd';
import Iframe from 'react-iframe'
import { useFullScreen } from 'react-hooks-full-screen'

/*const App: React.StatelessComponent = () => {
  const [showFullScreen, setShowFullScreen] = useState(false)
  useFullScreen('app', showFullScreen)
  return (
    <div id="app">
      <button onClick={() => setShowFullScreen(!showFullScreen)}>Toggle</button>
    </div>
*/
const ContentC =()=>{

  const [showFullScreen, setShowFullScreen] = useState(false)
  useFullScreen('big', showFullScreen)


  let state ={
    c_url_main:'http://www.youtube.com/embed/fE2h3lGlOsk',
    c_url_sub1:'http://www.youtube.com/embed/bwmSjveL3Lc',
    c_url_sub2:'http://www.youtube.com/embed/8A2t_tAjMz8',
    c_url_sub3:'http://www.youtube.com/embed/JQGRg8XBnB4',
    c_url_sub4:'http://www.youtube.com/embed/KhTeiaCezwM',
    c_url_move:'http://www.youtube.com/embed/oygrmJFKYZY',
  }

  return (
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Menu</Breadcrumb.Item>
            <Breadcrumb.Item>CameraMain</Breadcrumb.Item>
          </Breadcrumb>
            <div id="camera-container-board" style={{background: '#fff', padding:24 , minHeight:800 }}>
            <Row gutter={[16, 16]}>
              <Col  id="big" span={12}  style={{background: 'gray' ,height:'400px' }} >


                <Iframe url={state.c_url_main} width="770px" height="380px" id="myId" className="myClassname" display="initial" position="relative"/>
                <button  style={{background: 'white', padding:24 }} onClick={() => setShowFullScreen(!showFullScreen)}>가나다라
                </button>
              </Col>
              <Col span={12}  style={{background: 'yellow'}} >
                <Iframe url={state.c_url_move} width="770px" height="380px" id="myId" className="myClassname" display="initial" position="relative"/>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12} style={{background: 'pink'  ,height:'400px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={6}  style={{background: 'gray' ,height:'180px' }}>  <Iframe url={state.c_url_sub1} width="180px" height="160px" id="myId" className="myClassname" display="initial" position="relative"/></Col>
                  <Col span={6}  style={{background: 'blue'  }}>                <Iframe url={state.c_url_sub2} width="180px" height="160px" id="myId" className="myClassname" display="initial" position="relative"/></Col>
                  <Col span={6}  style={{background: 'white' }}>                  <Iframe url={state.c_url_sub3} width="180px" height="160px" id="myId" className="myClassname" display="initial" position="relative"/></Col>
                  <Col span={6}  style={{background: 'black'  }}>                <Iframe url={state.c_url_sub4} width="180px" height="160px" id="myId" className="myClassname" display="initial" position="relative"/></Col>
                </Row>
              </Col>
              <Col span={12} style={{background: 'white'}} >
              <Row gutter={[16, 16]}>
                <Col span={24}  style={{background: 'red' ,height:'180px' }} >   <Slider style={{marginTop:60}} defaultValue={30} disabled={false} /> </Col>

              </Row>
              </Col>
            </Row>
            </div>
        </div>
  );
}

export default ContentC;



/*  Line 그래프 사용법
import { Line } from '@ant-design/charts';

      const data = [
        { year: '1991', value: 2 },
        { year: '1992', value: 13 },
        { year: '1993', value: 13},
        { year: '1994', value: 4 },
        { year: '1995', value: 13 },
        { year: '1996', value: 13 },
        { year: '1997', value: 5 },
        { year: '1998', value: 13 },
        { year: '1999', value: 13 },
      ];

    const config = {
        data,
        title: {
          visible: true,
          text: '텍스트 부분',
        },
        xField: 'year',
        yField: 'value',
      };    <Line {...config} />



*/
