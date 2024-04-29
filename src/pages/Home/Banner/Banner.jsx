const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co/gSSLzd3/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold font-lora font-bold text-yellow-500">
            Your health is our top priority
          </h1>
          <p className="my-9 text-xl font-semibold font-poppins">
            Get the answers you need for a healthier you at our medical
            diagnostic center.
          </p>
          <button className="btn btn-warning font-lora">Book a visit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
