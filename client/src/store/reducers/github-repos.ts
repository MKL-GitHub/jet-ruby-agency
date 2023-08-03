import { createSlice, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { loadGithubRepo, loadGithubRepos, syncWithGithub } from '@store/actions';
import { GithubRepo, GithubReposState } from '@store/types';

const initialState: GithubReposState = {
  data: [],
  loading: false,
  error: null,
  message: null,
};

const reducers = {};

const extraReducers = (builder: ActionReducerMapBuilder<GithubReposState>) => {
  builder
    // Load all repositories
    .addCase(loadGithubRepos.pending, state => {
      state.loading = true;
      state.error = null;
      state.message = null;
    })
    .addCase(loadGithubRepos.fulfilled, (state, action: PayloadAction<GithubRepo[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(loadGithubRepos.rejected, (state, action: any) => {
      state.data = [];
      state.loading = false;
      state.error = action.error.message;
    })

    // Load one repository
    .addCase(loadGithubRepo.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loadGithubRepo.fulfilled, (state, action: PayloadAction<GithubRepo>) => {
      state.data = [action.payload];
      state.loading = false;
      state.error = null;
    })
    .addCase(loadGithubRepo.rejected, (state, action: any) => {
      state.data = [];
      state.loading = false;
      state.error = action.error.message;
      state.message = null;
    })

    // Sync with GitHub
    .addCase(syncWithGithub.pending, state => {
      state.loading = true;
      state.error = null;
      state.message = null;
    })
    .addCase(syncWithGithub.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    })
    .addCase(syncWithGithub.rejected, (state, action: any) => {
      console.log(action)
      state.data = [];
      state.loading = false;
      state.error = action.error.message;
    })
}

const githubReposSlice = createSlice({
  name: 'github-repos',
  initialState,
  reducers,
  extraReducers,
});

export const { } = githubReposSlice.actions;

export const githubReposReducer = githubReposSlice.reducer;