import { ChangeEvent, useState } from "react";

export function useForm<T>(inputValues: T) {
  const [form, setValues] = useState(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...form, [name]: value });
  };
  return { form, handleChange, setValues };
}
