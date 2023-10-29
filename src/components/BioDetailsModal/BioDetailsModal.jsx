/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import { Colors } from "../../constants/colors";
import { useEffect, useState } from "react";

const questionsHashMap = {
	opinionOnNikhab:
		"মেয়েদের চোখ ঢাকা নিকাব পড়াকে অনেকে বাড়াবাড়ি মনে করে। ইসলাম তো সহজ, আপনি এব্যাপারে কি মনে করেন?",
	salatInRain:
		"প্রচন্ড বৃষ্টি হচ্ছে, মসজিদ যদিও কাছে মোটামুটি। হয়ত ছাতাও আছে যাওয়ার। কিন্তু ইসলাম তো সহজ, এখানে তো রুখসত আছে। কিন্তু অনেক অতি উৎসাহী আছে যারা এসব ঝড়-বৃষ্টি উপেক্ষা করেও যায় মসজিদে। এরকম বাড়াবাড়ি যারা করে তাদের ব্যাপারে আপনার মন্তব্য কি?",
	studyingAtUniversity:
		"ছেলেদের ইউনিভার্সিটিতে পড়াশুনা করার ব্যাপারে আপনার মতামত কি?",
	startingUniv:
		"অমুক তার ছেলেকে ভার্সিটিতে ভর্তি হতে দিতে চায় না কারন ইসলামী পরিবেশ পাবে না। এরকম বাড়াবাড়ির ব্যাপারে আপনার মতামত কি?",
	onlineModeling:
		"পর্দা করে অনলাইনে হিজাব নিকাবের ব্যাবসা তো হালাল।ভিডিও(মডেলিং) বানিয়ে তা দিয়ে একটা আউটসোর্সিং বা ব্যবসা করতে চাইলে আপনার থেকে কোনো হেল্প পেতে পারি? বা পারমিশন পেতে পারি?",
	malePhotoCapture:
		"অনেক দ্বীনদার মেয়ে ভার্সিটিতে পড়াশুনা করতে চায় এজন্য তাদের দ্বিনি পরিবেশ খুঁজে|শুরুতে জেনেশুনে মেয়েদের জন্য ভার্সিটিতে পড়তে চাওয়ার বিষয়ে আপনি কি মনে করেন?",
	bioInput:
		"আপনার নিজের বায়োডাটা বিস্তারিত লিখুন(বিশেষ কিছু জানাতে চাইলে তাও লিখুন)",
};

const BioDetailsQuestion = ({ question, index }) => {
	const questionKey = question?.split("==")[0];
	const answer = question?.split("==")[1];

	// console.log("question-key~", questionKey);
	return (
		<>
			{question && answer && (
				<div className="my-1">
					<h3
						style={{ color: Colors.siteGlobal }}
						className="mb-1 text-base font-semibold"
					>
						{index + 1}. {questionsHashMap[questionKey?.trim()]}
					</h3>
					<p className="text-gray-600">{answer?.trim()}</p>{" "}
				</div>
			)}
		</>
	);
};

export function BioDetailsModal({ open, setOpen, text, title, id }) {
	const [answers, setAnswers] = useState([]);
	const handleOpen = () => setOpen(!open);
	console.log(`bio-details-text~${id}`, text);
	useEffect(() => {
		let temp = text?.split("===");
		setAnswers(temp);
	}, [setOpen, text]);
	return (
		<div className="">
			<Dialog
				size="xl"
				className="overflow-auto"
				open={open}
				handler={handleOpen}
			>
				<DialogBody>
					{answers.map((item, index) => (
						<BioDetailsQuestion question={item} key={index} index={index} />
					))}
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button variant="gradient" color="green" onClick={handleOpen}>
						<span>Ok</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</div>
	);
}
