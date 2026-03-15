export type Card = {
  img: string;
  title: string;
  price: string;
  bgColor?: string;
};

export const cards: Card[] = [
  {
    img: "/section/firstOne.png",
    title: "Panthère",
    price: "$9,000",
    bgColor: "#C8102E",
  },
  {
    img: "/section/secondOne.jpg",
    title: "Pasha",
    price: "$9,000",
  },
  {
    img: "/section/thirdOne.png",
    title: "Ballon",
    price: "$9,000",
    bgColor: "#171799",
  },
];
