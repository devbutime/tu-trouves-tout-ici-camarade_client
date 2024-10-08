import { fetchAdList } from "@/api/services/ads";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useAdListQuery = () => {
    const { token } = useAppAuth();

    return useQuery<AdDto[]>({
        queryKey: ["ads", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchAdList(token), // Passez le token à fetchAdList
        enabled: !!token,
    });
};
