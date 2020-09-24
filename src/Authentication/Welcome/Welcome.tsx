import React from 'react';
import {Image} from 'react-native';
import {Box, Text, Button} from '../../components/';
const welcome = require('../../images/welcome.png');

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor={'white'}>
      <Box
        flex={1}
        borderBottomRightRadius={'xl'}
        backgroundColor={'grey'}
        alignItems={'flex-end'}
        justifyContent={'center'}>
        <Image
          source={welcome}
          style={{
            flex: 1,
            height: 400,
            width: 200,
            borderBottomRightRadius: 75,
          }}
          resizeMode="cover"
        />
      </Box>
      <Box flex={1} backgroundColor={'grey'}>
        <Box
          flex={1}
          backgroundColor={'white'}
          borderTopLeftRadius={'xl'}
          justifyContent="space-evenly"
          alignItems="center"
          padding={'xl'}>
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {}}
          />
          <Button
            variant="default"
            label="Join us, It's Free"
            onPress={() => {}}
          />
          <Button
            variant="transparent"
            label="Forgot Password?"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
