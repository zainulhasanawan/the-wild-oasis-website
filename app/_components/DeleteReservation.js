"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { deleteBooking } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => deleteBooking(bookingId));
  }

  return (
    <button
      disabled={isPending}
      onClick={handleDelete}
      className={`group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 transition-colors ${
        isPending
          ? "cursor-not-allowed"
          : "hover:bg-accent-600 hover:text-primary-900"
      }`}
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
