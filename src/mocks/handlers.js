import { rest } from "msw";

const urlApi = process.env.REACT_APP_API_URL;
const users = [
  {
    name: "Carlitos",
    username: "Carlitus",
    password: "$2b$10$s3c31JSTdrwRMwW5jLaE6.ridoUF4lXQpSTQtECectp/aCmMNXswK",
    friends: ["618ecc54008088cc372842c6", "618fa76a5b619d1c20dbc17c"],
    enemies: [],
    age: 33,
    image:
      "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-14.png",
    id: "618eccea689d879ac3f85577",
  },
  {
    name: "Tadeoo",
    username: "Kaa",
    password: "$2b$10$PF3.N0Va1r4ALycxzvZCBOoLJxyx1Gl2Sfn/WvT6fXOqTKfVYo9li",
    friends: [],
    enemies: [],
    age: 21,
    image:
      "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-14.png",
    id: "618f9dd901f7f81708d4c16f",
  },
  {
    name: "Sandra",
    username: "Sindria",
    password: "$2b$10$RT0XdhRSP0DEkGj4RVwMd.FcDs1Lan1.GgiItGFe5voH1thIMFmoW",
    friends: [
      "618ecc54008088cc372842c6",
      "618eccea689d879ac3f85577",
      "618eccea689d879ac3f85577",
      "618eccea689d879ac3f85577",
    ],
    enemies: [],
    age: 30,
    image:
      "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-14.png",
    id: "618fa76a5b619d1c20dbc17c",
  },
];

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(users));
  }),
];

export default handlers;
