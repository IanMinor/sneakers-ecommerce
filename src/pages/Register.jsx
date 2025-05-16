import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import ErrorMessage from "../components/ErrorMessage";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const password = watch("password");

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = existingUsers.some(
      (user) => user.email === data.email
    );
    const updatedUsers = [...existingUsers, data];

    localStorage.setItem("users", JSON.stringify(updatedUsers)); // guarda TODOS
    localStorage.setItem("user", JSON.stringify(data)); // usuario logueado

    login(data); // guarda en Zustand
    navigate("/login");

    // Aquí podrías guardar el usuario en localStorage o backend
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-2xl shadow-lg max-w-md w-full  space-y-5"
      >
        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Name must be at most 20 characters",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg bg-transparent border-1 border-gray-light focus:outline-none focus:ring-2 ${
              errors.name ? "ring-red-500" : "ring-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            className={`w-full px-4 py-2 rounded-lg bg-transparent border-1 border-gray-light focus:outline-none focus:ring-2 ${
              errors.name ? "ring-red-500" : "ring-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-semibold">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
            type="password"
            className={`w-full px-4 py-2 rounded-lg bg-transparent border-1 border-gray-light focus:outline-none focus:ring-2 ${
              errors.name ? "ring-red-500" : "ring-gray-300"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-semibold">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords must match",
            })}
            type="password"
            className={`w-full px-4 py-2 rounded-lg bg-transparent border-1 border-gray-light focus:outline-none focus:ring-2 ${
              errors.name ? "ring-red-500" : "ring-gray-300"
            }`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <ErrorMessage message={errors.confirmPassword.message} />
          )}
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept the terms and conditions",
            })}
          />
          <label className="text-sm">
            I agree to the{" "}
            <span className="underline cursor-pointer">
              terms and conditions
            </span>
          </label>
        </div>
        {errors.terms && <ErrorMessage message={errors.terms.message} />}

        {/* Button */}
        <button
          type="submit"
          className="bg-gray-dark text-white uppercase w-full py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
