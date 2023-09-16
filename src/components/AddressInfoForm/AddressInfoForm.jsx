/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "../Select/Select";
import { useQuery } from "@tanstack/react-query";
import { BioDataServices } from "../../services/bioData";
import Input from "../Input/Input";
import { Checkbox } from "@material-tailwind/react";

const AddressInfoForm = ({ userForm, setUserForm }) => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upZilla, setUpZilla] = useState("");
  const [area, setArea] = useState("");
  const [pArea, setPArea] = useState("");
  const [pDivision, setPDivision] = useState("");
  const [pDistrict, setPDistrict] = useState("");
  const [pUpZilla, setPUpZilla] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [grownUp, setGrownUp] = useState("");

  const { data: divisionOptions = [] } = useQuery({
    queryKey: ["divisions"],
    queryFn: async () => {
      return await BioDataServices.getAllDivisions();
    },
  });

  const { isLoading, data: districtsOptions = [] } = useQuery({
    queryKey: ["districts", division],
    queryFn: async () => {
      return await BioDataServices.getAllDistricts(division);
    },
  });

  const { isLoading: upZillaLoading, data: upZillaOptions = [] } = useQuery({
    queryKey: ["upzillas", district, division],
    queryFn: async () => {
      return await BioDataServices.getAllUpzilla(district);
    },
  });

  const { data: pDivisionOptions = [] } = useQuery({
    queryKey: ["pdivisions"],
    queryFn: async () => {
      return await BioDataServices.getAllDivisions();
    },
  });

  const { pDistrictLoading, data: pDistrictsOptions = [] } = useQuery({
    queryKey: ["pdistricts", pDivision],
    queryFn: async () => {
      return await BioDataServices.getAllDistricts(pDivision);
    },
  });

  const { isLoading: pUpZillaLoading, data: pUpZillaOptions = [] } = useQuery({
    queryKey: ["pupzillas", pDistrict, pDivision],
    queryFn: async () => {
      return await BioDataServices.getAllUpzilla(pDistrict);
    },
  });
  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };
  const checkBoxHandler = () => {
    setIsCheck((prev) => !prev);
  };

  console.log(districtsOptions);
  console.log(division);

  return (
    <div className="mt-5">
      <h3 className="text-2xl font-semibold mb-3">ঠিকানা</h3>
      <hr />
      <form action="" className="w-full mt-5">
        <div>
          <h3 className="text-left text-2xl">স্থায়ী ঠিকানা </h3>
          <Select
            title="আপনার বিভাগ নির্বাচন করুন"
            value={division}
            setValue={setDivision}
            options={divisionOptions}
            required={true}
          />

          {isLoading ? (
            <div>Loading</div>
          ) : (
            division &&
            districtsOptions?.length > 0 && (
              <Select
                title="আপনার জেলা  নির্বাচন করুন"
                value={district}
                setValue={setDistrict}
                options={districtsOptions}
                required={true}
              />
            )
          )}
          {upZillaLoading ? (
            <div>Loading</div>
          ) : (
            district &&
            upZillaOptions?.length > 0 && (
              <Select
                title="আপনার উপজেলা  নির্বাচন করুন"
                value={upZilla}
                setValue={setUpZilla}
                options={upZillaOptions}
                required={true}
              />
            )
          )}
          <Input
            placeholder="এলাকার নাম লিখুন"
            value={area}
            setValue={setArea}
            required
          />
        </div>

        <div className="flex my-2 items-center">
          <Checkbox color="teal" onChange={checkBoxHandler} />
          <label>স্থায়ী ও বর্তমান ঠিকানা একই</label>
        </div>

        {!isCheck && (
          <div>
            <h3 className="text-left text-2xl">বর্তমান ঠিকানা </h3>
            <Select
              title="আপনার বিভাগ নির্বাচন করুন"
              value={pDivision}
              setValue={setPDivision}
              options={pDivisionOptions}
              required={true}
            />

            {pDistrictLoading ? (
              <div>Loading</div>
            ) : (
              pDivision &&
              pDistrictsOptions?.length > 0 && (
                <Select
                  title="আপনার জেলা  নির্বাচন করুন"
                  value={pDistrict}
                  setValue={setPDistrict}
                  options={pDistrictsOptions}
                  required={true}
                />
              )
            )}
            {pUpZillaLoading ? (
              <div>Loading</div>
            ) : (
              pDistrict &&
              pUpZillaOptions?.length > 0 && (
                <Select
                  title="আপনার উপজেলা  নির্বাচন করুন"
                  value={pUpZilla}
                  setValue={setPUpZilla}
                  options={pUpZillaOptions}
                  required={true}
                />
              )
            )}

            <Input
              placeholder="এলাকার নাম লিখুন"
              value={pArea}
              setValue={setPArea}
              required
            />
          </div>
        )}
        <br />
        <Input
          title="কোথায় বড় হয়েছেন ?"
          value={grownUp}
          setValue={setGrownUp}
          required
        />

        <div className="flex items-center my-5 justify-between">
          <button
            type="button"
            onClick={backButtonHandler}
            className="bg-gray-700 text-xl  px-5 text-white py-2  rounded-3xl"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r text-xl  px-5 text-white py-2 from-purple-600 to-blue-500 rounded-3xl"
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressInfoForm;
