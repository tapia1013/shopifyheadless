import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// chakra ui library
import { Box, Grid, Text, Image } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

const Home = () => {

  // pull date from ShopContext
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  console.log(products);

  if (!products) return <div>Loading...</div>

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {
          products.map(product => (
            <Link
              to={`/products/${product.handle}`}
              key={product.id}
            >
              <Box _hover={{ opacity: '80%' }} textAlign="center">
                <Image width="700px" height="350px" src={product.images[0].src} />
                <Text>
                  {product.title}
                </Text>
                <Text>
                  ${product.variants[0].price}
                </Text>
              </Box>
            </Link>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Home
