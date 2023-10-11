import { useQuery } from "@tanstack/react-query";
import BioDatasGrid from "../../components/BioDatasGrid/BioDatasGrid";
import { SideBar } from "../../components/SideBar/SideBar";
import { BioDataServices } from "../../services/bioData";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import { useContext, useEffect, useState } from "react";
import BioContext from "../../contexts/BioContext";

const BioDatas = () => {
	const { setBioDatas } = useContext(BioContext);
	const [query, setQuery] = useState({});
	const { isLoading, error, data } = useQuery({
		queryKey: ["bioData", "generalInfo", query],
		queryFn: async () => {
			return await BioDataServices.getALLGeneralInfo(query);
		},
	});

	useEffect(() => {
		if (data && data?.data) {
			setBioDatas(data?.data);
		}
	}, [data, setBioDatas]);

	if (error) {
		console.log(error);
	}
	return (
		<div className="flex items-start">
			<SideBar setQuery={setQuery} />
			{isLoading ? <LoadingBioData /> : <BioDatasGrid />}
		</div>
	);
};

export default BioDatas;
