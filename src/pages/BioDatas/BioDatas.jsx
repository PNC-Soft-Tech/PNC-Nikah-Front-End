import BioDatasGrid from "../../components/BioDatasGrid/BioDatasGrid";
import { SideBar } from "../../components/SideBar/SideBar";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import { useContext} from "react";
import BioContext from "../../contexts/BioContext";

const BioDatas = () => {
	const { bioLoading } = useContext(BioContext);

	return (
		<div className="flex items-start">
			<SideBar />
			{bioLoading ? <LoadingBioData /> : <BioDatasGrid />}
		</div>
	);
};

export default BioDatas;
