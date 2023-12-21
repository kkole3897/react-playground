import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/album", () => {
    return HttpResponse.json({
      data: {
        name: "hello",
      },
    });
  }),
];
