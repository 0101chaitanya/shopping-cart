import { useHistory } from "react-router-dom";
const Buy = (props) => {
  const redirect = useHistory();
  setTimeout(() => {
    redirect.push("/");
  }, 4000);
  return <div>Thanks for shopping . CU later</div>;
};
export default Buy;
