import {
  Description,
  FullName,
  Language,
  Name,
  StargazersCount,
  UpdatedAt,
  Url,
  Wrapper,
} from "../styles/ListItem.styled";

export const RepoListItem = ({ item }: any) => {
  return (
    <Wrapper>
      <Name>{item.name}</Name>
      <FullName>{item.full_name}</FullName>
      <Description>{item.description}</Description>
      <Url>{item.url}</Url>
      <StargazersCount>{item.stargazers_count}</StargazersCount>
      <UpdatedAt>{item.updated_at}</UpdatedAt>
      <Language>{item.language}</Language>
    </Wrapper>
  );
};
