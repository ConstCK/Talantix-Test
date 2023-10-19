const establishmentList = [
  {
    id: 1,
    city: "Москва",
    department: [
      {
        name: "Первый цех",
        staff: ["Иванов", "Петров", "Сидоров"],
      },
      {
        name: "Второй цех",
        staff: ["Белов", "Чернов"],
      },
    ],
  },
  {
    id: 2,
    city: "Краснодар",
    department: [
      {
        name: "Третий цех",
        staff: ["Дорохов", "Харламов"],
      },
      {
        name: "Четвертый цех",
        staff: ["Акопян", "Григорян"],
      },
      {
        name: "Пятый цех",
        staff: ["Первый", "Второй"],
      },
    ],
  },
  {
    id: 3,
    city: "Вашингтон",
    department: [
      {
        name: "Восьмой цех",
        staff: ["Джонсон", "Голд"],
      },
      {
        name: "Девятый цех",
        staff: ["Ричардсон", "Вайт", "Блэк"],
      },
    ],
  },
];

const baseUrl = "http://127.0.0.1:8000/api/";
const establishmentUrl = "add-employee/";
export { establishmentList, baseUrl, establishmentUrl };
