import React from "react";
import { useLogout } from "../../../../../hooks/auth";
import { useDropdownMenu } from "../../../../../hooks/contexts-hooks/header";

const DropdownMenu: React.FC = () => {
    const { handleLogout } = useLogout();
    const { isOpen } = useDropdownMenu();
    return (
        isOpen && (
            <div
                className="absolute right-0 z-10 mt-0 top-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
            >
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Mon profil
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Paramètres
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={handleLogout}
                >
                    Déconnexion
                </a>
            </div>
        )
    );
};

export { DropdownMenu };
