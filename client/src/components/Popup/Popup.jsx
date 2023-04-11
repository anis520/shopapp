 
const Popup = ({ action,children }) => {
  return (
    <>
      {action.popup && (
        <div className="absolute inset-0 z-50 bg-opacity-50 h-screen w-screen flex items-center justify-center bg-black ">
          <div className="p-5  relative rounded-lg bg-white ">
            <span
              className="cursor-pointer  absolute top-0 font-bold text-2xl right-3"
              onClick={() => action.setpopup(false)}
            >
              x
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
