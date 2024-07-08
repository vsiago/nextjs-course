//https://www.iconfinder.com/search/icons?family=feather

export const HomeIcon = ({ color = "currentColor", className = "" }) => {
  return (
    <svg
      className={`${className}`}
      fill="none" // Mudei aqui para "none"
      height="24"
      stroke={color} // Usei a propriedade "color" para stroke
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};
