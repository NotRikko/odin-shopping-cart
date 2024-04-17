import {createContext, useState, useContext} from 'react'


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            name: 'Biboo',
            cost: 125,
            amount: 4,
            image: 'https://preview.redd.it/bijou-theres-something-weird-about-biboo-today-v0-hk3vkrzao9zb1.png?auto=webp&s=efed8226766cd72e291d005044f0c898216b2287',
        },
        {
            name: 'Biboo',
            cost: 150,
            amount: 1,
            image: 'https://preview.redd.it/bijou-theres-something-weird-about-biboo-today-v0-hk3vkrzao9zb1.png?auto=webp&s=efed8226766cd72e291d005044f0c898216b2287',
        }
    ])
    
    const totalCost = cartItems.reduce((total, item) => {
        return total + (item.cost * item.amount);
    }, 0);

    const addCartItem = (product, amount) => {
        if(cartItems.find(cartItem => cartItem.name === product.title)) {
            const updateItem = cartItems.find(cartItem => cartItem.name === product.title);
            updateItem.amount = updateItem.amount + amount;
            console.log(updateItem)
        } else {
            const newCartItem = {
                name: product.title,
                cost: product.price,
                amount: amount,
                image: product.image
            }
            setCartItems(prevCartItems => [...prevCartItems, newCartItem])
        }
    }

    const handleItemAmount = (index, newAmount) => {
        if(isNaN(newAmount)) {
            newAmount = 1;
        }
        const updatedCartItems = [...cartItems];
        updatedCartItems[index] = {
            ...updatedCartItems[index],
            amount: newAmount
        }
        setCartItems(updatedCartItems);
    };
    return (
        <CartContext.Provider value={{ cartItems, totalCost, addCartItem, handleItemAmount }}>
          {children}
        </CartContext.Provider>
      );
};

export const useCart = () => {
    return useContext(CartContext);
}

  