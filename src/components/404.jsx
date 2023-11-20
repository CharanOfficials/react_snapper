import Styles from "../styles/404.module.css";
const Error = () => {
  return (
    <div className={Styles.body}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for might be in another castle.</p>
    </div>
  );
};
export default Error;
