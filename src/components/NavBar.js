import React, { useContext } from 'react';
import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';


const NavBar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext);



  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDirection="row"
      justifyContent="space-between"
      padding="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      />
      <Link to="/">
        <Image
          src={'https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540'}
          w={100}
          h={100}
        />
      </Link>
      <Icon
        fill="white"
        cursor="pointer"
        as={MdShoppingBasket}
        w={30}
        h={30}
        onClick={() => openCart()}
      />
    </Flex >
  )
}

export default NavBar;