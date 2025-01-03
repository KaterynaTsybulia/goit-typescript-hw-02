import css from './LoadMoreBtn.module.css';


interface LoadMoreBtnProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}


const LoadMoreBtn = ({ onClick, disabled, children }: LoadMoreBtnProps): JSX.Element => {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.loadMoreBtn}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default LoadMoreBtn;