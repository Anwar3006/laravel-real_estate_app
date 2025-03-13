import InputError from './InputError';
import InputLabel from './InputLabel';

const DropDownInput = ({
  label,
  labelValue,
  options,
  value,
  error,
  handleChange,
}: {
  label: string;
  labelValue: string;
  value: string | number;
  options: string[];
  error?: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="mx-auto min-w-40 md:min-w-40 md:max-w-44">
      <InputLabel htmlFor={label} value={labelValue} className="mb-1" />

      <select
        id={label}
        value={value}
        onChange={handleChange}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        {!value && <option defaultValue=""></option>}
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>

      {error && <InputError message={error} className="mt-2" />}
    </div>
  );
};

export default DropDownInput;
