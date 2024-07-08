export const AwardIcon = ({ color = "currentColor", className = "" }) => {
  return (
    <svg
      className={`feather feather-award ${className}`}
      fill="none"
      height="24"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
};
