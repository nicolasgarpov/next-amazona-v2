import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            NEXT AMAZONA V2
          </Link>
          <ul className="flex">
            <li>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                CART
              </Link>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                SIGN IN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
