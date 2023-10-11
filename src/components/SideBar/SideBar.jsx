/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card } from "@material-tailwind/react";

import { BioDataTab } from "../BioDataTab/BioDataTab";

export function SideBar({ setQuery }) {
	return (
		<Card className="h-[calc(100vh - 2rem)] w-[20rem]  py-5 shadow-xl shadow-blue-gray-900/5">
			<BioDataTab setQuery={setQuery} />
		</Card>
	);
}
