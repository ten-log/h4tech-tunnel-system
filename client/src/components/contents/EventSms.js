import React from 'react';
import {post} from 'axios';
import {Button} from 'antd';
import CryptoJS from 'crypto-js';


//  id    ncp:sms:kr:259424290547:smsapi
//Secret key  323034a370164664ba5aa879ef57f140

const EventSms =()=>{

    const handleFormSubmit =()=>{

      var space = " ";				// one space
      var newLine = "\n";				// new line
      var method = "GET";				// method
      var url = "https://sens.apigw.ntruss.com/sms/v2/services/qlqjs674@naver.com/messages";
      var timestamp = "{timestamp}";			// current timestamp (epoch)
      var accessKey = "{ncp:sms:kr:259424290547:smsapi}";			// access key id (from portal or Sub Account)
      var secretKey = "{323034a370164664ba5aa879ef57f140}";			// secret key (from portal or Sub Account)

      var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
      hmac.update(method);
      hmac.update(space);
      hmac.update(url);
      hmac.update(newLine);
      hmac.update(timestamp);
      hmac.update(newLine);
      hmac.update(accessKey);

      var hash = hmac.finalize();

        console.log("debug log1");
      return hash.toString(CryptoJS.enc.Base64);
        }

  return (
    <div style={{marginLeft:100}}>
      <form>
        <Button type="primary" onClick={handleFormSubmit} >SMS보내기</Button>
      </form>
    </div>
  );
};

export default EventSms;
