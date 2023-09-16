import axios from "axios";
const baseUrl = "https://nikkahbackend.mclabbu.xyz/api/v1";

const getAllDivisions = async () => {
  const response = await axios.get("/divisions.json");
  console.log(response);
  return response.data;
};

const getAllDistricts = async (division) => {
  const res1 = await axios.get("/divisions.json");
  const divisions = res1?.data;
  const resp2 = await axios.get("/districts.json");
  const districts = resp2?.data;
  if (!division) {
    return districts;
  }
  const findDivision = divisions?.find((d) => d.value === division);
  console.log(findDivision);
  const divisionId = findDivision?.id;
  console.log(divisionId);
  const filteredDistricts = districts?.filter(
    (d) => d.division_id === divisionId
  );
  console.log(filteredDistricts);
  return filteredDistricts;
};

const getAllUpzilla = async (district) => {
  const res1 = await axios.get("/upzila.json");
  const upzillas = res1?.data;
  const resp2 = await axios.get("/districts.json");
  const districts = resp2?.data;
  if (!district) {
    return upzillas;
  }
  const findDistrict = districts?.find((d) => d.value === district);
  console.log(findDistrict);
  const districtId = findDistrict?.id;
  console.log(districtId);
  const filteredUpzillas = upzillas?.filter(
    (d) => d.district_id === districtId
  );
  console.log(filteredUpzillas);
  return filteredUpzillas;
};

const getALLGeneralInfo = async () => {
  const generalInfo = await axios.get(baseUrl + "/general-info");
  return generalInfo;
};

const getBioData = async (id) => {
  const bioData = await axios.get(baseUrl + "/bio-data/" + Number(id));
  return bioData;
};

export const BioDataServices = {
  getALLGeneralInfo,
  getBioData,
  getAllDivisions,
  getAllDistricts,
  getAllUpzilla,
};
