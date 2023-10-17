"use client";

import { CategoryEnum } from "../common/enums";
import PaginationControls from "./PaginationControls";

const Pagination = ({
  searchParams,
  length,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  length: number;
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = "5";
  const category = searchParams["category"] ?? "films";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  return (
    <div className="flex flex-col gap-2 items-center" data-testid="component-pagination">
      <PaginationControls
        hasNextPage={end < length}
        hasPrevPage={start > 0}
        length={length}
        category={category as CategoryEnum}
      />
    </div>
  );
};

export default Pagination;
