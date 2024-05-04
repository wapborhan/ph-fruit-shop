import { useState, useEffect } from "react";

const Deal = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <section id="deal" className="lg:py-20 lg:mt-20 py-5 mt-5">
      <div className="container mx-auto px-2 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between mb-10">
          <div className="left lg:w-6/12 w-12/12 lg:text-left text-center">
            <h1 className="text-4xl font-bold">Deal of the day</h1>
            <p className="text-sm mt-5">
              Contrary to popular belief, is not simply random text. It has
              roots in a piece of classNameical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="right">
            <div className="grid lg:grid-flow-col md:grid-flow-col grid-cols-4 md:grid-cols-0 lg: grid-cols-0 gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.days }}></span>
                </span>
                days
              </div>
              <span className="text-5xl">:</span>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                hours
              </div>
              <span className="text-5xl">:</span>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                min
              </div>
              <span className="text-5xl">:</span>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mb-10">
          <div className="cards">
            <div className="card w-full bg-base-100 border border-slate-200">
              <figure className="px-10 pt-10">
                <img
                  src="./images/fruit6.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">12.90$ - 18.85$</h2>
                <div className="border mt-6 mb-6 w-10/12 border-slate-200"></div>
                <p>Apples</p>
                <div className="icons flex text-[#F85559] gap-2 mt-4 mb-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="card-actions">
                  <a
                    className="text-[#F85559] font-bold cursor-pointer"
                    // onclick="my_modal_1.showModal()"
                  >
                    Details
                  </a>
                  <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                      <figure className="px-10 pt-10">
                        <img
                          src="./images/fruit6.png"
                          alt="Shoes"
                          className="rounded-xl w-32"
                        />
                      </figure>
                      <h3 className="font-bold text-lg font-sans mt-4">
                        Apples
                      </h3>
                      <p className="py-4 w-8/12 mx-auto text-sm">
                        Professional employees are there for you to pick the
                        most amazing and fresh fruits.
                      </p>
                      <div className="icons flex justify-center text-[#F85559] gap-2 mt-4 mb-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="modal-action flex gap-5 justify-center">
                        <button className="btn btn-close">Close</button>
                        <button className="btn border-0 btn-accents text-white">
                          Buy Now
                        </button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card w-full bg-base-100 border border-slate-200">
              <figure className="px-10 pt-10">
                <img
                  src="./images/fruit9.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">12.90$ - 18.85$</h2>
                <div className="border mt-6 mb-6 w-10/12 border-slate-200"></div>
                <p>Apples</p>
                <div className="icons flex text-[#F85559] gap-2 mt-4 mb-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="card-actions">
                  <a
                    className="text-[#F85559] font-bold cursor-pointer"
                    // onclick="my_modal_2.showModal()"
                  >
                    Details
                  </a>
                  <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                      <figure className="px-10 pt-10">
                        <img
                          src="./images/fruit9.png"
                          alt="Shoes"
                          className="rounded-xl w-32"
                        />
                      </figure>
                      <h3 className="font-bold text-lg font-sans mt-4">
                        Apples
                      </h3>
                      <p className="py-4 w-8/12 mx-auto text-sm">
                        Professional employees are there for you to pick the
                        most amazing and fresh fruits.
                      </p>
                      <div className="icons flex justify-center text-[#F85559] gap-2 mt-4 mb-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="modal-action flex gap-5 justify-center">
                        <button className="btn btn-close">Close</button>
                        <button className="btn border-0 btn-accents text-white">
                          Buy Now
                        </button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card w-full bg-base-100 border border-slate-200">
              <figure className="px-10 pt-10">
                <img
                  src="./images/fruit8.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">12.90$ - 18.85$</h2>
                <div className="border mt-6 mb-6 w-10/12 border-slate-200"></div>
                <p>Apples</p>
                <div className="icons flex text-[#F85559] gap-2 mt-4 mb-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="card-actions">
                  <a
                    className="text-[#F85559] font-bold cursor-pointer"
                    // onclick="my_modal_3.showModal()"
                  >
                    Details
                  </a>
                  <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                      <figure className="px-10 pt-10">
                        <img
                          src="./images/fruit8.png"
                          alt="Shoes"
                          className="rounded-xl w-32"
                        />
                      </figure>
                      <h3 className="font-bold text-lg font-sans mt-4">
                        Apples
                      </h3>
                      <p className="py-4 w-8/12 mx-auto text-sm">
                        Professional employees are there for you to pick the
                        most amazing and fresh fruits.
                      </p>
                      <div className="icons flex justify-center text-[#F85559] gap-2 mt-4 mb-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="modal-action flex gap-5 justify-center">
                        <button className="btn btn-close">Close</button>
                        <button className="btn border-0 btn-accents text-white">
                          Buy Now
                        </button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card w-full bg-base-100 border border-slate-200">
              <figure className="px-10 pt-10">
                <img
                  src="./images/fruit5.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">12.90$ - 18.85$</h2>
                <div className="border mt-6 mb-6 w-10/12 border-slate-200"></div>
                <p>Apples</p>
                <div className="icons flex text-[#F85559] gap-2 mt-4 mb-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="card-actions">
                  <a
                    className="text-[#F85559] font-bold cursor-pointer"
                    // onclick="my_modal_4.showModal()"
                  >
                    Details
                  </a>
                  <dialog id="my_modal_4" className="modal">
                    <form method="dialog" className="modal-box">
                      <figure className="px-10 pt-10">
                        <img
                          src="./images/fruit5.png"
                          alt="Shoes"
                          className="rounded-xl w-32"
                        />
                      </figure>
                      <h3 className="font-bold text-lg font-sans mt-4">
                        Apples
                      </h3>
                      <p className="py-4 w-8/12 mx-auto text-sm">
                        Professional employees are there for you to pick the
                        most amazing and fresh fruits.
                      </p>
                      <div className="icons flex justify-center text-[#F85559] gap-2 mt-4 mb-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="modal-action flex gap-5 justify-center">
                        <button className="btn btn-close">Close</button>
                        <button className="btn border-0 btn-accents text-white">
                          Buy Now
                        </button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <button className="btn btn-accents text-white">Show More</button>
        </div>
      </div>
    </section>
  );
};

export default Deal;
