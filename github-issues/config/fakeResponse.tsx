import { ISearchRepo, ISearchUser } from "../pages/interfaces/searchData";

export const fakeUserResponse: ISearchUser = {
  id: 34,
  avatar_url: "#",
  url: "#",
  full_name: "Linux",
  description: "qwe",
};

export const fakeRepoResponse: ISearchRepo = {
  name: "Linux",
  full_name: "LinuxLINUX",
  description: "qwee",
  url: "%",
  stargazers_count: 34,
  updated_at: "2022",
  language: "Java",
};
