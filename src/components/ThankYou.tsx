function ThankYou({ rating }: { rating: number }) {
  return (
    <div className="bg-gradient-to-b from-[#212932] to-[#1a1d25] text-neutral-lightGray max-w-xl p-10 text-center rounded-3xl">
      <img src="/illustration-thank-you.svg" alt="" className="mx-auto mb-10" />
      <span className="bg-neutral-darkBlue text-lg text-orange-400 py-2 px-5  rounded-full">
        You selected {rating} out of 5
      </span>
      <h1 className="text-4xl font-bold mt-10 mb-5 text-white">Thank you!</h1>
      <p className="text-lg">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
export default ThankYou;
