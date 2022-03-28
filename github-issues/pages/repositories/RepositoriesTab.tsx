import { NavBar } from "../../components/Navbar";
import { RepositoriesList } from "../../components/RepositoriesList";
import { useRepositoriesTabState } from "./useRepositoriesTabState";

export const RepositoriesTab = () => {
  const { data, isLoading, errorMessage, isEmpty, setData, setKeyword } =
    useRepositoriesTabState();
  console.log(data);
  return (
    <>
      <NavBar setKeyword={setKeyword} />
      <RepositoriesList
        data={data}
        isLoading={isLoading}
        errorMessage={errorMessage}
        isEmpty={isEmpty}
      />
    </>
  );
};
