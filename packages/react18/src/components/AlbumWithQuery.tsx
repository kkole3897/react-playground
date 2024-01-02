import { useSuspenseQuery } from "@tanstack/react-query";
import { getAlbumData } from "@/api/album";

export default function AlbumWithQuery() {
  const { data } = useSuspenseQuery({
    queryKey: ["album"],
    queryFn: getAlbumData,
  });

  return <div>{data.name}</div>;
}
