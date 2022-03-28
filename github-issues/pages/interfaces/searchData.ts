export interface ISearchRepo{
    name: string,
    full_name: string,
    description: string,
    url: string,
    stargazers_count: number,
    updated_at: string,
    language: string,
};
export interface ISearchUser{
    id: number,
    avatar_url: string,
    url: string,
    full_name: string,
    description: string,
};