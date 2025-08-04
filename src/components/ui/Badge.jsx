const Badge = ({ text, color }) => (
  <span className={`absolute bottom-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${color} text-white shadow-lg`}>
    {text}
  </span>
);

export default Badge;
