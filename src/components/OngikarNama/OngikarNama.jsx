import BioContext from "../../contexts/BioContext";
import { useContext } from "react";
const OngikarNama = () => {
	const { bio } = useContext(BioContext);
	const ongikarNama = bio?.ongikarNama || null;
	return (
		<div className="single-bio-ongikar-info rounded shadow">
			<h5 className="card-title text-center text-2xl my-3">অঙ্গীকারনামা</h5>
			<table className="table-auto w-full">
				<thead>
					<tr className="border-b border-t">
						<td className="px-4 py-2 text-left  w-1/2">
							PNC-Nikah.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন, তা আপনার অভিভাবক
							জানেন?
						</td>
						<td className="px-4 py-2 text-left  w-1/2 border-l">
							{ongikarNama?.is_family_know}{" "}
						</td>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b">
						<td className="px-4 py-2 text-left  w-1/2">
							আল্লাহ`&lsquo;`র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব সত্য?
						</td>
						<td className="px-4 py-2 text-left  w-1/2 border-l">
							{ongikarNama?.isTrueData}
						</td>
					</tr>
					<tr className="border-b">
						<td className="px-4 py-2 text-left  w-1/2">
							কোনো মিথ্যা তথ্য প্রদান করলে দুনিয়াবী আইনগত এবং আখিরাতের দায়ভার
							PNC-Nikah.com কর্তৃপক্ষ নিবে না। আপনি কি সম্মত?
						</td>
						<td className="px-4 py-2 text-left  border-l">
							{ongikarNama?.isAgree}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default OngikarNama;
