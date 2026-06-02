import { useState, type ChangeEvent } from "react";

function useForm<P>(initValue: P) {
  const [formState, setFormState] = useState(initValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return { values: formState, handleChange };
}

export { useForm };
