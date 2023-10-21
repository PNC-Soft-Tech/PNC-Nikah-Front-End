
import { Button } from "@material-tailwind/react";
import { FaEye, FaTrash } from "react-icons/fa";
import PaymentHistory from "../../components/PaymentHistory/PaymentHistory";
const PaymentAndRefund = () => {
  return (
    <div className="py-12 mx-auto ">
      <div className="">
        {/*<!-- End of Left Sidebar -->*/}
        <div className="col right-sidebar-main my-favs">
        <PaymentHistory />
        </div>
        
        
      </div>
    </div>
  );
};

export default PaymentAndRefund;
