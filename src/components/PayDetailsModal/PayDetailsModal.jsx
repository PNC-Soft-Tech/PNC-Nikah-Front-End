/* eslint-disable react/prop-types */
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";

export function PayDetailsModal({ open, setOpen }) {
	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader className="text-red-800">Its Important</DialogHeader>
				<DialogBody>
					আপনার বায়োডাটা দেখার প্রথম পদক্ষেপ সম্পূর্ন হয়েছে। পরবর্তী পদক্ষেপ এর
					জন্য আরো ৭০ টাকা পরিশোধ করতে হবে । তাহলে আপনাকে যোগাযোগের তথ্য দেয়া
					হবে ।
				</DialogBody>
				<DialogFooter>
					<Button onClick={handleOpen} variant="gradient" color="green">
						<span>Ok</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
