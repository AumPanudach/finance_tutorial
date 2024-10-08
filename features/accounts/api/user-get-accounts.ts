/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export  const getAccounts = () => {
    const query = useQuery({
        queryKey:["account"],
        queryFn: async () => {
            const response = await client.api.accounts.$get();

            if(!response.ok){
                throw new Error("Failed to fetch accounts");
            }
        }
    })
}