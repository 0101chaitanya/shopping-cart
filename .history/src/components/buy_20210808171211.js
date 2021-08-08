import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Buy = (props) => {
  const { reset } = useGlobalContext();
  const redirect = useHistory();
  useEffect(() => {
    reset();
  }, []);

  setTimeout(() => {
    redirect.push("/");
    reset();
  }, 4000);
  return <div>Thanks for shopping . CU later</div>;
};
export default Buy;
