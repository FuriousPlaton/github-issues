import { useFormik } from "formik";

export const SearchForm = ({ setKeyword }: any) => {
  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: (values) => {
      setKeyword(values.keyword);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="keyword"></label>
      <input
        id="keyword"
        name="keyword"
        type="keyword"
        onChange={formik.handleChange}
        value={formik.values.keyword}
      />
    </form>
  );
};
