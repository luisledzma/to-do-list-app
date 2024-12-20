import "./TextArea.scoped.scss";

export type TextAreaProps = {
  id: string;
  className: string;
  rows: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  id,
  className,
  rows,
  placeholder,
  value,
  onChange,
}: TextAreaProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <textarea
      id={id}
      rows={rows}
      className="block p-2.5 w-full text-sm rounded-lg border dark:bg-background-dark6 dark:border-background-dark6 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-3 dark:focus:border-primary-3 resize-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
