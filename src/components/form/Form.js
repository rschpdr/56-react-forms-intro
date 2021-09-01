import React from "react";

import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";

class Form extends React.Component {
  state = {
    email: "",
    password: "",
    acceptedTermsAndConditions: false,
    campus: "São Paulo",
    birthDate: "",
    bootcamp: "Web Development",
  };

  handleChange = (event) => {
    if (event.target.type === "checkbox") {
      return this.setState({ [event.target.name]: event.target.checked });
    }

    return this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("VALOR FINAL DO FORMULARIO => ", this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          label="Email"
          type="email"
          id="exampleInputEmail1"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          hint="We'll never share your email with anyone else."
        />

        <TextInput
          label="Senha"
          type="password"
          id="exampleInputPassword1"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <TextInput
          label="Data de Nascimento"
          type="date"
          id="exampleInputDate"
          name="birthDate"
          onChange={this.handleChange}
          value={this.state.birthDate}
          required
        />

        <CheckboxInput
          label="Aceito termos e condições"
          id="exampleCheck1"
          name="acceptedTermsAndConditions"
          onChange={this.handleChange}
          checked={this.state.acceptedTermsAndConditions}
        />

        <label>Selecione seu campus: </label>

        <RadioInput
          name="campus"
          id="flexRadioDefault1"
          value="São Paulo"
          checked={this.state.campus === "São Paulo"}
          onChange={this.handleChange}
          label="São Paulo"
        />
        <RadioInput
          name="campus"
          id="flexRadioDefault2"
          value="Miami"
          checked={this.state.campus === "Miami"}
          onChange={this.handleChange}
          label="Miami"
        />
        <RadioInput
          name="campus"
          id="flexRadioDefault3"
          value="Cidade do México"
          checked={this.state.campus === "Cidade do México"}
          onChange={this.handleChange}
          label="Cidade do México"
        />

        <SelectInput
          name="bootcamp"
          id="selectInputExample"
          value={this.state.bootcamp}
          onChange={this.handleChange}
          items={[
            "Web Development",
            "UX/UI Design",
            "Data Analytics",
            "Cyber Security",
          ]}
          required
        />

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
