type IconPropType = {
  fillClassName: string
  strokeClassName: string
};

export const Home = ({
  fillClassName,
  strokeClassName,
}: IconPropType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={fillClassName}
    >
      <path
        d="M8.68556 20.3378V17.2801C8.68556 16.4995 9.32295 15.8668 10.1092 15.8668H12.9834C13.361 15.8668 13.7231 16.0157 13.9901 16.2807C14.2571 16.5458 14.407 16.9052 14.407 17.2801V20.3378C14.4047 20.6623 14.5328 20.9743 14.7632 21.2046C14.9935 21.4349 15.3068 21.5645 15.6337 21.5644H17.5946C18.5104 21.5668 19.3895 21.2073 20.038 20.5653C20.6864 19.9232 21.0508 19.0514 21.0508 18.1423V9.43131C21.0508 8.69691 20.7229 8.0003 20.1554 7.52912L13.4848 2.24032C12.3244 1.31301 10.6619 1.34296 9.53617 2.31143L3.01779 7.52912C2.42352 7.98641 2.06833 8.68509 2.05078 9.43131V18.1334C2.05078 20.0283 3.59816 21.5644 5.50695 21.5644H7.42307C8.10201 21.5645 8.65378 21.0207 8.6587 20.3467L8.68556 20.3378Z"
        className={strokeClassName}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
