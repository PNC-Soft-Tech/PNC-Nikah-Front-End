/* eslint-disable react/prop-types */
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Colors } from "../../constants/colors";

const animatedComponents = makeAnimated();

export default function MultipleSelect({
	options,
	title,
	subtitle,
	value,
	setValue,
}) {
	console.log(value);
	return (
		<div className="text-left">
			{title && (
				<label className="block mb-2 font-bold text-left text-gray-500">
					{title}
				</label>
			)}
			<Select
				closeMenuOnSelect={false}
				onChange={(val) => setValue(val)}
				value={value}
				components={animatedComponents}
				isMulti
				options={options}
				className="z-40 text-left"
			/>
			{subtitle && (
				<p
					style={{ color: Colors.pncPrimaryColor }}
					className="block my-2 font-bold text-left text-gray-500"
				>
					{subtitle}
				</p>
			)}
		</div>
	);
}
