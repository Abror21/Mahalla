import SignInForm from "components/SignInForm";

const SignInPage = () => {
  
  return (
    <div className="h-screen flex px-9">
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-3/4" src="assets/images/logo-large.png" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-[#24224E] text-white font-['Inter']">
        <h2 className="font-medium text-[32px] mb-[186px]">“Mahallabay” axborot tizimi</h2>
        <h3 className="font-medium text-[32px] mb-[34px]">Tizimga kirish</h3>
        <SignInForm />
      </div>
    </div>
  );
};


export default SignInPage;
