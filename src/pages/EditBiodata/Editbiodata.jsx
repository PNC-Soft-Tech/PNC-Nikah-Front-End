/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BiSidebar } from "react-icons/bi";
import Numbering from "./Numbering";
import DropdownForm from "./GeneralForm";
import Form from "../../components/Form/Form";

const EditBiodata = () => {
  const [userForm, setUserForm] = useState(1);
  return (
    <div className="flex flex-row ">
      <div className="w-[30%] mx-5">
        <Numbering setUserForm={setUserForm} userForm={userForm} />
      </div>
      <div className="w-[70%]">
        <Form setUserForm={setUserForm} userForm={userForm} />
      </div>
    </div>
  );
};

export default EditBiodata;
