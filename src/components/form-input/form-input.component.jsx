import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherprops }) => {
  return (
    <Group>
      <Input className="form-input" {...otherprops} />
      {label && (
        <FormInputLabel shrink={otherprops.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
