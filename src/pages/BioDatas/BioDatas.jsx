import { useQuery } from "@tanstack/react-query";
import BioDatasGrid from "../../components/BioDatasGrid/BioDatasGrid";
import { SideBar } from "../../components/SideBar/SideBar";
import { BioDataServices } from "../../services/bioData";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import { useContext, useEffect } from "react";
import BioContext from "../../contexts/BioContext";

const BioDatas = () => {
  const { setBioDatas } = useContext(BioContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ["bioData", "generalInfo"],
    queryFn: async () => {
      return await BioDataServices.getALLGeneralInfo();
    },
  });

  useEffect(() => {
    if (data && data?.data) {
      setBioDatas(data?.data?.data);
    }
  }, [data, setBioDatas]);

  if (error) {
    console.log(error);
  }
  return (
    <div className="flex items-start">
      <SideBar />
      {isLoading ? <LoadingBioData /> : <BioDatasGrid />}
    </div>
  );
};

export default BioDatas;
