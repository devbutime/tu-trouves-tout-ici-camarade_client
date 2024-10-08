import { FC } from "react";

const ForgetPassword: FC = () => {
    return (
        <div className="text-sm">
            <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
            >
                Mot de passe oublié ?
            </a>
        </div>
    );
};

ForgetPassword.displayName = "ForgetPassword";

export { ForgetPassword };
