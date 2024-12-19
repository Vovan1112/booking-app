'use client'
import { BurgerMenuIconClose } from "@/assets/BurgerMenuIcon/BurgerMenuIconClose";
import LoginFormModal from "./FormLoginModal";
import { useModal } from "./LoginModalContext";

export default function LoginModal() {

    const { isModalOpen, closeModal } = useModal();
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-80">
                <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Login</h2>
                <span onClick={closeModal} className="cursor-pointer"><BurgerMenuIconClose /></span>
                </div>
                <LoginFormModal />
            </div>
        </div>
    );
}