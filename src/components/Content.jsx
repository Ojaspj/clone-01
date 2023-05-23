import React from 'react'
import { HStack, Heading, Spacer } from '@chakra-ui/react'

const Content = () => {
  return (
    <HStack alignItems={'center'} w={'full'} height={'auto'} bgColor={'gray.300'}>
      <Heading>Content01</Heading>
      <Spacer />
      <Heading>Content02</Heading>
    </HStack>
  )
}

export default Content