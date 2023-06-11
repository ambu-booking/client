import { Button, Input, List, Space } from "antd";
import { CompassOutlined, SearchOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import "./App.less";
import useFetchCompanies from "./graphql/hooks/company/useFetchCompanies";

function App() {
  const { companies, error } = useFetchCompanies();

  if (error) {
    console.log(error);
  }
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
      <List>
        {companies.map((company) => (
          <List.Item>{company.name}</List.Item>
        ))}
      </List>
    </>
  );
}

export default App;
