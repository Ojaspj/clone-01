import React from 'react'
import {  Box, Flex, Link, Button, Spacer, Input, Divider, InputGroup, InputLeftElement, Heading, InputRightElement, Menu, HStack } from '@chakra-ui/react'
import {ChevronDownIcon, Search2Icon, SearchIcon} from '@chakra-ui/icons'


const Header = () => {
  return (
<>
    <Flex w={'100%'} p={2}>
        <Flex p={1} >
            <Heading>LOGO</Heading>
            <Link><Button variant={'ghost'}>Home</Button></Link>
            <Link><Button variant={'ghost'}>Home</Button></Link>
            <Link><Button variant={'ghost'}>Home</Button></Link>
            <Link><Button variant={'ghost'}>Home</Button></Link>
        </Flex>
        <Spacer/>
        <Flex pt={2}>
            <Box borderColor={'black'}  w={'auto'} mr={4}>
                    <InputGroup>
                        <InputLeftElement as={Button} children = {<Search2Icon />} variant={'unstyled'} />
                        <Input placeholder='Search'/>
                    </InputGroup>
                    
               
                
            </Box>
            <Button variant={'ghost'}>Log In</Button>
            <Button colorScheme='green' variant={'ghost'}>Sign Up</Button>

        </Flex>
        
    </Flex>
    <Divider/>
    <Flex w={'100%'} p={2}>
        
            <Link><Button variant={'ghost'}>Home</Button></Link>
            <Link><Button variant={'ghost'}>Home</Button></Link>
            <Link><Button variant={'ghost'}>Home</Button></Link>
            <Link><Button variant={'ghost'}>Home</Button></Link>
        
        <Spacer/>
        
    </Flex>
    
     
    
</>
    
    

       
    )
}

export default Header