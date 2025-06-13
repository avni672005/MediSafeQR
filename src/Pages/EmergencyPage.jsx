import { useState } from "react";
import Navbar from "../components/Navbar";
import FormInput from "../components/FormInput";
import QRDisplay from "../components/QRDisplay";

const EmergencyPage = () => {
  const [formData, setFormData] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#EEEFE0] p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Emergency Medical QR App
        </h1>

        <div className="w-full max-w-md space-y-6">
          <FormInput onSubmit={(data) => setFormData(data)} />
          {formData && <QRDisplay formData={formData} />}
        </div>
      </div>
    </>
  );
};

export default EmergencyPage;
