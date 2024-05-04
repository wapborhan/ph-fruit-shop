const Team = () => {
  return (
    <section id="team" className="lg:mb-20 mb-8">
      <div className="container mx-auto">
        <div
          className="hero rounded-md"
          style={{ backgroundImage: `url(./images/banner1.png)` }}
        >
          <div className="hero-overlay rounded-md team-overly"></div>
          <div className="hero-content text-center text-neutral-content py-20">
            <div className="">
              <div className="max-w-lg mx-auto text-white">
                <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
                  Meet the team section
                </h1>
                <p className="mb-5 lg:text-sm text-xs">
                  Contrary to popular belief, is not simply random text. It has
                  roots in a piece of classNameical Latin literature from 45 BC,
                  making it over 2000 years old.
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <div className="card">
                  <figure className="px-10 pt-10">
                    <img
                      src="./images/member1.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Awlad Hossain</h2>
                    <p>Fruits Expert</p>
                    <div className="card-actions gap-4 text-[#F85559]">
                      <i className="fa-brands fa-square-facebook"></i>
                      <i className="fa-brands fa-square-twitter"></i>
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <figure className="px-10 pt-10">
                    <img
                      src="./images/member2.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Safia Chowdhury</h2>
                    <p>Fruits Expert</p>
                    <div className="card-actions gap-4 text-[#F85559]">
                      <i className="fa-brands fa-square-facebook"></i>
                      <i className="fa-brands fa-square-twitter"></i>
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <figure className="px-10 pt-10">
                    <img
                      src="./images/member3.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Rokib Hossain</h2>
                    <p>Fruits Expert</p>
                    <div className="card-actions gap-4 text-[#F85559]">
                      <i className="fa-brands fa-square-facebook"></i>
                      <i className="fa-brands fa-square-twitter"></i>
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <figure className="px-10 pt-10">
                    <img
                      src="./images/member4.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Chaity</h2>
                    <p>Fruits Expert</p>
                    <div className="card-actions gap-4 text-[#F85559]">
                      <i className="fa-brands fa-square-facebook"></i>
                      <i className="fa-brands fa-square-twitter"></i>
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
