// This react component is a button on the bottom right of the screen that let the user return to the top of the page
export default function TopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-50 p-2 bg-secondary dark:bg-dk-secondary rounded-full text-primary dark:text-dk-primary"
      onClick={handleScrollToTop}
    >
      <svg
        className="fill-current h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L0 12h5v10h14v-10h5L12 2Z" />
      </svg>
    </button>
  );
}
