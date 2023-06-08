import { Button, Checkbox, Radio, Space } from "antd";
import Title from "antd/es/typography/Title";

function App() {
  return (
    <>
      <Title level={2}>Install & Setup Ant Design</Title>
      <Space wrap>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
        <Radio>Radio</Radio>
        <Checkbox>Checkbox</Checkbox>
      </Space>
    </>
  );
}

export default App;
