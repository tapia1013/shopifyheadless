import React, { Component } from 'react';
import Client from 'shopify-buy';

// Create Context
const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: 'process.env.REACT_APP_SHOPIFY_DOMAIN',
  storefrontAccessToken: 'process.env.REACT_APP_SHOPIFY_API'
});

class shopProvider extends Component {

  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false
  }

  createCheckout = async () => {

  }

  fetchCheckout = async () => {

  }

  addItemToCheckout = async () => {

  }

  removeLineItem = async (lineItemIdsToRemove) => {

  }

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products })
  }

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle)
    this.setState({ product })
  }

  closeCart = async () => {

  }

  openCart = async () => {

  }

  closeMenu = async () => {

  }

  openMenu = async () => {

  }


  render() {
    return (
      <div>
        <ShopContext.Provider>
          {this.props.children}
        </ShopContext.Provider>
      </div>
    )
  }
}


// consumer what consumes the context
const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }



export default shopProvider;