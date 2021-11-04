import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Flex, Box, Icon, Image, Text, Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

import { MdMenu, MdShoppingBasket } from 'react-icons/md'



const NavBar = () => {


  const { openCart, openMenu, checkout } = useContext(ShopContext)


  return (
    <Flex
      alignItems="center"
      backgroundColor="#ffa8e2"
      flexDirection="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="white"
        as={MdMenu}
        h={30}
        w={30}
        cursor="pointer"
        onClick={() => openMenu()}
      ></Icon>
      <Link exact to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
          w={100}
          h={100}
          cursor="pointer"
        />
      </Link>
      <Box>
        <Icon
          fill="white"
          as={MdShoppingBasket}
          h={30}
          w={30}
          cursor="pointer"
          onClick={() => openCart()}
        />
        <Badge
          backgroundColor="#ff38bd"
          borderRadius="50%"
        >
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  )
}


export default NavBar;


