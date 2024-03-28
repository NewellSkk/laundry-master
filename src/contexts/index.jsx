/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartCtxProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const handleUpdateItems = (items) => {
		setItems(items);
	};

	const cartCtxValue = {
		items,
		handleUpdateItems,
	};

	return (
		<CartContext.Provider value={cartCtxValue}>
			{children}
		</CartContext.Provider>
	);
};

const useCartCtx = () => {
	const cartCtx = useContext(CartContext);

	if (!cartCtx) throw new Error("Called Cart Context outside its provider");

	return cartCtx;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCartCtx;
