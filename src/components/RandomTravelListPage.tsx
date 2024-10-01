import { useEffect, useState } from "react";
import { GetCount } from "../api/randomTravelApi";
import { useAuth } from "../hooks/useAuth";
import Pagination from "./Pagination";

export default function RandomTravelListPagination(
    { currentPage, limit, onPageChange }: { currentPage: number; limit: number, onPageChange: (page: number) => void }
) {
    const { token } = useAuth();
    const [loading, setLoading] = useState<boolean>(true);
    const [totalItems, setTotalItem] = useState<number>(0);


    const loadCountData = async () => {
        try {
            if (token != null) {
                const count = await GetCount(token);
                setTotalItem(count);
            }

        } catch (error: any) {
            throw Error(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCountData();
    }, []) // 빈 배열을 호출하면 최초1번 마운트될때만 호출한다.


    return (
        < Pagination
            totalItems={totalItems}
            itemsPerPage={limit}
            currentPage={currentPage}
            onPageChange={onPageChange} />
    )
}
