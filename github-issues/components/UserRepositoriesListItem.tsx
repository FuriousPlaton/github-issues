import {
  FullName,
  Name,
  Wrapper,
  Description,
  Stars,
  LastModify,
  Language,
} from "../styles/ListItem.styled";

export const UserRepositoriesListItem = ({ item }: any) => {
  return (
    <Wrapper>
      <Name>{item.name}</Name>
      <FullName>{item.fullName}</FullName>
      <Description>{item.description}</Description>
      <Stars>{item.stars}</Stars>
      <LastModify>{item.lastModify}</LastModify>
      <Language>{item.lang}</Language>
    </Wrapper>
  );
};
