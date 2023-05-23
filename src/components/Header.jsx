import React from 'react'
import { HStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'


const Header = () => {
  return (
        <HStack w={'full'} bgColor={'gray.300'}>
            <Text color={'green'}>upwork</Text>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
        </HStack>  
    )
}

export default Header