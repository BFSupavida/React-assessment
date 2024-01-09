import React from "react";

const Navbar = () => {
  return (
      <nav className="p-4 flex justify-end border-b-[1px] border-black">
        <ul className="flex gap-8">
          <li>
            <a className="font-bold" href={'/'}>Home</a>
          </li>
          <li>
            <a className="font-bold" href={'/owner'}>Owner</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;