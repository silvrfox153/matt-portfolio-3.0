import Link from 'next/link';
import Image from 'next/image';
import paddysLogo from '/public/assets/logos/paddys-logo.svg';
import leducLogo from '/public/assets/logos/leduc-art-and-antiques-white-logo.svg';
import mcGuirkLogo from '/public/assets/logos/joe-mcguirk-logo.svg';
import timmyLogo from '/public/assets/logos/timmy-sullivan-logo.svg';
import ruthRyanLogo from '/public/assets/logos/ruth-ryan-allen-logo.svg';
import seanTierneyLogo from '/public/assets/logos/sean-tierney-logo.svg';

const Projects = () => {
  return (
    <section id="projects" className="pt-5">
      <div className="py-5 px-5">
        <h2 className="uppercase text-xl text-white font-semibold">Projects</h2>
      </div>
      <div className="px-5">
        <ul className="group/list">
          {/* ===== PADDYS LUNCH ===== */}
          <li className="mb-12">
            <div className="group relative grid gap-4 p-6 sm:pb-1 rounded-lg transition-all bg-slate-800 sm:bg-transparent sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Image
                src={paddysLogo}
                alt="Paddy's Lunch Logo"
                className="z-10 w-72 mx-auto sm:w-[full]"
              />

              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    target="_blank"
                    rel="#"
                    aria-label="Paddy's Lucnh"
                    href="https://paddys34.com/"
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Paddy&apos;s Lunch
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-normal">
                  Built and continue to maintain website using WordPress,
                  Elementor, and Woocommerce. Integrated HubSpot, Google
                  Anlaytics, Google Workspace, and Shipstation. Trained staff on
                  fullfillment management using Shipstation. Contine to provide
                  support and training as needed.
                </p>
              </div>
            </div>
          </li>
          {/* ===== LEDUC ARTS & ANTIQUES ===== */}
          <li className="mb-12">
            <div className="group relative grid gap-4 p-6 sm:pb-1 rounded-lg transition-all bg-slate-800 sm:bg-transparent sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Image
                src={leducLogo}
                alt="Leduc Art & Antiques Logo"
                className="z-10 w-72 mx-auto sm:w-[full]"
              />

              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    target="_blank"
                    rel="#"
                    aria-label="Leduc Art & Antiques"
                    href="https://leducartandantiques.com/"
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Leduc Art & Antiques
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-normal">
                  Built and continue to maintain website using WordPress, and
                  Elementor. Designed business logo. Integrated HubSpot, and
                  Google Anlaytics.
                </p>
              </div>
            </div>
          </li>
          {/* ===== JOE MCGUIRK ===== */}
          <li className="mb-12">
            <div className="group relative grid gap-4 p-6 sm:pb-1 rounded-lg transition-all bg-slate-800 sm:bg-transparent sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Image
                src={mcGuirkLogo}
                alt="Joe McGuirk Campaign Logo"
                className="z-10 w-72 mx-auto sm:w-[full]"
              />
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    target="_blank"
                    rel="#"
                    aria-label="Joe McGuirk For Cambridge"
                    href="https://www.joemcguirkforcambridge.com/"
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 undefined group/link text-base"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Joe McGuirk For Cambridge
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-normal">
                  Built and continue to maintain campaign website using
                  Squarespace. Manage third party integrations; Actblue,
                  Votebuilder, Google Workspace and Google Anlaytics. Designed
                  campaign logo.
                </p>
              </div>
            </div>
          </li>
          {/* ===== TIMMY SULLIVAN ===== */}
          <li className="mb-12">
            <div className="group relative grid gap-4 p-6 sm:pb-1 rounded-lg transition-all bg-slate-800 sm:bg-transparent sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Image
                src={timmyLogo}
                alt="Timmy Sullivan Logo"
                className="z-10 w-72 mx-auto sm:w-[full]"
              />
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 undefined group/link text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Timmy Sullivan For State Rep
                    <span className="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-normal">
                  Built and maintained campaign website using Squarespace.
                  Integrated Google Analytics.
                </p>
                <p className="text-sm mt-2 text-slate-400">
                  Site retired at end of campaign in 2022
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            {/* ===== RUTH RYAN ALLEN ===== */}
            <div className="group relative grid gap-4 p-6 sm:pb-1 rounded-lg transition-all bg-slate-800 sm:bg-transparent sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Image
                src={ruthRyanLogo}
                alt="Ruth Ryan Allen Logo"
                className="z-10 w-72 mx-auto sm:w-[full]"
              />
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 undefined group/link text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Ruth Ryan Allen For School Committee
                    <span className="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-normal">
                  Built and maintained campaign website using WordPress. Managed
                  third party integrations. Actblue, Votebuilder, Google
                  Workspace. Designed campaign logo. Integrated Google
                  Analytics.
                </p>
                <p className="text-sm mt-2 text-slate-400">
                  Site retired in 2022.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            {/* ===== SEAN TIERNEY ===== */}
            <div className="group relative grid gap-4 p-6 sm:pb-1 rounded-lg transition-all bg-slate-800 sm:bg-transparent sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <Image
                src={seanTierneyLogo}
                alt="Sean Tierney Logo"
                className="z-10 w-72 mx-auto sm:w-[full]"
              />
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 undefined group/link text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Sean Tierney For Cambridge
                    <span className="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-normal">
                  Built and maintained campaign website using Squarespace.
                  Managed third party integrations including Actblue,
                  Votebuilder, Google Workspace. Integrated Google Analytics.
                </p>
                <p className="text-sm mt-2 text-slate-400">
                  Site retired at in 2019.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
