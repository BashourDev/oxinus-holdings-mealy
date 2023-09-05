const AppSearchInput = ({ placeholder, onChange, Icon }) => {
  return (
    <div
      className={`flex bg-white py-4 h-11 px-1 items-center space-x-1 text-dark text-xs lg:text-sm border-2 border-darkGray/20 rounded-md focus-within:border-primary transition duration-300`}
    >
      <input
        type="text"
        className={`border-0 focus:ring-0 outline-none w-full px-1`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {Icon && <Icon className="w-6 h-6" />}
    </div>
  );
};

export default AppSearchInput;
