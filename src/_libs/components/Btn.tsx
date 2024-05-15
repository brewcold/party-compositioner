import { Loader } from './Loader';

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: string;
}
export function Btn({ children, type = 'submit', onClick, isLoading = false, size = '100%', ...props }: BtnProps) {
  return (
    <>
      <button type={type} onClick={onClick} {...props}>
        {isLoading ? <Loader size="1rem" /> : children}
      </button>

      <style jsx>{`
        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background-color: white;
          padding: 0.75rem 0.5rem 0.75rem 0.5rem;
          border: 1px solid #7a839c;
          color: #7a839c;
          border-radius: 0.75rem;
          width: ${size};
          min-width: 3rem;
          transition: all 0.1s;
          &:hover {
            background-color: #7a839c;
            border: 1px solid transparent;
            color: white;
          }
        }
      `}</style>
    </>
  );
}
