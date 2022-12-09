import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    const name2 = name.current.value;
    const phone2 = phone.current.value;
    const email2 = email.current.value;
    const password2 = password.current.value;
        
    e.preventDefault();
    localStorage.setItem("token", JSON.stringify({name: name2, phone: phone2, email: email2, password: password2}));
    
    navigate("/signin");
  };
  return (
    <div className="h-screen flex px-9">
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-3/4" src="assets/images/logo-large.png" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-[#24224E] text-white font-['Inter']">
        <h2 className="font-medium text-[32px] mb-[186px]">
          “Mahallabay” axborot tizimi
        </h2>
        <h3 className="font-medium text-[32px] mb-[34px]">Ro'yxatdan o'tish</h3>
        <form
          className="flex flex-col max-w-lg w-full font-normal"
          onSubmit={handleSubmit}
        >
          <input
            ref={name}
            required
            type="text"
            placeholder="Ism"
            className="focus:border-[white] px-6 py-4 mb-5 outline-none border border-[#A2A0B3] bg-[#171142]"
          />
          <input
            ref={phone}
            required
            type="number"
            placeholder="Telefon"
            className="focus:border-[white] px-6 py-4 mb-5 outline-none border border-[#A2A0B3] bg-[#171142] appearance-none"
          />
          <input
            ref={email}
            required
            type="email"
            placeholder="Elektron manzil"
            className="focus:border-[white] px-6 py-4 mb-5 outline-none border border-[#A2A0B3] bg-[#171142]"
          />
          <input
            ref={password}
            required
            type="password"
            placeholder="Parol"
            className="focus:border-[white] px-6 py-4 mb-5 outline-none border border-[#A2A0B3] bg-[#171142]"
          />
          <p className="mb-3">
            Ro'yxatdan o'tganmisiz?
            <Link to="/signin" className="ml-2 underline text-blue-500">
              Tizimga Kirish
            </Link>
          </p>
          <input
            type="submit"
            value="Ro'yxatdan o'tish"
            className="bg-[#4785FE] hover:bg-blue-600 transition cursor-pointer py-4 text-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
