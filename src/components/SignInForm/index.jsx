import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignInForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

const onSubmit = (data) => {
    console.log(data);
    navigate('/dashboard')
}

return (
    <form className="flex flex-col max-w-lg w-full font-normal" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {required: true})}
        type="email"
        placeholder="Elektron manzil"
        className="focus:border-[white] px-6 py-4 outline-none border border-[#A2A0B3] bg-[#171142]"
      />
      {
        errors.email && <p className="m-0 text-red-500 font-semibold mt-1">Elektron manzilni kiriting!</p>
      }
      <input
        {...register("password", {required: true, minLength: 6})}
        type="password"
        placeholder="Parol"
        className="focus:border-[white] px-6 py-4 mt-5 outline-none border border-[#A2A0B3] bg-[#171142]"
      />
      {errors.password && errors.password.type==="required" && <p className="m-0 text-red-500 font-semibold mt-1">Parolni kiriting!</p>}
      {
        errors.password && errors.password.type === "minLength" &&
        <p className="m-0 text-red-500 font-semibold mt-1">Parol kamida 6 belgidan iborat bo'lishi kerak!</p>
      }
      <p className="mt-3">
        Ro'yxatdan o'tmaganmisiz?
        <Link to="/signup" className="ml-2 underline text-blue-500">
          Ro'yxatdan o'tish
        </Link>
      </p>
      <input
        type="submit"
        value="Kirish"
        className="bg-[#4785FE] hover:bg-blue-600 transition cursor-pointer py-4 text-lg mt-6"
      />
    </form>
  );
};

export default SignInForm;
