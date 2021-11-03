import React, { Component } from 'react';
import Client from 'shopify-buy';

// Create Context
const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: 'testing1309.myshopify.com',
  storefrontAccessToken: '52dfc867ddac4c5d295a73b055a81ebd'
});

class shopProvider extends Component {

  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false
  }

  // get checkout initaly when we first load the application
  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      //load
      this.createCheckout()
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    // save to localstorage
    localStorage.setItem("checkout_id", checkout.id);
    // update state
    this.setState({ checkout });
  }

  fetchCheckout = (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout })
      })
  }

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: parseInt(quantity, 10)
      }
    ];
    console.log(variantId);
    // checkout to update the state with, additems is provided by shopify
    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
    this.setState({ checkout });

    // open cart when lineitems added
    this.openCart();
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
    this.setState({ isCartOpen: false })
  }

  openCart = async () => {
    this.setState({ isCartOpen: true })
  }

  closeMenu = async () => {

  }

  openMenu = async () => {

  }


  render() {

    console.log(this.state.checkout);

    return (
      <div>
        <ShopContext.Provider
          value={{
            ...this.state,
            fetchAllProducts: this.fetchAllProducts,
            fetchProductWithHandle: this.fetchProductWithHandle,
            addItemToCheckout: this.addItemToCheckout,
            removeLineItem: this.removeLineItem,
            closeCart: this.closeCart,
            openCart: this.openCart,
            closeMenu: this.closeMenu,
            openMenu: this.openMenu
          }}
        >
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