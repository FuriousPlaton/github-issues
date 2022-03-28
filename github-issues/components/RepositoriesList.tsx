import { Wrapper2 } from "../styles/ListItem.styled";
import { RepoListItem } from "./RepoListItem";
import { UserRepositoriesListItem } from "./UserRepositoriesListItem";

export const RepositoriesList = ({
  data,
  isLoading,
  errorMessage,
  isEmpty,
}: any) => {
  console.log(data);

  const dataArray = Array.from(data);
  //@ts-ignore
  return (
    //@ts-ignore
    <Wrapper2>
      {dataArray.map((item) =>
        item.repo ? (
          <RepoListItem item={item}></RepoListItem>
        ) : (
          <UserRepositoriesListItem item={item}></UserRepositoriesListItem>
        )
      )}
    </Wrapper2>
  );
};
