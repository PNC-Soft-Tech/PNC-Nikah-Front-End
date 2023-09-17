import AddressInfoForm from "../AddressInfoForm/AddressInfoForm";
import EducationalQualificationForm from "../EducationalQualificationForm/EducationalQualificationForm";
import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";

// eslint-disable-next-line react/prop-types
const Form = ({ userForm, setUserForm }) => {
  return (
    <>
      {userForm === 1 ? (
        <GeneralInfoForm setUserForm={setUserForm} userForm={userForm} />
      ) : userForm === 2 ? (
        <div>
          <AddressInfoForm setUserForm={setUserForm} userForm={userForm} />
        </div>
      ) : userForm === 3 ? (
        <EducationalQualificationForm />
      ) : (
        <PersonalInfoForm />
      )}
    </>
  );
};

export default Form;
