import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Box, Grid, Text, Image } from '@chakra-ui/react'
import Hero from '../components/Hero'


import { ShopContext } from '../context/shopContext'
import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText';


const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)

  // useEffect same as componentDidMount
  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])


  console.log(products);

  if (!products) return <div>Loading...</div>



  return (
    <Box>
      <Hero />
      <RichText
        heading="The relaxation you've been waiting for."
        text="Our Baths bombs guarantee a fun, relaxing, and colorful night."
      />
      <Grid templateColumns="repeat(3,1fr)">
        {
          products.map(product => {
            return (
              <Link
                to={`/products/${product.handle}`}
                key={product.id}
              >
                <Box
                  _hover={{ opacity: '80%' }}
                  textAlign="center"
                  position="relative"
                >
                  <Image src={product.images[0].src} />
                  <Text
                    position="absolute"
                    bottom="15%"
                    w="100%"
                    fontWeight="bold"
                  >
                    {product.title}
                  </Text>
                  <Text
                    position="absolute"
                    bottom="5%"
                    w="100%"
                    color="gray.500"
                    fontWeight="600"
                  >
                    ${product.variants[0].price}
                  </Text>
                </Box>
              </Link>
            )
          })
        }
      </Grid>
      <RichText
        heading="Treat yourself!"
      />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="I'm baby kickstarter church-key farm-to-table squid tbh. Sustainable plaid cold-pressed actually schlitz affogato. Venmo godard hexagon tbh chartreuse meditation. Seitan deep v hexagon kitsch taiyaki freegan tote bag sustainable gluten-free."
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Second Heading"
        text="I'm baby kickstarter church-key farm-to-table squid tbh. Sustainable plaid cold-pressed actually schlitz affogato. Venmo godard hexagon tbh chartreuse meditation. Seitan deep v hexagon kitsch taiyaki freegan tote bag sustainable gluten-free."
      />
    </Box>
  )
}

export default Home