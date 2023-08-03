import { all, put } from 'redux-saga/effects';

import { loadGithubRepos, loadGithubRepo, syncWithGithub } from '@store/actions';

function* handleLoadGithubRepos() {
  yield put(loadGithubRepos.pending);

  try {
    yield put(loadGithubRepos.fulfilled);
  } catch (error) {
    yield put(loadGithubRepos.rejected);
  }
}

function* handleLoadGithubRepo() {
  yield put(loadGithubRepo.pending);

  try {
    yield put(loadGithubRepo.fulfilled);
  } catch (error) {
    yield put(loadGithubRepo.rejected);
  }
}

function* handleSyncWithGitHub() {
  yield put(syncWithGithub.pending);

  try {
    yield put(syncWithGithub.fulfilled);
  } catch (error) {
    yield put(syncWithGithub.rejected);
  }
}

export function* githubReposSaga() {
  yield all([
    handleLoadGithubRepos,
    handleLoadGithubRepo,
    handleSyncWithGitHub
  ]);
};