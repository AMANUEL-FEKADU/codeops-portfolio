import Link from "next/link";

export default function Pager({ page, pages, sort, dir }) {
  if (pages <= 1) return null;

  const createPageUrl = (p) => {
    const params = new URLSearchParams();
    if (sort) params.set("sort", sort);
    if (dir) params.set("dir", dir);
    params.set("page", p.toString());
    return `?${params.toString()}`;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between pt-4">
      <div className="text-sm text-[#5c4638]">
        Page <span className="font-semibold text-[#3b140d]">{page}</span> of{" "}
        <span className="font-semibold text-[#3b140d]">{pages}</span>
      </div>
      <div className="flex gap-2">
        {page > 1 ? (
          <Link
            href={createPageUrl(page - 1)}
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-[#3b140d] ring-1 ring-amber-900/10 hover:bg-amber-50"
          >
            Previous
          </Link>
        ) : (
          <span className="cursor-not-allowed rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-400">
            Previous
          </span>
        )}

        {page < pages ? (
          <Link
            href={createPageUrl(page + 1)}
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-[#3b140d] ring-1 ring-amber-900/10 hover:bg-amber-50"
          >
            Next
          </Link>
        ) : (
          <span className="cursor-not-allowed rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-400">
            Next
          </span>
        )}
      </div>
    </nav>
  );
}