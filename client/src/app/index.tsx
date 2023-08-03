import React, { FC } from "react";

import { ApiMessage, PageLayout } from "@components";
import { GithubReposContainer } from "@containers";
import { useAppSelector } from "@store";
import { selectGithubReposErrorAndMessage } from "@store/selectors";
import "./index.scss";

export const App: FC = () => {
  const select = useAppSelector(selectGithubReposErrorAndMessage);

  return (
    <>
      <div
        className={`App-error ${
          (!!select.error || !!select.message) && "App-error_visible"
        }`}
      >
        <ApiMessage error={select.error} message={select.message} />
      </div>

      <PageLayout>
        <h1 className="App-h1">JetRuby Agency</h1>
        <h2 className="App-h2">Test Task for NodeJS Knowledge</h2>
        <GithubReposContainer />
      </PageLayout>
    </>
  );
};
