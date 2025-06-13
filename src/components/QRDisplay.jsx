import { QRCodeCanvas } from "qrcode.react";

const QRDisplay = ({ formData }) => {
  const qrData = JSON.stringify(formData);

  return (
    <div className="bg-white shadow-lg rounded-xl mt-6 p-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">QR Code</h2>
      <QRCodeCanvas value={qrData} size={200} />
    </div>
  );
};

export default QRDisplay;
