import { useContext } from "react";
import BioContext from "../../contexts/BioContext";

function EducationInfo() {
	const { bio } = useContext(BioContext);
	const educationInfo = bio?.educationQualification || null;
	console.log("educational-info~", educationInfo);

	return (
		<div className="w-auto border-t-2 rounded shadow single-bio-educational-qualification">
			<h5 className="my-3 text-2xl text-center card-title">শিক্ষাগত যোগ্যতা</h5>
			<table className="w-full table-auto">
				<thead>
					<tr className="border-t border-b">
						<td className="w-1/2 px-4 py-2 text-left">আপনার শিক্ষা মাধ্যম</td>
						<td className="w-1/2 px-4 py-2 text-left border-l">
							{educationInfo?.education_medium}
						</td>
					</tr>
				</thead>
				<tbody>
					{educationInfo?.highest_edu_level && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								সর্বোচ্চ শিক্ষাগত যোগ্যতা
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.highest_edu_level}
							</td>
						</tr>
					)}
					{educationInfo?.before_ssc && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								আপনি কোন ক্লাস পর্যন্ত পড়াশুনা করেছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.before_ssc}
							</td>
						</tr>
					)}
					{educationInfo?.ibti_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								ইবতিদাইয়্যাহ কোন মাদ্রাসা থেকে পড়েছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.ibti_inst}
							</td>
						</tr>
					)}
					{educationInfo?.ibti_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.ibti_result}
							</td>
						</tr>
					)}
					{educationInfo?.ibti_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.ibti_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.mutawas_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								মুতাওয়াসসিতাহ কোন মাদ্রাসা থেকে পড়েছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.mutawas_inst}
							</td>
						</tr>
					)}
					{educationInfo?.mutawas_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.mutawas_result}
							</td>
						</tr>
					)}
					{educationInfo?.mutawas_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.mutawas_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.sanabiya_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								সানাবিয়া উলইয়া কোন মাদ্রাসা থেকে পড়েছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.sanabiya_inst}
							</td>
						</tr>
					)}
					{educationInfo?.sanabiya_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.sanabiya_result}
							</td>
						</tr>
					)}
					{educationInfo?.sanabiya_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.sanabiya_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.fozilat_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								ফযীলত কোন মাদ্রাসা থেকে পড়েছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.fozilat_inst}
							</td>
						</tr>
					)}
					{educationInfo?.fozilat_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.fozilat_result}
							</td>
						</tr>
					)}
					{educationInfo?.fozilat_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.fozilat_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.takmil_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								তাকমীল কোন মাদ্রাসা থেকে পড়েছেন? *
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takmil_inst}
							</td>
						</tr>
					)}
					{educationInfo?.takmil_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takmil_result}
							</td>
						</tr>
					)}
					{educationInfo?.takmil_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takmil_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.takhassus_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								তাখাসসুস কোন মাদ্রাসা থেকে পড়েছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takhassus_inst}
							</td>
						</tr>
					)}
					{educationInfo?.takhassus_sub && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">তাখাসসুসের বিষয় </td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takhassus_sub}
							</td>
						</tr>
					)}
					{educationInfo?.takhassus_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takhassus_result}
							</td>
						</tr>
					)}
					{educationInfo?.takhassus_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.takhassus_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.ssc_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								এস.এস.সি / দাখিল / সমমান পাসের সন
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.ssc_year}
							</td>
						</tr>
					)}
					{educationInfo?.ssc_group && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">বিভাগ</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.ssc_group}
							</td>
						</tr>
					)}
					{educationInfo?.ssc_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.ssc_result}
							</td>
						</tr>
					)}
					{educationInfo?.diploma_sub && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								ডিপ্লোমা কোন বিষয়ে পড়েছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.diploma_sub}
							</td>
						</tr>
					)}
					{educationInfo?.diploma_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								শিক্ষাপ্রতিষ্ঠানের নাম
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.diploma_inst}
							</td>
						</tr>
					)}
					{educationInfo?.diploma_running_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								এখন কোন বর্ষে পড়ছেন?
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.diploma_running_year}
							</td>
						</tr>
					)}
					{educationInfo?.diploma_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের বছর</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.diploma_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.after_ssc_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								এইচ.এস.সি / আলিম / সমমান পাসের সন
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.after_ssc_year}
							</td>
						</tr>
					)}
					{educationInfo?.after_ssc_group && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">বিভাগ</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.after_ssc_group}
							</td>
						</tr>
					)}

					{educationInfo?.after_ssc_result && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">ফলাফল</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.after_ssc_result}
							</td>
						</tr>
					)}
					{educationInfo?.hons_sub && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.hons_sub}
							</td>
						</tr>
					)}
					{educationInfo?.hons_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								শিক্ষাপ্রতিষ্ঠানের নাম
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.hons_inst}
							</td>
						</tr>
					)}
					{educationInfo?.hons_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.hons_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.hons_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">কোন বর্ষে পড়ছেন? </td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.hons_year}
							</td>
						</tr>
					)}
					{educationInfo?.msc_sub && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								স্নাতকোত্তর / কামিল পড়াশোনার বিষয়{" "}
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.msc_sub}
							</td>
						</tr>
					)}
					{educationInfo?.msc_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								শিক্ষাপ্রতিষ্ঠানের নাম{" "}
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.msc_inst}
							</td>
						</tr>
					)}
					{educationInfo?.msc_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন </td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.msc_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.phd_sub && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								ডক্টরেট অধ্যয়নের বিষয়{" "}
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.phd_sub}
							</td>
						</tr>
					)}
					{educationInfo?.phd_inst && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								শিক্ষাপ্রতিষ্ঠানের নাম{" "}
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.phd_inst}
							</td>
						</tr>
					)}
					{educationInfo?.phd_pass_year && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">পাসের সন </td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.phd_pass_year}
							</td>
						</tr>
					)}
					{educationInfo?.others_edu && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								অন্যান্য শিক্ষাগত যোগ্যতা{" "}
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.others_edu}
							</td>
						</tr>
					)}
					{educationInfo?.deeni_edu && (
						<tr className="border-b">
							<td className="w-1/2 px-4 py-2 text-left">
								কোনো দ্বীনি শিক্ষাগত যোগ্যতা
							</td>
							<td className="w-1/2 px-4 py-2 text-left border-l">
								{educationInfo?.deeni_edu}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default EducationInfo;
