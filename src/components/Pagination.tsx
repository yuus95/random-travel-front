
interface PaginationProps {
    totalItems: number;                 // 전체 아이템 수
    itemsPerPage: number;               // 페이지당 표시할 아이템 수
    currentPage: number;                // 현재 페이지 번호
    onPageChange: (page: number) => void;  // 페이지 변경 시 호출할 함수
    maxPageNumbersToShow?: number;      // 화면에 표시할 최대 페이지 번호 (선택)
}


export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    maxPageNumbersToShow = 5, // 기본값 설정
}: PaginationProps) {
    const totalPage = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pages = [];
        const halfRange = Math.floor(maxPageNumbersToShow / 2);

        let start = Math.max(currentPage - halfRange, 1);
        let end = Math.min(currentPage + halfRange, totalPage);

        if (end - start < maxPageNumbersToShow - 1) {
            if (currentPage < halfRange) {
                end = Math.min(maxPageNumbersToShow, totalPage);
            } else if (totalPage - currentPage < halfRange) {
                start = Math.max(totalPage - maxPageNumbersToShow + 1, 1);
            }
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination">
            <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &laquo;
            </button>

            {pageNumbers.map((page) => (
                <>
                    {console.log("page", page)}
                    <button
                        className={`pagination-btn ${currentPage === page
                            ? 'active'
                            : ''}`}
                        key={page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                </>
            ))}

            <button
                className="pagination-btn"
                disabled={currentPage === totalPage}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &raquo; {/* HTML 엔티티: » */}
            </button>
        </div>
    )
}