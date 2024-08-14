import { Link, Outlet } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import SideBar from "../../components/SideBar";
import { useGlobalContext } from "../../global_variable/GlobalContext";

const MainLayout = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const { navSelector, setNavSelector, categoryList } = useGlobalContext();

  const SideBarSwitch = () => setSidebarOn((prev) => !prev);

  return (
    <>
      <div className="min-h-screen">
        <header className="fixed top-0 flex h-[50px] w-full items-center justify-between bg-white px-5 shadow-lg">
          <Link
            to="/"
            className="text-[24px] font-bold"
            onClick={() => setNavSelector("all")}
          >
            Blogger
          </Link>
          <div className="hidden sm:flex sm:gap-3">
            {categoryList.map((item, x) => (
              <Link
                to="/"
                key={x}
                onClick={() => {
                  // setCurrentNav(item);
                  setNavSelector(item);
                }}
                className={`flex items-center ${navSelector === item && "underline"}`}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/create-blog"
              className="rounded-md bg-slateLight px-2 py-1 text-white"
            >
              + New Post
            </Link>
          </div>
          <button className="md:hidden" onClick={SideBarSwitch}>
            <FiAlignJustify className="text-[26px]" />
          </button>
        </header>
        <div className="pt-[50px]">
          <div className="screen-content">
            <Outlet />
          </div>
        </div>
        <footer className="flex h-[180px] items-center justify-center bg-blueDark">
          <h1 className="text-[24px] text-white">Blogger</h1>
        </footer>
        {sidebarOn && (
          <>
            <div
              className="fixed top-0 h-screen w-screen bg-black/40"
              onClick={SideBarSwitch}
            ></div>
            <SideBar
              list={categoryList}
              clickHandleSideBar={setNavSelector}
              turnSidebar={SideBarSwitch}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MainLayout;
