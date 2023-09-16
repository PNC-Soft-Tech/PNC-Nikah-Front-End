import BioInfo from "../../components/BioInfo/BioInfo";
import AddressInfo from "../../components/AddressInfo/AddressInfo";
import EducationInfo from "../../components/EducationalInfo/EducationalInfo";
import BioInfoButton from "../../components/BioInfoButton/BioInfoButton";
import BioDataStat from "../../components/BioDataStat/BioDataStat";
import FamilyInfo from "../../components/FamilyInfo/FamilyInfo";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import ProfessionalInfo from "../../components/ProfessionalInfo/ProfessionalInfo";
import MaritalInfo from "../../components/MaritalInfo/MaritalInfo";
import ExpectedPartner from "../../components/ExpectedPartner/ExpectedPartner";
import OngikarNama from "../../components/OngikarNama/OngikarNama";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./BioData.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BioDataServices } from "../../services/bioData";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import { useContext, useEffect } from "react";
import BioContext from "../../contexts/BioContext";
import { ScrollToTop } from "../../constants/ScrolltoTop";

const BioData = () => {
  const { id } = useParams();
  const { setBio } = useContext(BioContext);
  console.log(id);
  const { isLoading, error, data } = useQuery({
    queryKey: ["bio-data", id],
    queryFn: async () => {
      return await BioDataServices.getBioData(id);
    },
  });

  useEffect(() => {
    if (data && data?.data) {
      setBio(data?.data?.data);
    }
  }, [data, setBio]);

  if (isLoading) {
    return <LoadingBioData />;
  }

  console.log(data);

  return (
    <div className=" py-12 w-full  ">
      <ScrollToTop />
      <div className="grid lg:grid-cols-[30%,70%] md:grid-cols-[50%,50%] grid-cols-1 ">
        <div className="col px-2 single-bio-left-sidebar">
          <BioInfo />
          <div className="h-5"></div>
          <BioInfoButton />
          <div className="h-5"></div>
          <BioDataStat />
          {/*<!-- End of Single Bio STATS Section  -->*/}
        </div>
        <div className="col px-2  single-bio-right-sidebar">
          <AddressInfo />
          <hr />
          <div className="h-5"></div>
          <EducationInfo />

          <div className="h-5"></div>
          <FamilyInfo />

          <div className="h-5"></div>
          <PersonalInfo />
          <div className="h-5"></div>
          <ProfessionalInfo />
          {/*<!-- End of Occupational Info  -->*/}
          <div className="h-5"></div>
          <MaritalInfo />

          <div className="h-5"></div>

          <ExpectedPartner />
          {/*<!-- End of Expected Lifepartner  -->*/}
          <div className="h-5"></div>
          <OngikarNama />

          <div className="h-5"></div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default BioData;
