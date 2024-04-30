import React, { useState } from 'react';
import {Select, Box, CheckIcon, Center} from 'native-base';
import { Image } from 'react-native';
import gender from '../assets/icons/gender.png';


const DropDownFiled = () => {
  const [service, setService] = useState('');
  return (
    <Center>
      <Box>
        <Select
          selectedValue={service}
          // Width="100%"
          minWidth={'100%'}
          accessibilityLabel="Choose Service"
          placeholder="Choose Gender"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="4" />,
          }}
          InputLeftElement={
            <Image
              source={gender}
              style={{width: 28, height: 28, marginLeft: 10}}
            />
          }
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Male" value="male" />
          <Select.Item label="Female" value="female" />
        </Select>
      </Box>
    </Center>
  );
};

export default DropDownFiled;
