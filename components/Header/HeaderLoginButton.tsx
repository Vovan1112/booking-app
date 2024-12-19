import { useModal } from "../LoginModal/LoginModalContext";

export const HeaderLoginButton = () => {
    const { openModal } = useModal();

    return (
        <button 
            onClick={openModal}
            className="bg-blue-400 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        >
            Login
        </button>
    );
};
