import { colors } from '../utils/colors';

export const NavBar = () => (
  <div
    className={`w-full h-16 bg-${colors.primary}-900 flex justify-between items-center px-2 py-0.25`}
  >
    <div className="border-r border-white px-1.5">
      <a className="text-xl text-white font-medium">UX-Analyzer</a>
    </div>
    <div>
      <span className="text-white hover:">Nombre usuario</span>
    </div>
  </div>
);

