import { useEffect, useState } from "react";
import { GetCount } from "../api/randomTravelApi";
import { useAuth } from "../hooks/useAuth";
import Pagination from "./Pagination";

export default function RandomTravelDataPage(
    { currentPage, limit, onPageChange, onDataCall }:
        { currentPage: number; limit: number, onPageChange: (page: number) => void, onDataCall: (hasData: Boolean) => void }
) {
    const { token } = useAuth();
    const [loading, setLoading] = useState<boolean>(true);
    const [totalItems, setTotalItem] = useState<number>(0);
    const [fetchCount, setFetchCount] = useState<boolean>(true);


    const loadCountData = async () => {
        try {
            if (token != null) {
                const count = await GetCount(token);
                setTotalItem(count);
                onDataCall(true);
            }

        } catch (error: any) {
            onDataCall(false);
            console.error("Error loading count data:", error);
        }
        finally {
            setLoading(false);
        }
    }

    // 컴포넌트 마운트 시 한 번만 실행
    useEffect(() => {
        if(fetchCount) {
            loadCountData();  // 데이터 로딩    
            setFetchCount(false);
        }
        
    },[fetchCount]);  // 빈 배열로 최초 마운트 시에만 실행

    // 목록보기 버튼 클릭 시 카운트를 다시 불러오는 함수
    const handleReloadCount = () => {
        setLoading(true);  // 로딩 상태로 전환
        setTotalItem(0);  // totalItems 초기화
        setFetchCount(true);
    };

    return (
        <>
            <button onClick={handleReloadCount}>목록보기</button>  {/* 목록보기 버튼 */}

            {/* 로딩 중일 때 로딩 메시지 출력, totalItems가 0일 때도 페이징을 출력하지 않음 */}
            {loading ? (
                <div>로딩중...</div>
            ) : (totalItems > 0 ? (  // totalItems가 0보다 클 때만 페이징 컴포넌트 출력
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={limit}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            ) : (
                <div>데이터가 없습니다.</div>  // 데이터가 없을 때 출력할 메시지
            ))}
        </>
    );
}
