import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import productsSlice from './products/productsSlice';
import categoriesSlice from './categories/categoriesSlice';
import ordersSlice from './orders/ordersSlice';
import reviewsSlice from './reviews/reviewsSlice';
import promo_codesSlice from './promo_codes/promo_codesSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    products: productsSlice,
    categories: categoriesSlice,
    orders: ordersSlice,
    reviews: reviewsSlice,
    promo_codes: promo_codesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
