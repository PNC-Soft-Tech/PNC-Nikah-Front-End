/* eslint-disable react/prop-types */
// src/contexts/BioContext.js

import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { BioDataServices } from "../services/bioData";

// Create a new context instance
const BioContext = createContext();

// Create a provider component to wrap your app
export const BioProvider = ({ children }) => {
	const [bio, setBio] = useState(null);
	const [query, setQuery] = useState({});

	//! get all bio datas
	const {
		isLoading: bioLoading = false,
		error: bioError,
		data: bios,
	} = useQuery({
		queryKey: ["bioData", "generalInfo", query],
		queryFn: async () => {
			return await BioDataServices.getALLGeneralInfo(query);
		},
	});
	const value = {
		bio,
		setBio,
		bios: bios?.data,
		bioLoading,
		bioError,
		setQuery,
	};
	console.log("Bios~", bios);

	return <BioContext.Provider value={value}>{children}</BioContext.Provider>;
};

export default BioContext;
