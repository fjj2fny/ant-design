import React from 'react';
import { Select } from 'antd';

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{ value: 'Leung Yiu Kwong & Tom Kwok', label: '1. Leung Yiu Kwong & Tom Kwok' }}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      {
        value: 'Lor Yiu Ming',
        label: '2. Lor Yiu Ming',
      },
      {
        value: 'Leung Kam Wing',
        label: '3. Leung Kam Wing',
      },
    ]}
  />
);

export default App;
