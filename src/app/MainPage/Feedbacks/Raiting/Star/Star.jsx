import s from './Star.module.scss';

export default function Star({ rating, value }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      className={value <= rating ? s.active : s.star}
    >
      <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
    </svg>
  );
}
