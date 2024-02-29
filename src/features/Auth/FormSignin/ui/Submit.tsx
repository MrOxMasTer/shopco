import { useFormStatus } from 'react-dom';

export const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} className="btn mt-4" type="submit">
      send
    </button>
  );
};
