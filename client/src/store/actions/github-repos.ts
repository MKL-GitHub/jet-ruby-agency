import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { GithubRepo } from '@store/types';

const BASE_URL = "http://localhost:5000/api/github-repos/";

export const loadGithubRepo = createAsyncThunk<GithubRepo, string>(
  'github-repo/load',
  async (nameOrId: string) => {
    const url = BASE_URL + 'repos/' + nameOrId;

    const response = await axios.get(url);

    return response.data
  }
);

export const loadGithubRepos = createAsyncThunk<GithubRepo[]>(
  'github-repos/load',
  async () => {
    const url = BASE_URL + 'repos';

    const response = await axios.get(url);

    return response.data;
  }
);

export const syncWithGithub = createAsyncThunk(
  'github-repos/sync',
  async () => {
    const url = BASE_URL + 'sync';

    const response = await axios.post(url);

    return response.data.message;
  }
);