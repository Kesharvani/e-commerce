export const Button = ({ children, btnHandler, headerbtnClass }) => {
    return (
      <button onClick={btnHandler} className={headerbtnClass}>
        {children}
      </button>
    );
  };