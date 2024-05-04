const Header = () => {
  return (
    <header className="mx-4 lg:m-0">
      <div className="container mx-auto px-2 md:px-10 lg:px-20">
        <div className="navbar bg-[#F85559] rounded-full my-10  p-3 lg:flex hidden">
          <div className="navbar-start">
            <ul className="menu menu-horizontal text-md px-1 text-white font-bold">
              <li>
                <a className="#">Home</a>
              </li>
              <li>
                <a className="#">About Us</a>
              </li>
              <li>
                <a className="#">Shop</a>
              </li>
              <li>
                <a className="#">All Fruit</a>
              </li>
            </ul>
          </div>
          <div className="navbar-center">
            <a href="#" className="flex items-center">
              <img src="./images/logo.png" alt="Logo" className="w-3/12" />
              <span className="text-white ms-4 text-2xl font-bold">
                Fruit Burst
              </span>
            </a>
          </div>
          <div className="navbar-end">
            <div className="form-control relative">
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered rounded-full w-24 md:w-auto"
              />
              <div className="icon absolute right-4 top-3">
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-between lg:my-10 my-3 p-3">
          <div className="navbar-left">
            <a href="#" className="flex items-center">
              <img src="./images/logo.png" alt="Logo" className="w-3/12" />
              <span className="text-gray-900 ms-4 text-2xl font-bold">
                Fruit Burst
              </span>
            </a>
          </div>
          <div className="navbar-right flex items-center">
            <a href="#">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="banner relative">
        <div className="container mx-auto">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div
                className="hero lg:place-items-center place-items-start rounded-md"
                style={{ backgroundImage: `url(./images/banner1.png)` }}
              >
                <div className="hero-overlay banner-overly"></div>
                <div className="hero-content p-0 lg:pt-20 pt-12 lg:pb-40 pb-5 text-center  text-white">
                  <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
                      Exotic tastes at your doorstep
                    </h1>
                    <p className="mb-5">
                      We supply highly quality organic products
                    </p>
                    <button className="btn btn-accents border-0 text-white">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div
                className="hero lg:place-items-center place-items-start rounded-md"
                style={{ backgroundImage: `url(./images/banner2.png)` }}
              >
                <div className="hero-overlay banner-overly"></div>
                <div className="hero-content p-0 lg:pt-20 pt-12 lg:pb-40 pb-5 text-center  text-white">
                  <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
                      Exotic tastes at your doorstep
                    </h1>
                    <p className="mb-5">
                      We supply highly quality organic products
                    </p>
                    <button className="btn btn-accents border-0 text-white">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div
                className="hero lg:place-items-center place-items-start rounded-md"
                style={{ backgroundImage: `url(./images/banner3.png)` }}
              >
                <div className="hero-overlay banner-overly"></div>
                <div className="hero-content p-0 lg:pt-20 pt-12 lg:pb-40 pb-5 text-center  text-white">
                  <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
                      Exotic tastes at your doorstep
                    </h1>
                    <p className="mb-5">
                      We supply highly quality organic products
                    </p>
                    <button className="btn btn-accents border-0 text-white">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div
                className="hero lg:place-items-center place-items-start rounded-md"
                style={{ backgroundImage: `url(./images/banner4.png)` }}
              >
                <div className="hero-overlay banner-overly"></div>
                <div className="hero-content p-0 lg:pt-20 pt-12 lg:pb-40 pb-5 text-center  text-white">
                  <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
                      Exotic tastes at your doorstep
                    </h1>
                    <p className="mb-5">
                      We supply highly quality organic products
                    </p>
                    <button className="btn btn-accents border-0 text-white">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="categories lg:block hidden inset-x-48 -bottom-20 absolute w-8/12 mx-auto">
          <div className="bg-white border p-6 justify-center items-center rounded-lg grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
            <div className="card">
              <figure className="">
                <img
                  src="./images/fruit1.png"
                  alt="fruit"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-0 py-2 items-center text-center">
                <h2 className="card-title text-slate-700 font-normal">
                  Strawberry
                </h2>
              </div>
            </div>
            <div className="card">
              <figure className="">
                <img
                  src="./images/fruit2.png"
                  alt="fruit"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-0 py-2 items-center text-center">
                <h2 className="card-title text-slate-700 font-normal">
                  Orange
                </h2>
              </div>
            </div>
            <div className="card">
              <figure className="">
                <img
                  src="./images/fruit3.png"
                  alt="fruit"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-0 py-2 items-center text-center">
                <h2 className="card-title text-slate-700 font-normal">Mango</h2>
              </div>
            </div>
            <div className="card">
              <figure className="">
                <img
                  src="./images/fruit4.png"
                  alt="fruit"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-0 py-2 items-center text-center">
                <h2 className="card-title text-slate-700 font-normal">
                  Strawberry
                </h2>
              </div>
            </div>
            <div className="card">
              <figure className="">
                <img
                  src="./images/fruit5.png"
                  alt="fruit"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body p-0 py-2 items-center text-center">
                <h2 className="card-title text-slate-700 font-normal">Mango</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
