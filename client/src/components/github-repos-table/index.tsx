import React, { FC, memo } from "react";

import "./index.scss";
import { GithubRepo } from "@store/types";

export interface GithubReposTableProps {
  headColumns: string[];
  bodyData: GithubRepo[];
}

const GithubReposTalbe: FC<GithubReposTableProps> = ({
  headColumns,
  bodyData,
}) => {
  return (
    <div className="GithubReposTableContainer">
      <table className="GithubReposTable">
        <thead className="GithubReposTable-head">
          <tr>
            {headColumns.map((col, index) => (
              <th key={index} className="GithubReposTable-th">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {!!bodyData.length ? (
            bodyData.map((row) => (
              <tr key={row.id} className="GithubReposTable-bodyTr">
                <td className="GithubReposTable-td">{row.id}</td>
                <td className="GithubReposTable-td">{row.name}</td>
                <td className="GithubReposTable-td">{row.stargazers_count}</td>
                <td className="GithubReposTable-td">{row.language}</td>
                <td className="GithubReposTable-td">{row.html_url}</td>
              </tr>
            ))
          ) : (
            <tr className="GithubReposTable-bodyTr">
              <td
                colSpan={headColumns.length}
                className="GithubReposTable-td GithubReposTable-empty"
              >
                Empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const MemoizedGithubReposTable = memo(GithubReposTalbe);

export { MemoizedGithubReposTable as GithubReposTable };
