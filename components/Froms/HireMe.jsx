import Button from "../Button";

const HireMe = () => {
  return (
    <form className="max-w-sm m-3 space-y-6 text-gray-600 dark:text-neutral-400">
      <input
        type="text"
        className="dark:bg-neutral-800 w-full text-sm px-4 py-3 2xl:py-3 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200 focus:border-gray-600  dark:border-none"
        placeholder="Full Name"
      />

      <input
        type="email"
        className="dark:bg-neutral-800 w-full text-sm px-4 py-3 2xl:py-3 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200 focus:border-gray-600  dark:border-none"
        placeholder="Email Address"
      />

      <input
        type="tel"
        className="dark:bg-neutral-800 w-full text-sm px-4 py-3 2xl:py-3 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200 focus:border-gray-600  dark:border-none"
        placeholder="Phone Number"
      />

      <select className="dark:bg-neutral-800 px-4 py-3 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200 dark:border-none  focus:border-gray-600 w-full">
        <option value="Full Stack">Full Stack</option>
        <option value="Frontend">Front End</option>
        <option value="Frontend">Back End</option>
      </select>

      <textarea
        className="dark:bg-neutral-800 px-4 py-3 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200 dark:border-none focus:border-gray-600 w-full"
        id="message"
        name="message"
        rows="5"
        aria-label="Details"
        placeholder="Project description"
      ></textarea>

      <button type="submit">
        <Button label={"Send Request"} />
      </button>
    </form>
  );
};

export default HireMe;
