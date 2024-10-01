import { useEffect, useState } from "react";
import { GetList } from "../api/randomTravelApi";
import Header from "../components/Header";
import RandomTravelList from "../components/RandomTravelList";
import RandomTravelListPagination from "../components/RandomTravelListPage";
import { useAuth } from "../hooks/useAuth";


export default function RandomTravelListPage() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 10;
    return (
        <div>
            <Header />
            <RandomTravelList currentPage={currentPage} limit={limit} />
            <RandomTravelListPagination
                currentPage={currentPage}
                limit={limit} 
                onPageChange={(page) => setCurrentPage(page)} />
        </div>
    );
};