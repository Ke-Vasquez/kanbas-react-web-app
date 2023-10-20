import ModuleList from "../Modules";
import Status from "./Status";

function Home() {
  return (
    <div className="d-flex">
      <div className="p-2 w-75">
      <ModuleList />
      </div>
      <div>
        <Status/>
      </div>
    </div>
  );
}
export default Home;