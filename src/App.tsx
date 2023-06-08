import { Button, Checkbox, Radio, Space } from "antd";
import Title from "antd/es/typography/Title";
import "./App.less";

function App() {
  return (
    <>
      <Title level={2}>Install & Setup Ant Design</Title>
      <Space className='flex flex-column'>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
        <Radio className='gap-1'>Radio</Radio>
        <Checkbox className='gap-1'>Checkbox</Checkbox>
      </Space>
    </>
  );
}

export default App;
