import { useContext } from "react";
import BioContext from "../../contexts/BioContext";

const FamilyInfo = () => {
	const { bio } = useContext(BioContext);
	const familyStatus = bio?.familyStatus || null;
	console.log("family-info~", familyStatus);
	return (
		<div className="w-auto border-t-2 rounded shadow single-bio-family-info">
			<h5 className="my-3 text-2xl text-center card-title">পারিবারিক তথ্য</h5>
			<table className="w-full table-auto">
				<thead>
					{familyStatus?.isFatherAlive && (
						<tr className="border-t border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								আপনার পিতা কি জীবিত?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{" "}
								{familyStatus?.isFatherAlive}
							</td>
						</tr>
					)}
				</thead>
				<tbody>
					{/* <tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">পিতার নাম </td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.father_name}
						</td>
					</tr> */}
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">পিতার পেশার বিবরণ</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.father_occupation}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">আপনার মাতা কি জীবিত?</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.isMotherAlive}
						</td>
					</tr>
					{/* <tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">মাতার নাম </td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.mother_name}
						</td>
					</tr> */}
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">মাতার পেশার বিবরণ</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.mother_occupation}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">আপনার কতজন ভাই আছে?</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.number_of_brothers}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">ভাইদের তথ্য</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.brother_info}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">আপনার কতজন বোন আছে?</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.number_of_sisters}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">বোনদের তথ্য</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.sister_info}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">চাচা মামাদের পেশা</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.uncle_info}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">
							পারিবারিক অর্থনৈতিক অবস্থা
						</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.eco_condition_type}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">
							অর্থনৈতিক অবস্থার বর্ণনা
						</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.family_eco_condition}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">
							পারিবারিক দ্বীনি পরিবেশ কেমন?
						</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.family_deeni_info}
						</td>
					</tr>
					<tr className="border-b">
						<td className="w-1/2 px-4 py-2 text-left">
							পরিবারে/বাসায় পর্দার পরিবেশ নিছিট করতে পারবেন?
						</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{familyStatus?.isPordaEnvironment === 1 ? "ইনশাআল্লাহ" : "না"}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default FamilyInfo;
