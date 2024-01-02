import { getAlbumData } from "@/api/album";

type Status = "pending" | "error" | "success";

function wrapPromise<T>(promise: Promise<T>) {
  let status: Status = "pending";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let response: any;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

const resource = wrapPromise(getAlbumData());
// TODO: msw 오류 해결 필요
// const resource = wrapPromise(fetch('/api/album'));

export default function Album() {
  const data = resource.read();

  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}
