export const menuItems = [
  {
    id: 1,
    title: "HOME",
    isActive: true,
    link: "/"
  },
  {
    id: 2,
    title: "The Challenge",
    subMenuItems: [
      { id: 21, label: "The Macro Challenge", link: "/about" },
      { id: 27, label: "The Micro Challenge", link: "/microproblem" },
    ],
  },
  {
    id: 3,
    title: "Features",
    link: "/service-3"
  },
  {
    id: 4,
    title: "Use Cases",
    subMenuItems: [
      { id: 41, label: "Blog Standard", link: "/blog" },
      { id: 42, label: "Blog 2 Column", link: "/blog-2" },
      { id: 43, label: "Blog Details", link: "/blog-details/2" },
    ],
  },
];
