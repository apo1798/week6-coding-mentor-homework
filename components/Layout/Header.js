import Link from "next/link";
import Image from "next/image";

// import Logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800">
        <div className="container px-4">
          <nav className="navbar navbar-expand-lg navbar-dark justify-content-between py-6">
            <Link href="/">
              <a className="">
                <img
                  src="/images/logo.svg"
                  width={174}
                  height={42}
                  alt="Coding Home Logo"
                />
              </a>
            </Link>

            <button
              className="navbar-toggler border-0 navbar-custom-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-custom-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse flex-grow-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-lg-flex mt-4 gap-6 mt-lg-0 gap-lg-12">
                <li>
                  <Link href="/">
                    <a className="text-white link-primary text-decoration-none">
                      首頁
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-white link-primary text-decoration-none">
                      課程介紹
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-white link-primary text-decoration-none d-flex">
                      <span className="material-icons">account_circle</span>
                      登入
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="d-flex">
        <div className="border-primary border-bottom border-2 flex-grow-1"></div>
        <div className="border-secondary border-bottom border-2 flex-grow-1"></div>
      </div>
    </>
  );
};
export default Header;
