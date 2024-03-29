const switcherChoiceInputs = (label) => {
  const inputs = {
    size: {
      divClass: "form_input type_switcher_choice",
      wrapperClass: "wrapper",
      labelFor: "dvd_choice",
      inputType: "text",
      inputClass: "number",
      labelName: "Size (MB)",
      inputId: "size",
      description: "Please, provide size",
      descriptionClass: "item_description",
      errorClass: "error",
      validClass: "valid",
    },
    height: {
      divClass: "form_input type_switcher_choice",
      wrapperClass: "wrapper",
      labelFor: "furniture_choice_height",
      inputType: "text",
      inputClass: "number",
      labelName: "Height (CM)",
      inputId: "height",
      errorClass: "error",
      validClass: "valid",
    },
    width: {
      divClass: "form_input type_switcher_choice",
      wrapperClass: "wrapper",
      labelFor: "furniture_choice_width",
      inputType: "text",
      inputClass: "number",
      labelName: "Width (CM)",
      inputId: "width",
      errorClass: "error",
      validClass: "valid",
    },
    length: {
      divClass: "form_input type_switcher_choice",
      wrapperClass: "wrapper",
      labelFor: "furniture_choice_length",
      inputType: "text",
      inputClass: "number",
      labelName: "Length (CM)",
      inputId: "length",
      errorClass: "error",
      validClass: "valid",
      description: "Please, provide dimensions",
      descriptionClass: "item_description",
    },
    weight: {
      divClass: "form_input type_switcher_choice",
      wrapperClass: "wrapper",
      labelFor: "book_choice",
      inputType: "text",
      inputClass: "number",
      labelName: "Weight (kg)",
      inputId: "weight",
      errorClass: "error",
      validClass: "valid",
      description: "Please, provide weight",
      descriptionClass: "item_description",
    },
  };
  return inputs[label];
};

export default switcherChoiceInputs;
