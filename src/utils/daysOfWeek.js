const currentTime = new Date();
export const daysOfWeek = {
  current: {
    numberDay: currentTime.getDay(),
    nameDay: currentTime
      .toLocaleDateString("en-US", { weekday: "long" })
      .substring(0, 3),
    nameDayEs: currentTime
      .toLocaleDateString("es-MX", { weekday: "long" })
      .substring(0, 2),
  },
  week: [
    {
      numberDay: 0,
      nameDay: "Sun",
      nameDayEs: "Do",
    },
    {
      numberDay: 1,
      nameDay: "Mon",
      nameDayEs: "Lu",
    },
    {
      numberDay: 2,
      nameDay: "Tue",
      nameDayEs: "Ma",
    },
    {
      numberDay: 3,
      nameDay: "Wen",
      nameDayEs: "Mi",
    },
    {
      numberDay: 4,
      nameDay: "Thu",
      nameDayEs: "Ju",
    },
    {
      numberDay: 5,
      nameDay: "Fri",
      nameDayEs: "Vi",
    },
    {
      numberDay: 6,
      nameDay: "Sat",
      nameDayEs: "Sa",
    },
  ],
};
