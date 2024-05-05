const AboutUs = () => {
  return (
    <>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

      <section className="relative pt-16 bg-blueGray-50">
        <div className="container  max-w-[90vw] mx-auto">
          <div className="flex flex-wrap lg:flex-row flex-col items-center">
            <div className="w-[90vw] md:w-6/12 lg:w-4/12 lg:px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img alt="..." src="https://tse4.mm.bing.net/th?id=OIP.dkBD-tySSh7Dvo4MRCgungHaEo&pid=Api&P=0&h=220" className="w-full align-middle rounded-t-lg" />
                
                <blockquote className="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                  </svg>
                  <h4 className="text-xl font-semibold text-white">
                    Create relation with your  partner
                  </h4>
                  <p className="text-md  mt-2 font-light  text-white">
                    We are working hard to find your future husband and wife.
                    Make your marriage life better to find your perfect partner
                    from life puls, the whole collection is in your hand.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Find partner</h6>
                      <p className="mb-4 text-blueGray-500">
                        This platform help you to find your future husband or wife. Now, you have lots of collection in your hand.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Prevent Late Marriage
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Many of us want to marry. But they get late to find someone. So, this platform help you find your choice as fast as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Verification</h6>
                      <p className="mb-4 text-blueGray-500">
                        If you want to get rid from fake partner, this website is suggested for your. Because all the details here are verified.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Happy Family</h6>
                      <p className="mb-4 text-blueGray-500">
                        We want to make a happy society by creating too many happy families. And we have lots of option to find your best partner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative lg:block md:hidden hidden bg-blueGray-50 pt-8 pb-6 mt-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <img width={50}
              src="https://i.ibb.co/5R6pwng/th-removebg-preview-5.png"
              alt=""

            />
            <div className=" w-[100px]  px-4  text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with life puls team
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;