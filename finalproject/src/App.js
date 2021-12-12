//import logo from './logo.svg';
// import './App.css';
import { Button,Modal } from 'antd';
import React,{useState} from 'react';
import './index.less';
import '@ant-design/compatible/assets/index.css';
import 'antd/dist/antd.less';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="main-wrapper">
    {/* <BrowserRouter>
      <BackTop />
      <Routes language={language} country={country} /> 
    </BrowserRouter> */}
    <span className="primary">hello</span>
    <Button type="primary">Hello</Button>
    <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  </div>
  );
}

export default App;
