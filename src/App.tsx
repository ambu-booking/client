import { Button, Input, Space } from "antd";
import { CompassOutlined, SearchOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import "./App.less";

function App() {
  return (
    <>
      <Title level={2}>Ambu-rdv</Title>
      <Space.Compact size='large' style={{ width: 600 }}>
        <Input
          className='gap-5'
          prefix={<SearchOutlined />}
          placeholder='Nom de la société...'
        />
        <Input
          className='gap-5'
          prefix={<CompassOutlined />}
          placeholder='Où ?'
        />
        <Button type='primary'>Rechercher</Button>
      </Space.Compact>
    </>
  );
}

export default App;
