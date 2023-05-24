import React from 'react'
import { Container, Box, Heading, Text, VStack, HStack, Button } from '@chakra-ui/react'

const Content = () => {
  return (

    <Container maxW={''} centerContent>
      <VStack justify={'center'} p={4} borderWidth={2} w={'100%'}>
        <Heading size={'4xl'}>how work should work</Heading>
        <Text>Forget the old rules. You can have the best people. Right now. Right here.</Text>
        <Box w={'200px'} borderColor={'gray.200'} borderWidth={2} borderRadius={40}>
            <HStack>
              <Button size={'lg'} variant={'ghost'}>Find</Button>
              <Button size={'lg'} variant={'ghost'}>Find</Button>
              <Button size={'lg'} variant={'ghost'}>Find</Button>

            </HStack>
        </Box>
      </VStack>
    </Container>
    
  )
}

export default Content