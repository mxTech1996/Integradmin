// --- Componente de Botón Reutilizable ---
const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses =
    'px-8 py-3 rounded-md font-semibold transition-colors duration-300';
  const variants = {
    primary: 'bg-yellow-900 text-white hover:bg-amber-700',
    outline:
      'bg-transparent text-white border border-white hover:bg-white hover:text-slate-900',
  };
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
