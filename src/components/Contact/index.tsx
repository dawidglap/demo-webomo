import React from "react";

const Contact = () => {
  return (
    <>
      <section id="support" className="pb-[110px] pt-[100px] md:pt-[150px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Kostenlose Beratung
            </h2>
            <p className="text-base text-body">
              Wir hören Ihnen genau zu und bieten Ihnen wertvolle Insights, die
              Ihnen helfen, ihre Ziele effizient zu erreichen.
            </p>
          </div>
        </div>

        <div className="container px-0 md:px-4">
          <div
            className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 px-4 py-10 shadow-card dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8"
            data-wow-delay=".3s"
          >
            <form>
              <div className="-mx-[22px] flex flex-wrap">
                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Geben Sie Ihren Namen ein"
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Firma (optional)"
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Geben Sie Ihre Telefonnummer ein"
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px]">
                  <div className="mb-8">
                    <textarea
                      rows={6}
                      name="message"
                      id="message"
                      placeholder="Erzählen Sie uns etwas über sich"
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full px-[22px]">
                  <div className="text-center">
                    <p className="mb-5 text-center text-base text-body">
                      Indem Sie auf die Schaltfläche "Kontaktieren Sie uns"
                      klicken, stimmen Sie unseren Bedingungen und Richtlinien
                      zu.
                    </p>
                    <button
                      type="submit"
                      className="inline-block  rounded-[30px] bg-primary px-11 py-[14px] text-base font-medium text-white hover:bg-opacity-90"
                    >
                      Kontaktieren Sie uns
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
