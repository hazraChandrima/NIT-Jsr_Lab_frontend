const Button = () => {
  return (
    // <button className="transition duration-500 border-2 border-blue-500 ease-in-out bg-blue-500 text-white hover:bg-transparent hover:text-blue-500   py-2 px-4">
    //   Search Contents PDF
    // </button>
    <a
      href="/path/to/your/pdf/file.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="transition duration-500 border-2 border-blue-500 ease-in-out bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 py-2 px-4 "
    >
      Search Contents PDF
    </a>
  );
};

export default Button;
