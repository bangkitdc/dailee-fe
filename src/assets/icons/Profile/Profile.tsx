type IconPropType = {
  fillClassName: string;
  strokeClassName: string;
};

export const Profile = ({ fillClassName, strokeClassName }: IconPropType) => {
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
        d="M18.82 14.0557C19.2928 14.0557 19.7463 14.2435 20.0807 14.5778C20.415 14.9122 20.6029 15.3657 20.6029 15.8385V16.7985C20.6029 19.8481 17.6603 23.3814 12.1 23.3814C6.53974 23.3814 3.59714 19.8481 3.59714 16.7985V15.8385C3.59714 15.3657 3.78498 14.9122 4.11933 14.5778C4.45368 14.2435 4.90716 14.0557 5.38 14.0557H18.82ZM12.1 1.57566C13.2094 1.57566 14.2733 2.01635 15.0577 2.80079C15.8422 3.58523 16.2829 4.64915 16.2829 5.75852C16.2829 6.86788 15.8422 7.9318 15.0577 8.71624C14.2733 9.50068 13.2094 9.94137 12.1 9.94137C10.9906 9.94137 9.92671 9.50068 9.14227 8.71624C8.35784 7.9318 7.91714 6.86788 7.91714 5.75852C7.91714 4.64915 8.35784 3.58523 9.14227 2.80079C9.92671 2.01635 10.9906 1.57566 12.1 1.57566Z"
        className={strokeClassName}
        strokeWidth="1.5"
      />
    </svg>
  );
};