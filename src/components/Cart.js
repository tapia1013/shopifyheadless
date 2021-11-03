import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from "@chakra-ui/react";


const Cart = () => {

  // implement context to make cart work
  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext);





  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            This is your cart.
          </DrawerBody>

          <DrawerFooter>
            <Button>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default Cart;