import { combineReducers } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { githubReposReducer } from './reducers';

export const rootReducer = combineReducers({
  githubRepos: githubReposReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
