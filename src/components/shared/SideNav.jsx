import Link from "next/link";

const SideNav = () => {
  //http://localhost:3000/products/12/ss/eqdwqd
  return (
    <div className="bg-sky-700 min-h-screen">
      <ul className="menu rounded-box w-56 bg-sky-700">
        <li>
          <Link href='/dashboard/admin'>Admin Dashboard</Link>
        </li>
        <li>
        <Link href='/dashboard/user'>User Dashboard</Link>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
