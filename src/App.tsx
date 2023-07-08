import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [formRating, setFormRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmitForm() {
    if (formRating === 0) return alert("Please select a rating");
    setIsSubmitted(true);
  }
  return (
    <div className="min-h-screen w-full bg-neutral-veryDarkBlue flex justify-center items-center p-5">
      {!isSubmitted ? (
        <Rating setRating={setFormRating} onSubmitForm={handleSubmitForm} />
      ) : (
        <ThankYou rating={formRating} />
      )}
    </div>
  );
}
export default App;
