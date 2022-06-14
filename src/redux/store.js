//---------delete save to local storage------------
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
//
//-----with saving to local storage--------------
//
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import phonebookReducer from './phonebook/phonebook-reducer';
// import logger from 'redux-logger';

// const persistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   phonebook: persistReducer(persistConfig, phonebookReducer),
// });

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });

// const persistor = persistStore(store);

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };
//
