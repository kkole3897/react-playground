import { Suspense } from "react";
import Loading from "@/components/Loading";
import AlbumWithQuery from "@/components/AlbumWithQuery";

export default function SuspenseWithReactQueryPage() {
  return (
    <div>
      <div>Suspense With React Query</div>
      <Suspense fallback={<Loading />}>
        <AlbumWithQuery />
      </Suspense>
    </div>
  );
}
