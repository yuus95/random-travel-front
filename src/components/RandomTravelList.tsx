import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetCount, GetList } from "../api/randomTravelApi";
import { useAuth } from "../hooks/useAuth";
import { RandomTravelType } from "../types/RandomTravlelType";



export default function RandomTravelList() {
    const [travels, setTravels] = useState<RandomTravelType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { token } = useAuth();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const limit = 10;
    const navigate = useNavigate();
        
    if(token == null){
        navigate("/login");    
    }

    const loadData = async () => {
        try {
            if(token != null){
                const data = await GetList(token, currentPage, limit);
                setTravels(data);
            }
        
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    const loadCountData = async () => {
        try {
            if(token != null){
                const count = await GetCount(token);
                setTotalPage(count);
            }

        } catch (error: any) {
            throw Error(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [token, currentPage, limit]);


    useEffect(() => {
        loadCountData();
    }, []) // 빈 배열을 호출하면 최초1번 마운트될때만 호출한다.

    return (
        <>
            <h1>여행 목록</h1>
            {loading ? (
                <p>로딩 중...</p>
            ) : (
                <>
                    <ul>
                        {travels.map((travel, index) => (
                            <li key={index}>
                                <strong>{travel.name}</strong>: {travel.location}
                            </li>
                        ))}
                    </ul>
                    <div>
                        {Array.from({ length: currentPage > 5 ? currentPage + 10 : 5  }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                style={{
                                    margin: '0 5px',
                                    padding: '5px',
                                    backgroundColor: currentPage === page ? '#007bff' : '#fff',
                                    color: currentPage === page ? '#fff' : '#000',
                                    border: '1px solid #007bff',
                                }}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </>
            )
            }
        </>
    );
}