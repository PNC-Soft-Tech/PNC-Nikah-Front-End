import React, { useContext, useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import BioContext from "../../contexts/BioContext";

export function Pagination() {
	const [active, setActive] = React.useState(1);
	const { setQuery, limit, size } = useContext(BioContext);

	const totalPage = Math.ceil(size / limit);

	console.log("total-page~", totalPage, size / limit);
	const paginationSize = new Array(totalPage);
	paginationSize.fill(1);
	console.log("paginationSize~", paginationSize);

	useEffect(() => {
		setQuery((prev) => {
			return {
				...prev,
				page: active,
				limit: limit,
			};
		});
	}, [active, limit, setQuery]);

	const getItemProps = (index) => ({
		variant: active === index ? "filled" : "text",
		color: "gray",
		onClick: () => setActive(index),
		className: "rounded-full",
	});

	const next = () => {
		if (active === 5) return;

		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;

		setActive(active - 1);
	};

	return (
		<div className="flex items-center justify-center gap-4 py-5">
			<Button
				variant="text"
				className="flex items-center gap-2 rounded-full"
				onClick={prev}
				disabled={active === 1}
			>
				<ArrowLeftIcon strokeWidth={2} className="w-4 h-4" /> Previous
			</Button>
			<div className="flex items-center gap-2">
				{paginationSize.map((_, index) => {
					return (
						<IconButton key={index} {...getItemProps(index + 1)}>
							{index + 1}
						</IconButton>
					);
				})}

				{/* <IconButton {...getItemProps(2)}>2</IconButton>
				<IconButton {...getItemProps(3)}>3</IconButton>
				<IconButton {...getItemProps(4)}>4</IconButton>
				<IconButton {...getItemProps(5)}>5</IconButton> */}
			</div>
			<Button
				variant="text"
				className="flex items-center gap-2 rounded-full"
				onClick={next}
				disabled={active === paginationSize}
			>
				Next
				<ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
			</Button>
		</div>
	);
}
