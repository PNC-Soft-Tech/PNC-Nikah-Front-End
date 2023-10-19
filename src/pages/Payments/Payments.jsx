// import React from 'react';
import axios from "axios";
import { Colors } from "../../constants/colors";
import { packages } from "./payment.constant";

function Payments() {
	const buyWithBkashHandler = (value) => {
		const amount = parseInt(value);
		if (isNaN(amount)) {
			return "";
		}
		console.log("Button Clicked !!");
		// ! create payment
		axios
			.post("http://localhost:5000/api/v1/bkash/create", {
				amount: amount,
				callbackURL: "https://pnc-nikah.com/pay",
			})
			.then((response) => {
				console.log("Data was successfully sent.", response);
				console.log(response);
				if (response?.data?.bkashURL) {
					window.location.href = response?.data?.bkashURL;
				} else {
					window.location.href = "/";
				}
			})
			.catch((error) => {
				console.log("An error occurred:", error);
			});
	};
	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<h1
				className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8"
				style={{ color: Colors.titleText }}
			>
				আপনার পছন্দের প্যাকেজ কিনুন
			</h1>
			<h4 className="text-sm text-gray-500 font-semibold text-center mb-2 mt-4">
				পাত্র/পাত্রীর সাথে প্রতিবার আপনার বায়োডাটা শেয়ার করতে আপনাকে ৩০ পয়েন্ট
				খরচ করতে হবে।আর পাত্র/পাত্রীর অভিভাবকের যোগাযোগ এর নাম্বার পেতে আপনাকে
				৭০ পয়েন্ট খরচ করতে হবে।{" "}
			</h4>
			<h4 className="text-sm text-gray-500 font-bold text-center mb-8">
				[বিকাশ , নগদ , রকেট দিয়ে পেমেন্ট করতে পারবেন]
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{packages.map((packageItem, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md border"
						style={{ borderColor: Colors.titleText }}
					>
						<h2
							className="text-xl font-semibold mb-4"
							style={{ color: Colors.titleText }}
						>
							{packageItem.name}
						</h2>
						<p className="text-gray-600 mb-4">{packageItem.price}</p>
						<ul className="text-gray-700 mb-4">
							{packageItem.features.map((feature, featureIndex) => (
								<li
									key={featureIndex}
									className="flex items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2 text-green-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M12.293 6.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 9.586l2.293-2.293z"
											clipRule="evenodd"
										/>
									</svg>
									{feature}
								</li>
							))}
						</ul>
						<button
							className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							style={{
								background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
							}}
							onClick={() => buyWithBkashHandler(packageItem.value)}
						>
							Buy With Bkash
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Payments;
