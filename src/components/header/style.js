const headerStyle = {
  nav: "flex gap-3 items-center",
  ul: "flex",
  li: "",
  link: (active)=>`p-4 flex hover:bg-red-400 hover:text-white font-bold ${active ? "bg-red-400 text-white" : null} duration-300`,
};

export default headerStyle;
