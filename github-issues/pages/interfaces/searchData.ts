export interface ISearchRepo{
    name: string,
    full_name: string,
    description: string,
    url: string,
    stargazers_count: number,
    updated_at: string,
    language: string,
    repo: boolean,
    has_issues: boolean,
    open_issues_count: number,
};
export interface ISearchUser{
    avatar_url: string,
    url: string,
    full_name: string,
    bio: string,
    repo: boolean,
    following: number,
    followers: number,
};