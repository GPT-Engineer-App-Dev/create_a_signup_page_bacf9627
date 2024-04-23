import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

function Signup() {
  return (
    <Box p={4}>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input id='password' type='password' />
        </FormControl>
        <Button colorScheme='blue' width='full' mt={4}>Sign Up</Button>
      </VStack>
    </Box>
  );
}

export default Signup;