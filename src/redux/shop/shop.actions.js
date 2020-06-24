import ShopActionTypes from './shop.types';
// import 

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload:collectionsMap
})