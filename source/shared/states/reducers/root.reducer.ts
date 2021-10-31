import { combineReducers } from 'redux';
import productReducer from '../../../modules/product/state/reducers/product.reducer';
import wishlistReducer from '../../../modules/wishlist/state/reducers/wishlist.reducer';

const rootReducer = combineReducers({
    products: productReducer,
    wishlist: wishlistReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;