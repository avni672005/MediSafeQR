import { useForm } from "react-hook-form";

const FormInput = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Full Name"
        className="w-full border-2 border-gray-300 p-3 rounded text-base"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="number"
        {...register("age", { required: "Age is required" })}
        placeholder="Age"
        className="w-full border-2 border-gray-300 p-3 rounded text-base"
      />
      {errors.age && <p className="text-red-500">{errors.age.message}</p>}

      <input
        {...register("blood", { required: "Blood group is required" })}
        placeholder="Blood Group (B+, O-)"
        className="w-full border-2 border-gray-300 p-3 rounded text-base"
      />
      {errors.blood && <p className="text-red-500">{errors.blood.message}</p>}

      <input
        {...register("allergies")}
        placeholder="Allergies"
        className="w-full border-2 border-gray-300 p-3 rounded text-base"
      />

      <input
        {...register("conditions")}
        placeholder="Conditions"
        className="w-full border-2 border-gray-300 p-3 rounded text-base"
      />

      <input
        type="tel"
        {...register("contact", {
          required: "Contact is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Must be a 10-digit number",
          },
        })}
        placeholder="Emergency Contact"
        className="w-full border-2 border-gray-300 p-3 rounded text-base"
      />
      {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full mt-4 py-3 rounded font-semibold ${
          isValid
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-400 text-white cursor-not-allowed"
        } transition-all`}
      >
        Create MediSafe ID
      </button>
    </form>
  );
};

export default FormInput;
