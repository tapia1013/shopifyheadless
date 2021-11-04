import React, { useContext } from 'react';

import { Link } from 'react-router-dom';


import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Box,
  Image,
  VStack,
} from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext'





const NavMenu = () => {

  const { isMenuOpen, closeMenu } = useContext(ShopContext)



  return (
    <Drawer
      placement="left"
      isOpen={isMenuOpen}
      onClose={closeMenu}
      size="sm"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p="2rem">
              <Link to="/">About Us</Link>
              <Link to="/">Learn More</Link>
              <Link to="/">Sustainability</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign="center">
            <Text w="100%">© Copyright www.testingshop1013.com</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default NavMenu;




