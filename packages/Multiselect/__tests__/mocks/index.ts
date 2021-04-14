export const props = {
  data: {
    identification: "id",
    keyValue: "name",
    filterBy: ["name"],
    data: [
      {
        checked: true,
        description: "Lorem ipsum dolor.",
        id: 1,
        name: "Blaze 1",
        show: true
      },
      {
        checked: true,
        description: "Lorem ipsum dolor.",
        id: 2,
        name: [["Blaze 2", 'multi main label'], ['Sub label 1', 'sub label 2', 'sub label 3']],
        show: true
      },
      {
        checked: false,
        description: "Lorem ipsum dolor.",
        id: 3,
        name: ["Blaze 3", ['Sub label 1', 'sub label 2']],
        show: true
      }
    ]
  }
}