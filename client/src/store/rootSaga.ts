import { all } from 'redux-saga/effects';

import { githubReposSaga } from './sagas';

export function* rootSaga() {
  yield all([
    githubReposSaga,
  ]);
}