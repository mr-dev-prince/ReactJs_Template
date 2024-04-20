import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh] text-6xl flex-col gap-10 ">
      Template by: <span className="uppercase "> Prince Kumar Chaurasia</span>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/princechaurasia/"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default App;
