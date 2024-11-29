export const HeaderItemList = () => {

    const linkClass = "relative text-gray-500 hover:text-black transition-colors";
    const spanClass = "absolute left-1/2 -bottom-2 w-2 h-2 bg-gray-500 rounded-full opacity-0 transform -translate-x-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2";
    const itemListName = ['Home', 'Tour List', 'Room List'];
    
    return (
        <nav className="relative">
            <ul className="flex space-x-6 relative">
                {itemListName.map((item, index) => (
                    <li className="group" key={index}>
                    <a
                        href="#"
                        className={linkClass}
                    >
                        {item}
                        <span className={spanClass}></span>
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    );
};
 