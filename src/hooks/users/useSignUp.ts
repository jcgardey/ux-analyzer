import { signUpUser } from "@/services/users"
import { useMutation } from "@tanstack/react-query"

export const useSignUp = () => {
    return useMutation({mutationFn: signUpUser});
}