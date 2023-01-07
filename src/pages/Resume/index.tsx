import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>简易的服务器端渲染 - HOME</title>
        <meta name="description" content="服务器端渲染"></meta>
      </Helmet>
      <div>
        Resume
        <a href="http://127.0.0.1:3535/">链接跳转</a>
        <span
          onClick={(): void => {
            navigate("/");
          }}
        >
          路由跳转
        </span>
      </div>
    </>
  );
};

export default Resume;
