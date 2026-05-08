import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold">High Quality Services</h1>
        <p className="text-sm text-muted-foreground">Operations Dashboard</p>
      </div>

      <nav className="flex gap-4">
        <Link to="/">Dashboard</Link>
      </nav>
    </>
  );
}
