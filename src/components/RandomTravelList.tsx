import { useState } from "react";
import RandomTravelData from "./RandomTravelData";
import RandomTravelDataPage from "./RandomTravelDataPage";



export default function RandomTravelList() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 10;

    return (
        <>
            <RandomTravelData currentPage={currentPage} limit={limit} />
            <RandomTravelDataPage
                currentPage={currentPage}
                limit={limit}
                onPageChange={(page) => setCurrentPage(page)} />
        </>
    )
}