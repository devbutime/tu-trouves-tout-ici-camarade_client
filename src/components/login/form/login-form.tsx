import React from "react";
import { Input } from "../../../components/form";
import { useLoginForm } from "../../../hooks/auth";
import { fields } from "./fields";
import { ForgetPassword } from "./forget-password";
import { RememberMe } from "./remember-me";
import { LoginSubmitButton } from "./submit-button/login-submit-button";

const LoginForm: React.FC = () => {
    const { register, handleSubmit, errors, isSubmitting, onFormSubmit } =
        useLoginForm();

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
                Connexion
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
                {fields.map((field) => (
                    <Input
                        key={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        register={register}
                        error={errors[field.name]}
                    />
                ))}

                <div className="flex items-center justify-between">
                    <RememberMe />
                    <ForgetPassword />
                </div>

                <LoginSubmitButton
                    isSubmitting={isSubmitting}
                    errors={errors}
                />
            </form>
        </div>
    );
};

LoginForm.displayName = "LoginForm";

export { LoginForm };
