"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CategoryEnum } from "../common/enums";
import Button from "./Button";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  length: number;
  category: CategoryEnum;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  length,
  category,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const page = searchParams.get("page") ?? "1";
  const limit = "5";

  return (
    <div className="flex items-center gap-2">
      <Button
        label={"<"}
        onClick={() => {
          router.push(`/?category=${category}&page=${Number(page) - 1}`);
        }}
        disabled={hasPrevPage}
      />
      <div className="font-semibold text-white select-none">
        {page} / {Math.ceil(length / Number(limit))}
      </div>
      <Button
        label={">"}
        onClick={() => {
          router.push(`/?category=${category}&page=${Number(page) + 1}`);
        }}
        disabled={hasNextPage}
      />
    </div>
  );
};

export default PaginationControls;
