/* eslint-disable react/prop-types */
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import Textarea from "../Textarea/Textarea";
import { useState } from "react";
import { BioChoiceDataServices } from "../../services/bioChoiceData";
import { getToken } from "../../utils/cookies";
import { Toast } from "../../utils/toast";
import { getErrorMessage } from "../../utils/error";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

export function FeedbackModal({
	title,
	open,
	setOpen,
	id,
	refetch,
	feedbackData,
}) {
	const [loading, setLoading] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [feedback, setFeedback] = useState("");
	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await BioChoiceDataServices.updateBioChoiceData(
				id,
				{
					feedback,
				},
				getToken().token
			);
			if (response?.success === true) {
				Toast.successToast("আপনার ফিডব্যাক সেভ করা হয়েছে।");
			}
			setLoading(false);
			setOpen(false);
			await refetch();
		} catch (error) {
			const msg = getErrorMessage(error);
			Toast.errorToast(msg);
			setLoading(false);
			setOpen(false);
		}
	};
	// console.log({ id });
	return (
		<>
			<Dialog size="lg" open={open} handler={handleOpen}>
				<DialogHeader>{title}</DialogHeader>
				<DialogBody>
					{feedbackData ? (
						<div>
							<p className="mb-5 text-xl font-semibold">{feedbackData}</p>
							<button
								onClick={handleOpen}
								className="px-4 py-1 text-white bg-green-800 rounded-md hover:bg-green-600"
							>
								Ok
							</button>
						</div>
					) : (
						<form action="" onSubmit={submitHandler}>
							<Textarea
								value={feedback}
								setValue={setFeedback}
								title="আপনি ফিডব্যাক দেন তার বায়োডাটা সম্পর্কে"
							/>
							<div className="flex justify-between my-5">
								<button
									onClick={handleOpen}
									className="px-4 py-1 text-white bg-red-800 rounded-md hover:bg-red-600"
								>
									Cancel
								</button>
								<button className="px-4 py-1 text-white bg-green-800 rounded-md hover:bg-green-600">
									{loading ? <LoadingCircle /> : "Add Feedback"}
								</button>
							</div>
						</form>
					)}
				</DialogBody>
			</Dialog>
		</>
	);
}

// <DialogFooter>
// 					<Button
// 						variant="text"
// 						color="red"
// 						onClick={handleOpen}
// 						className="mr-1"
// 					>
// 						<span>Cancel</span>
// 					</Button>
// 					<Button variant="gradient" color="green" onClick={handleOpen}>
// 						<span>Ok</span>
// 					</Button>
// 				</DialogFooter>
