// src/app/page.js
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setCart, clearCart } from '@/store/slice/userSlice';
import { useEffect, useState } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fruit Shop</h1>
      <p>Cart: {cart || 'Empty'}</p>
      <button onClick={() => dispatch(setCart('Mango'))}>Add Mango</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}