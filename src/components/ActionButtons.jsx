const ActionButtons = ({ setFormData }) => {
  const handleClear = () => {
    setFormData({
      name: "", age: "", blood: "", allergies: "", conditions: "", contact: ""
    });
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Download QR
      </button>
      <button onClick={handleClear}
        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Clear
      </button>
    </div>
  );
};

export default ActionButtons;
