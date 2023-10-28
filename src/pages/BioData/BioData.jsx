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
import { ContactServices } from "../../services/contact";
import { UserInfoServices } from "../../services/userInfo";
import { getToken } from "../../utils/cookies";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import { useContext, useEffect } from "react";
import BioContext from "../../contexts/BioContext";
import UserContext from "../../contexts/UserContext";
import { ScrollToTop } from "../../constants/ScrolltoTop";

const BioData = () => {
	const { id } = useParams();
	const { setBio } = useContext(BioContext);
	const { userInfo } = useContext(UserContext);

	console.log(id);
	const { isLoading, error, data } = useQuery({
		queryKey: ["bio-data", id],
		queryFn: async () => {
			return await BioDataServices.getBioData(id);
		},
	});
	const { data: userStatus = null } = useQuery({
		queryKey: ["bio-data", "status", id],
		queryFn: async () => {
			return await UserInfoServices.getUserInfoStatus(id);
		},
	});
	const { data: contact = null, isLoading: contactLoading } = useQuery({
		queryKey: ["bio-data", "contact", id, userInfo?.data[0].id],
		queryFn: async () => {
			return await ContactServices.getContactForBuyer(
				userInfo?.data[0]?.id,
				id,
				getToken().token
			);
		},
	});

	console.log("contact-bio-user~", contact);
	console.log("user-info-status~", userStatus);

	useEffect(() => {
		if (data && data?.data) {
			setBio(data?.data?.data);
		}
	}, [data, setBio]);

	if (isLoading) {
		return <LoadingBioData />;
	}

	// console.log(data);
	// console.log(error);

	return (
		<div className=" py-12 w-full  ">
			<ScrollToTop />
			<div className="grid text-[16px] lg:grid-cols-[30%,70%] md:grid-cols-[50%,50%] grid-cols-1 ">
				<div className="col px-2 single-bio-left-sidebar">
					<BioInfo />
					<div className="h-5"></div>
					<BioInfoButton />
					<div className="h-5"></div>
					<BioDataStat id={id} />
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
					<ContactInfo contact={contact?.data} status={userStatus?.data} />
				</div>
			</div>
		</div>
	);
};

export default BioData;
