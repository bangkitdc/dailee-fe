type IconPropType = {
  fillClassName: string;
};

export const Question = ({
  fillClassName
}: IconPropType) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.37991 14.8672C9.6395 14.8672 9.85904 14.7774 10.0385 14.5979C10.218 14.4185 10.3075 14.1992 10.307 13.9401C10.307 13.6805 10.2175 13.4609 10.0385 13.2814C9.85954 13.1019 9.64 13.0124 9.37991 13.0129C9.12031 13.0129 8.90102 13.1027 8.72202 13.2822C8.54302 13.4617 8.45328 13.681 8.45278 13.9401C8.45278 14.1997 8.54253 14.4192 8.72202 14.5987C8.90151 14.7782 9.12081 14.8677 9.37991 14.8672ZM8.71238 12.0116H10.0845C10.0845 11.6037 10.131 11.2823 10.224 11.0474C10.3169 10.8126 10.5795 10.4912 11.0116 10.0832C11.333 9.76182 11.5865 9.45575 11.7719 9.165C11.9573 8.87426 12.05 8.52516 12.05 8.11772C12.05 7.42547 11.7966 6.89392 11.2898 6.52307C10.783 6.15222 10.1834 5.9668 9.49116 5.9668C8.78655 5.9668 8.2147 6.15222 7.77561 6.52307C7.33653 6.89392 7.0307 7.33894 6.85813 7.85813L8.08193 8.34023C8.14374 8.11772 8.28293 7.87667 8.49951 7.61708C8.71609 7.35748 9.04664 7.22769 9.49116 7.22769C9.88673 7.22769 10.1834 7.33597 10.3812 7.55255C10.579 7.76913 10.6779 8.00696 10.6779 8.26606C10.6779 8.5133 10.6037 8.7452 10.4554 8.96178C10.307 9.17835 10.1216 9.37911 9.8991 9.56404C9.35518 10.0461 9.02142 10.4108 8.8978 10.658C8.77419 10.9053 8.71238 11.3565 8.71238 12.0116ZM9.41699 17.834C8.39097 17.834 7.42677 17.6392 6.52437 17.2495C5.62196 16.8599 4.837 16.3315 4.16947 15.6645C3.50194 14.997 2.9736 14.212 2.58446 13.3096C2.19531 12.4072 2.00049 11.443 2 10.417C2 9.39097 2.19482 8.42677 2.58446 7.52437C2.9741 6.62196 3.50244 5.837 4.16947 5.16947C4.837 4.50194 5.62196 3.9736 6.52437 3.58446C7.42677 3.19531 8.39097 3.00049 9.41699 3C10.443 3 11.4072 3.19482 12.3096 3.58446C13.212 3.9741 13.997 4.50244 14.6645 5.16947C15.332 5.837 15.8606 6.62196 16.2503 7.52437C16.6399 8.42677 16.8345 9.39097 16.834 10.417C16.834 11.443 16.6392 12.4072 16.2495 13.3096C15.8599 14.212 15.3315 14.997 14.6645 15.6645C13.997 16.332 13.212 16.8606 12.3096 17.2503C11.4072 17.6399 10.443 17.8345 9.41699 17.834Z"
        className={fillClassName}
      />
    </svg>
  );
};