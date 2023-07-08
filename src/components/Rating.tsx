import RatingSelect from "./RatingSelect";

function Rating({
  setRating,
  onSubmitForm,
}: {
  setRating: (rating: number) => void;
  onSubmitForm: () => void;
}) {
  return (
    <div className="bg-gradient-to-b from-[#212932] to-[#1a1d25] text-neutral-lightGray max-w-xl p-10 rounded-3xl">
      <img
        src="/icon-star.svg"
        alt="Star icon"
        className="p-3 bg-[#26303b] rounded-full"
      />
      <h1 className="text-4xl font-bold mt-10 mb-5 text-white">
        How did we do?
      </h1>
      <p className="text-lg mb-10">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingSelect onSetRating={setRating} />
      <div className="mt-10">
        <button
          className="py-3 bg-primary w-full uppercase text-white tracking-widest rounded-full hover:bg-white hover:text-primary transition-colors font-bold"
          onClick={onSubmitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Rating;
