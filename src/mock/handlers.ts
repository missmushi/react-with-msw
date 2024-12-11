import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("api/users", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "Mark",
        lastName: "Zucker",
        gender: "male",
      },
      {
        id: "a7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "Dua",
        lastName: "Lipa",
        gender: "female",
      },
    ]);
  }),
];
