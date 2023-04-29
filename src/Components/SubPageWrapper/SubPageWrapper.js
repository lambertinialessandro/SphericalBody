import HeaderSubPage from "../HeaderSubPage/HeaderSubPage";

function SubPageWrapper({ children }) {
  return (
    <>
      <HeaderSubPage />
      {children}
    </>
  );
}

export default SubPageWrapper;
