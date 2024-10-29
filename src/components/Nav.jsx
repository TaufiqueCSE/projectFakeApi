
const Nav = () => {
  return (
    <nav className="h-full w-[20%] bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="rounded-md py-2 px-3 border-2 border-blue-200 font-semibold text-blue-600"
        href="/create"
      >
        Add new product
      </a>
      <hr className="w-[90%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%]">category</h1>
      <ul className="bg-red-50 w-[80%]">
        <li className="bg-gray-200 p-1 font-medium mb-2 flex items-center gap-2">
          <span className="inline-block rounded-full w-3 h-3 bg-green-300"></span>{" "}
          Cat1
        </li>
        <li className="bg-gray-200 p-1 font-medium mb-2 flex items-center gap-2">
          <span className="inline-block rounded-full w-3 h-3 bg-pink-300"></span>{" "}
          Cat1
        </li>
        <li className="bg-gray-200 p-1 font-medium mb-2 flex items-center gap-2">
          <span className="inline-block rounded-full w-3 h-3 bg-blue-300"></span>{" "}
          Cat1
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
