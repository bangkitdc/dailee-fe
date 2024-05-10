type IconPropType = {
  fillClassName: string;
};

export const PlusFAB = ({ fillClassName }: IconPropType) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3963 3.86206C11.796 3.86206 12.1792 4.02082 12.4618 4.30342C12.7444 4.58602 12.9032 4.9693 12.9032 5.36896V9.88965H17.4239C17.8235 9.88965 18.2068 10.0484 18.4894 10.331C18.772 10.6136 18.9308 10.9969 18.9308 11.3965C18.9308 11.7962 18.772 12.1795 18.4894 12.4621C18.2068 12.7447 17.8235 12.9034 17.4239 12.9034H12.9032V17.4241C12.9032 17.8238 12.7444 18.2071 12.4618 18.4897C12.1792 18.7723 11.796 18.931 11.3963 18.931C10.9966 18.931 10.6134 18.7723 10.3308 18.4897C10.0482 18.2071 9.8894 17.8238 9.8894 17.4241V12.9034H5.36871C4.96906 12.9034 4.58577 12.7447 4.30318 12.4621C4.02058 12.1795 3.86182 11.7962 3.86182 11.3965C3.86182 10.9969 4.02058 10.6136 4.30318 10.331C4.58577 10.0484 4.96906 9.88965 5.36871 9.88965H9.8894V5.36896C9.8894 4.9693 10.0482 4.58602 10.3308 4.30342C10.6134 4.02082 10.9966 3.86206 11.3963 3.86206Z"
        className={fillClassName}
      />
    </svg>
  );
};