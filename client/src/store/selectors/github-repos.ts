import { createSelector } from "reselect";

import { RootState } from "@store";

const repos = (state: RootState) => state.githubRepos.data;

const errorAndMessage = (state: RootState) => ({
  error: state.githubRepos.error,
  message: state.githubRepos.message,
});

export const selectGithubRepos = createSelector([repos], data => data);

export const selectGithubReposErrorAndMessage = createSelector([errorAndMessage], data => data);
