"use client";

export default function Pagination({
  page,
  totalPages,
  setPage,
}) {

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {

    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (newPage) => {

    if (newPage < 1 || newPage > totalPages) return;

    setPage(newPage);

    setTimeout(() => {

      const section =
        document.getElementById("locations") ||
        document.getElementById("property-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    }, 100);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-2 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl 
        border border-[#56021F]/30 text-[#56021F] 
        disabled:opacity-40 hover:bg-[#56021F]/10 transition"
      >
        Prev
      </button>

      {/* PAGES */}
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => handlePageChange(p)}
          className={`px-4 py-2 rounded-lg transition
            ${
              page === p
                ? "bg-gradient-to-r from-[#56021F] to-[#3d0116] text-white"
                : "border border-[#56021F]/30 text-[#56021F]"
            }`}
        >
          {p}
        </button>
      ))}

      {/* NEXT */}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 rounded-lg border border-[#56021F]/30 
        text-[#56021F] disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}