import { getAllEvaluations } from "@/services/evaluations"
import { useQuery } from "@tanstack/react-query"

export const useEvaluations = () => {
    return useQuery({queryKey: ['evaluations'], queryFn: () => getAllEvaluations() })
}