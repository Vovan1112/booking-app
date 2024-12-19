import { HeaderLoginButton } from "./HeaderLoginButton";

interface HeaderItemListProps {
  isMenuOpen: boolean;
}

export const HeaderItemList = ({ isMenuOpen }: HeaderItemListProps) => {
    const linkClass = "relative text-gray-500 hover:text-black transition-colors";
    const spanClass =
      "absolute left-1/2 -bottom-2 w-2 h-2 bg-gray-500 rounded-full opacity-0 transform -translate-x-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2";
  const itemListName = ["Home", "Tour List", "Room List"];

  return (
    <nav
      className={`w-full ${
        isMenuOpen ? "flex" : "hidden"
      } md:flex flex-col md:flex-row items-center justify-between px-4 md:px-8`}
    >
      <ul className="flex flex-col md:flex-row items-center justify-center flex-grow space-y-4 md:space-y-0 md:space-x-6">
        {itemListName.map((item, index) => (
           <li className="group" key={index}>
           <a href="#" className={linkClass}>
             {item}
             <span className={spanClass}></span>
           </a>
         </li>
        ))}
      </ul>

      <div className="flex-shrink-0 md:mr-8">
        <HeaderLoginButton />
      </div>
    </nav>
  );
};
