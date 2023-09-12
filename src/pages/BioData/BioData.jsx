import BioInfo from "../../components/BioInfo/BioInfo";
import AddressInfo from "../../components/AddressInfo/AddressInfo";
import EducationInfo from "../../components/EducationalInfo/EducationalInfo";
import "./BioData.css";

const BioData = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between">
        <div className="">
          <BioInfo />
        </div>
        <div className="">
          <AddressInfo />
          <hr />
          <EducationInfo />
        </div>
      </div>
    </div>
  );
};

export default BioData;
