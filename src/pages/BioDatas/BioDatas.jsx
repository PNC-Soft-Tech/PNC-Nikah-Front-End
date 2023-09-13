import BioDatasGrid from "../../components/BioDatasGrid/BioDatasGrid";
import { SideBar } from "../../components/SideBar/SideBar";

const BioDatas = () => {
  return (
    <div className="flex items-start">
      <SideBar />
      <BioDatasGrid />
    </div>
  );
};

export default BioDatas;
