import { Suspense } from "react";
import Loading from "@/components/Loading";
import Album from "@/components/Album";

export default function SuspensePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Album />
    </Suspense>
  );
}
