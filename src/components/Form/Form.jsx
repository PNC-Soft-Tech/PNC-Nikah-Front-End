import AddressInfoForm from "../AddressInfoForm/AddressInfoForm";
import ContactInfoForm from "../ContactInfoForm/ContactInfoForm";
import EducationalQualificationForm from "../EducationalQualificationForm/EducationalQualificationForm";
import ExpectedPartnerForm from "../ExpectedPartnerForm/ExpectedPartnerForm";
import FamilyInfoForm from "../FamilyInfoForm/FamilyInfoForm";
import GeneralInfoForm from "../GeneralInfoForm/GeneralInfoForm";
import MaritalInfoForm from "../MaritalInfoForm/MaritalInfoForm";
import OngikarNamaForm from "../OngikarNamaForm/OngikarNamaForm";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import ProfessionInfoForm from "../ProfessionInfoForm/ProfessionInfoForm";

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
        <EducationalQualificationForm
          setUserForm={setUserForm}
          userForm={userForm}
        />
      ) : userForm === 4 ? (
        <FamilyInfoForm setUserForm={setUserForm} userForm={userForm} />
      ) : userForm === 5 ? (
        <PersonalInfoForm setUserForm={setUserForm} userForm={userForm} />
      ) : userForm === 6 ? (
        <ProfessionInfoForm setUserForm={setUserForm} userForm={userForm} />
      ) : userForm === 7 ? (
        <MaritalInfoForm setUserForm={setUserForm} userForm={userForm} />
      ) : userForm === 8 ? (
        <ExpectedPartnerForm setUserForm={setUserForm} userForm={userForm} />
      ) : userForm === 9 ? (
        <OngikarNamaForm setUserForm={setUserForm} userForm={userForm} />
      ) : (
        userForm === 10 && (
          <ContactInfoForm setUserForm={setUserForm} userForm={userForm} />
        )
      )}
    </>
  );
};

export default Form;
