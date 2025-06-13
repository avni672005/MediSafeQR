const Navbar = () => {
  return (
    <nav className="bg-[#819A91] text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Logo Left */}
      <div className="font-bold text-xl tracking-wide">MediSecure</div>

      {/* Center Links */}
      <ul className="flex space-x-6 font-medium">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Help</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
      </ul>

      {/* Right Side */}
      <div className="flex space-x-4">
        <button className="bg-[#A7C1A8] hover:bg-[#D1D8BE] text-[#333] px-4 py-1 rounded-full text-sm font-semibold">Login</button>
        <select className="rounded-full text-sm px-2 py-1 bg-[#D1D8BE] text-[#333] font-medium">
          <option>EN</option>
          <option>HI</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
