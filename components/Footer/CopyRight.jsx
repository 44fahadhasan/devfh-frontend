const CopyRight = () => {
  return (
    <div className="border-s ps-5 ms-5 border-gray-200 dark:border-neutral-700">
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} Md. Fahad Hasan
      </p>
    </div>
  );
};

export default CopyRight;
