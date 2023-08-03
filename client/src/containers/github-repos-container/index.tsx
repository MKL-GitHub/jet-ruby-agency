import React, { FC, useState } from "react";

import { GithubReposTable } from "@components";
import { useAppDispatch, useAppSelector } from "@store";
import { selectGithubRepos } from "@store/selectors";
import {
  loadGithubRepo,
  loadGithubRepos,
  syncWithGithub,
} from "@store/actions";
import "./index.scss";

const headColumns = ["id", "name", "stars", "language", "html_url"];

export const GithubReposContainer: FC = () => {
  const appDispatch = useAppDispatch();
  const repos = useAppSelector(selectGithubRepos);

  const [nameOrId, setNameOrId] = useState<string>("");

  const onGetAllRepos = () => {
    appDispatch(loadGithubRepos());
  };

  const onGetRepo = () => {
    appDispatch(loadGithubRepo(nameOrId.trim()));
  };

  const onSync = () => {
    appDispatch(syncWithGithub());
  };

  return (
    <div className="GithubReposContainer">
      <div className="GithubReposContainer-apiBtns">
        <button
          className="GithubReposContainer-syncWidthGitHub"
          onClick={onSync}
        >
          Sync
        </button>

        <button
          className="GithubReposContainer-getAllRepos"
          onClick={onGetAllRepos}
        >
          Get All
        </button>

        <div className="GithubReposContainer-getRepo">
          <button disabled={!nameOrId.length} onClick={onGetRepo}>
            Get One
          </button>
          <input
            type="text"
            placeholder="Enter name or id"
            value={nameOrId}
            onChange={(e) => setNameOrId(e.target.value)}
          />
        </div>
      </div>

      <GithubReposTable headColumns={headColumns} bodyData={repos} />
    </div>
  );
};
