import { Button, Input } from "@material-tailwind/react";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";

const BioDataInput = () => {
  return (
    <div className="flex mt-5 flex-col  w-[20rem]">
      <div className="mr-8">
        <Input color="purple" className="py-5 " label="বায়োডাটা নং" />
      </div>

      <div className=" my-10 grid grid-cols-2 mr-8 gap-4 ">
        <Button className="flex  px-5 items-center bg-gradient-to-r from-indigo-900 to-purple-600 ">
          <AiOutlineSearch className="w-4 h-6" />
          খুজুন
        </Button>
        <Button
          variant="gradient"
          className="flex items-center px-5 bg-gradient-to-r from-indigo-900 to-purple-600"
        >
          <AiOutlineDelete className="h-6 w-4" />
          মুছে ফেলুন
        </Button>
      </div>
    </div>
  );
};

export default BioDataInput;
