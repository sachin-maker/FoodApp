import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParams);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className=" text-3xl font-semibold text-cyan-400 hover:shadow-blue-600 shadow-2xl cursor-pointer  ">
        <NavLink to={"/"}>Food Search</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParams}
          onChange={(event) => setSearchParams(event.target.value)}
          placeholder="Enter Food Name "
          className=" bg-gray-90 p-3 px-8 rounded-full outline-none lg:w-96 hover:shadow-blue-600  shadow-2xl  "
          name="search"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="font-semibold text-cyan-400 hover:shadow-blue-600 shadow-2xl cursor-pointer duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourite"}
            className="font-semibold text-cyan-400 hover:shadow-blue-600 shadow-2xl cursor-pointer duration-300"
          >
            Favourite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
