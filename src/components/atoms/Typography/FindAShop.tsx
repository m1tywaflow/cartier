export default function FindAShopTypo() {
  return (
    <>
      <section className=" pt-40 bg-white mx-auto text-center">
        <div className="max-w-7xl mx-auto text-center text-black space-y-8 font-mono">
          <h1 className="text-4xl">Come Visit Us</h1>
          <p className="text-xl">
            We’re always happy to welcome you in person. Stop by our shop to
            explore our products, get personal recommendations, and enjoy the
            full experience.
          </p>
          <p className="text-black/40 ">
            Need help finding us? Check the map below or{" "}
            <a
              href="/contact"
              className="underline hover:text-black transition duration-200"
            >
              {" "}
              contact
            </a>{" "}
            us for directions.
          </p>
        </div>
      </section>
    </>
  );
}
