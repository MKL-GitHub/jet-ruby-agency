export interface GithubRepo {
  id: number,
  name: string,
  stargazers_count: number,
  language: string,
  html_url: string,
  description: string,
}

export interface GithubReposState {
  data: GithubRepo[];
  loading: boolean;
  error: string | null;
  message: string | null;
}