import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useState } from "react";

const SecureRouter = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  
  return (
    <div className="pt-[90px]">
      <Navbar toggleSidebar={() => setToggleSidebar((prevState) => !prevState)}/>
      <div>
        {toggleSidebar && <Sidebar />}
        <div className={`h-full overflow-y-auto ${toggleSidebar ? 'ml-[293px]' : ''}`}>{children}</div>
      </div>
    </div>
  );
};

export default SecureRouter;
