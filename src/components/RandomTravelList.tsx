import {  useState } from "react";
import RandomTravelData from "./RandomTravelData";
import RandomTravelDataPage from "./RandomTravelDataPage";


export default function RandomTravelList() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasData, setHasData] = useState<Boolean>(false);
    const limit = 20;


    return (
        <>
            <RandomTravelData currentPage={currentPage} limit={limit} hasData={hasData} />
            <RandomTravelDataPage
                currentPage={currentPage}
                limit={limit}
                onPageChange={(page) => setCurrentPage(page)}
                onDataCall={(hasData) => setHasData(true)}
            />
        </>
    )
}