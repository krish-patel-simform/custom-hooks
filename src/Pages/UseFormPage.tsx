import Input from "../Component/Input/Input";
import { withDemo } from "../HOC/withDemo";
import { useForm } from "../hooks/useForm";

const INIT_VALUE = {
  name: "",
  email: "",
};

function DemoOfUseForm() {
  const { values, handleChange } = useForm(INIT_VALUE);

  return (
    <>
      <div>
        <Input
          value={values.name}
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter Your Name"
        />

        <Input
          value={values.email}
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
      </div>
      <div>
        <p>Name : {values.name}</p>
        <p>Email : {values.email}</p>
      </div>
    </>
  );
}

const WithDemoUseForm = withDemo(DemoOfUseForm);

export default function UseFormPage() {
  return <WithDemoUseForm title="Use Form" />;
}
