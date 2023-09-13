/* eslint-disable no-unused-vars */
import { Card } from "@material-tailwind/react";

import { BioDataTab } from "../BioDataTab/BioDataTab";
import { Colors } from "../../constants/colors";

export function SideBar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] py-5   mt-5 shadow-xl shadow-blue-gray-900/5">
      <BioDataTab />
    </Card>
  );
}
