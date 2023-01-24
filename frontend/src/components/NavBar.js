export const NavBar = () => (
  <div
    className={`w-full h-16 bg-sky-900 flex justify-between items-center px-4 py-0.25`}
  >
    <div className="border-r border-white px-1.5">
      <a className="text-2xl text-white font-semibold">UX-Analyzer</a>
    </div>
    <div>
      <span className="text-white text-md font-medium">
        Juan Cruz Gardey <i className="fa-solid fa-caret-down"></i>
      </span>
    </div>
  </div>
);

