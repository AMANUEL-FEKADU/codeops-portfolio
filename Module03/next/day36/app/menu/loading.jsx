import DishSkeleton from "./DishSkeleton";

export default function Loading() {
  return (
    <div>
      <div className="h-8 w-40 animate-pulse rounded bg-amber-100" />
      <div className="mt-6">
        <DishSkeleton />
      </div>
    </div>
  );
}
