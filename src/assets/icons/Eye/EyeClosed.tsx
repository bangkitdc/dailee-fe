type IconPropType = {
  fillClassName: string
};

export const EyeClosed = ({ fillClassName }: IconPropType) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.70704 2.29292C3.51844 2.11076 3.26584 2.00997 3.00364 2.01224C2.74144 2.01452 2.49063 2.11969 2.30522 2.3051C2.11981 2.49051 2.01465 2.74132 2.01237 3.00352C2.01009 3.26571 2.11088 3.51832 2.29304 3.70692L16.293 17.7069C16.4816 17.8891 16.7342 17.9899 16.9964 17.9876C17.2586 17.9853 17.5095 17.8801 17.6949 17.6947C17.8803 17.5093 17.9854 17.2585 17.9877 16.9963C17.99 16.7341 17.8892 16.4815 17.707 16.2929L16.234 14.8199C17.7916 13.578 18.9433 11.8998 19.542 9.99992C18.268 5.94292 14.478 2.99992 10 2.99992C8.43247 2.99779 6.88654 3.36577 5.48804 4.07392L3.70704 2.29292ZM7.96804 6.55292L9.48204 8.06792C9.82113 7.97787 10.1779 7.97847 10.5167 8.06965C10.8555 8.16083 11.1644 8.3394 11.4125 8.58748C11.6606 8.83557 11.8391 9.14446 11.9303 9.48325C12.0215 9.82204 12.0221 10.1788 11.932 10.5179L13.446 12.0319C13.897 11.2679 14.0812 10.3757 13.9697 9.49559C13.8581 8.61548 13.4572 7.79741 12.8299 7.1701C12.2025 6.54278 11.3845 6.14181 10.5044 6.03027C9.62425 5.91872 8.73202 6.10193 7.96804 6.55292Z"
        className={fillClassName}
      />
      <path
        d="M12.454 16.6971L9.75001 13.9921C8.77769 13.9312 7.86103 13.5175 7.17206 12.8288C6.4831 12.14 6.06918 11.2234 6.00801 10.2511L2.33501 6.57812C1.49022 7.58414 0.852357 8.74704 0.458008 10.0001C1.73201 14.0571 5.52301 17.0001 10 17.0001C10.847 17.0001 11.669 16.8951 12.454 16.6971Z"
        className={fillClassName}
      />
    </svg>
  );
}
