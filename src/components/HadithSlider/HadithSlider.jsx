
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HadidthSlider = () => {
  return (
    <Carousel autoPlay interval={3100} infiniteLoop  showStatus={false} statusFormatter={(current, total) => (
    <span className="text-blue-500">{current} of {total}</span>
  )}>
      <div className="hadith-card flex justify-center items-center mt-2">
        <div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
          <h3 className="text-sm md:text-md lg:text-xl pt-8">
            হে যুব সম্প্রদায়! তোমাদের মধ্যে যারাই স্ত্রীর অধিকার আদায়ে সামর্থ্য
            রাখে, তারা যেন অবশ্যই বিয়ে বন্ধনে আবদ্ধ হয়।
          </h3>
          <h4 className="text-sm pt-2 pb-4 text-blue-500">
            (সূরা রুম : আয়াত ২১)
          </h4>
        </div>
      </div>
      <div className="hadith-card flex justify-center items-center mt-2">
        <div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
          <h3 className="text-sm md:text-md lg:text-xl pt-8">
            “আর এক নিদর্শন এই যে, তিনি তোমাদের জন্যে তোমাদের মধ্য থেকে তোমাদের
            সঙ্গিনীদের সৃষ্টি করেছেন, যাতে তোমরা তাদের কাছে শান্তিতে থাক এবং
            তিনি তোমাদের মধ্যে পারস্পরিক স¤প্রীতি ও দয়া সৃষ্টি করেছেন।”
          </h3>
          <h4 className="text-sm pt-2 pb-4 text-blue-500">
            সহীহ - মুত্তাফাকুন ‘আলাইহি (বুখারী ও মুসলিম)।
          </h4>
        </div>
      </div>
      <div className="hadith-card flex justify-center items-center mt-2">
        <div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
          <h3 className="text-sm md:text-md lg:text-xl pt-8">
            `বিয়ে হলো আমার সুন্নাত যে ব্যক্তি আমার সুন্নাত তরিকা ছেড়ে চলবে সে
            আমার দলভুক্ত নয়।’
          </h3>
          <h4 className="text-sm pt-2 pb-4 text-blue-500">(বুখারি)</h4>
        </div>
      </div>
      <div className="hadith-card flex justify-center items-center mt-2">
        <div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
          <h3 className="text-sm md:text-md lg:text-xl pt-8">
            `হে যুবসমাজ! তোমাদের মধ্যে যারা বিয়ের সামর্থ্য রাখে, তাদের বিয়ে করা
            কর্তব্য, কেননা বিয়ে দৃষ্টি নিয়ন্ত্রণকারী, যৌন অঙ্গের পবিত্রতা
            রক্ষাকারী।’{" "}
          </h3>
          <h4 className="text-sm pt-2 pb-4 text-blue-500">(মিশকাত)</h4>
        </div>
      </div>
      <div className="hadith-card flex justify-center items-center mt-2">
        <div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
          <h3 className="text-sm md:text-md lg:text-xl pt-8">
            “তারা (স্ত্রীগণ) তোমাদের পোশাক এবং তোমরা (স্বামীগণ) তাদের
            পোশাকস্বরূপ।”
          </h3>
          <h4 className="text-sm pt-2 pb-4 text-blue-500">
            (সূরা বাকারা : আয়াত ১৮৭)
          </h4>
        </div>
      </div>
    </Carousel>
  );
};

export default HadidthSlider;
