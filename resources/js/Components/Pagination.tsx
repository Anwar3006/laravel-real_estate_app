import { router } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ paginationData }: any) => {
  if (
    !paginationData ||
    paginationData.meta.last_page <= paginationData.meta.per_page
  ) {
    return null; // Don't show pagination if there's only one page
  }

  const currentPage = paginationData.meta.current_page;
  const lastPage = paginationData.meta.last_page;

  // Determine which page numbers to show
  const getPageNumbers = () => {
    const pages = [];

    // Always show page 1
    pages.push(1);

    // Show current page and +/- 1 if not too close to the beginning
    if (currentPage > 3) {
      pages.push('...');
    }

    // Pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(lastPage - 1, currentPage + 1);
      i++
    ) {
      if (i !== 1 && i !== lastPage) {
        pages.push(i);
      }
    }

    // Add ellipsis if needed
    if (currentPage < lastPage - 2) {
      pages.push('...');
    }

    // Always show last page
    if (lastPage > 1) {
      pages.push(lastPage);
    }

    return pages;
  };

  // Handle page change - this should navigate to the appropriate URL
  const handlePageChange = (pageUrl: string) => {
    if (pageUrl) {
      router.get(pageUrl);
    }
  };

  return (
    <div className="my-8 flex items-center justify-center space-x-2">
      <button
        className={`flex items-center text-xs transition-colors hover:text-gray-700 md:text-base ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700'}`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(paginationData.links.prev)}
      >
        <ArrowLeft size={20} />
        <span className="ml-1 font-bold underline md:mr-3">Previous</span>
      </button>

      {getPageNumbers().map((page, index) =>
        page === '...' ? (
          <span
            key={`ellipsis-${index}`}
            className="px-2 text-2xl font-bold text-[#727171] md:text-4xl"
          >
            •••
          </span>
        ) : (
          <button
            key={`page-${page}`}
            className={`flex h-5 w-5 items-center justify-center rounded-md border border-zinc-900 text-xs font-bold md:h-9 md:w-9 md:text-base ${
              page === currentPage
                ? 'bg-[#727171] text-white'
                : 'bg-[#d9d9d9] text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() =>
              handlePageChange(paginationData.meta.links[page]['url'])
            }
          >
            {page}
          </button>
        ),
      )}

      <button
        className={`flex items-center text-xs transition-colors hover:text-gray-900 md:text-base ${currentPage === lastPage ? 'text-gray-400' : 'text-gray-700'}`}
        disabled={currentPage === lastPage}
        onClick={() => handlePageChange(paginationData.links.next)}
      >
        <span className="mr-1 font-bold underline md:ml-3">Next</span>
        <ArrowRight size={20} className="font-bold" />
      </button>
    </div>
  );
};

export default Pagination;
