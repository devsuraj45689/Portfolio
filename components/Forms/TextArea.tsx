import React from 'react';

interface inputProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string | number;
  required?:boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cols?: number;
  rows?: number;
}

const TextArea = ({
  label,
  placeholder,
  id,
  name,
  value,
  required=false,
  disabled=false,
  onChange,
  cols,
  rows
}: inputProps) => {
  return (
    <>
      <div className='flex flex-col'>
        <label className='mb-3'>{label}</label>
        <textarea
          className='focus:outline-none border-2 border-gray-400 focus:border-black px-2 py-1.5'
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          disabled={disabled}
          cols={cols}
          rows={rows}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
