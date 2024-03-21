import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" text-white">
      <h1 className="text-[50px] text-amber-700">Welcome to Remix!!</h1>
      <ul>
        <li>
          <Link to="/about">Go to about</Link>
        </li>
        <li>
          <Link to="/posts/create">Go to create</Link>
        </li>
      </ul>
    </div>
  );
}
