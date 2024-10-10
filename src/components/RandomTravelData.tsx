import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetList } from "../api/randomTravelApi";
import { useAuth } from "../hooks/useAuth";
import { RandomTravelType } from "../types/RandomTravlelType";



export default function RandomTravelData(
    { currentPage, limit, hasData }: { currentPage: number; limit: number, hasData: Boolean }
) {
    const [travels, setTravels] = useState<RandomTravelType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { token } = useAuth();
    const navigate = useNavigate();
    
    console.log("hasData", hasData);
    
    if (token == null) {
        navigate("/login");
    }

    const loadData = async () => {
        try {
            if (token != null && hasData) {
                const data = await GetList(token, currentPage, limit);
                setTravels(data);
            }

        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [token, currentPage, limit,hasData]);

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
                </>
            )
            }
        </>
    );
}