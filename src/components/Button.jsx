function Button(props) {
  return (
    <button {...props} className="bg-slate-400 rounded-md p-2 text-white">
      {props.children}
    </button>
  );
}
export default Button;
