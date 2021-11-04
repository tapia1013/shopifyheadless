import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Box, Text, Image, Button, Heading, Flex, Center, Grid } from '@chakra-ui/react'



import { ShopContext } from '../context/shopContext'





const ProductPage = () => {

  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)


  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])



  if (!product.title) return <div>Loading...</div>





  return (
    <Box p="2rem">
      <Grid m="auto" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
          <Heading pb="2rem">{product.title}</Heading>
          <Text fontWeight="bold" pb="2rem">${product.variants[0].price}</Text>
          <Text color="gray.500" pb="2rem">{product.description}</Text>
          <Button
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            _hover={{ opacity: '70%' }}
            w="10rem"
            backgroundColor="#ff38bd"
            color="white"
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default ProductPage


