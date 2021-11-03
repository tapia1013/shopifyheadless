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
    const checkout = await client.checkout.create()
    // save to localstorage
    localStorage.setItem("checkout_id", checkout.id);
    // update state
    this.setState({ checkout: checkout });
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
    ]

    // addLineItems is provided by shopify...add item to checkout
    const checkout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd)

    // update state
    this.setState({ checkout: checkout })

    // open cart whenever new lineitem is added
    this.openCart();
  }


  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(checkout.id, lineItemIdsToRemove)

    this.setState({ checkout: checkout })
  }

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products })
  }

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle)
    this.setState({ product: product })
  }





  closeCart = () => {
    this.setState({ isCartOpen: false })
  }

  openCart = () => {
    this.setState({ isCartOpen: true })
  }

  closeMenu = async () => {
    this.setState({ isCartOpen: false })
  }

  openMenu = async () => {
    this.setState({ isCartOpen: true })
  }


  render() {

    // console.log(this.state.checkout);

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
          }}>
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