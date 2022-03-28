import { AxiosResponse } from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { getRepositories } from "../../config/RepoService";

export const useRepositoriesTabState = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const setError = (error: SetStateAction<null>) => {
      setIsEmpty(false);
      setErrorMessage(error);
    };

    const setEmpty = () => {
      setIsEmpty(true);
      setErrorMessage(null);
    };

    // const setDatas = () => {
    //   setData(data);
    //   setIsEmpty(false);
    //   setErrorMessage(null);
    // };
    setIsLoading(true);
    //@ts-ignore
    getRepositories(keyword)
      .then((data) => {
        setIsLoading(false);
        //@ts-ignore
        setData(data);
        console.log(data);
      })
      .catch((error: SetStateAction<null>) => {
        setError(error);
        setIsLoading(false);
      });
  }, [keyword]);

  return {
    data,
    isLoading,
    errorMessage,
    isEmpty,
    setData,
    setKeyword,
  };
};
