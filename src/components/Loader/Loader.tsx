import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";


const Loader = (): JSX.Element => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#d9ae94"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;