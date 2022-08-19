import React, { useState } from "react";

const FormSubmit = () => {
  const [formInfo, setFormInfo] = useState();

  //?creo un estado, y la inicializo con un objeto para usarla como stylo css de mi elemento jsx, html

  const [styleMessage, setStyleMessage] = useState({ display: "none" });

  const handdleSubmit = (event) => {
    event.preventDefault(); //! este preventDefault no hace que el submit recargue la pagina,

    //! dicho que el submit es el un boton de dentro de los form o formularios, con este boton  : <buttom> <buttom/>
    //! <submit> <submit/>
    //! target: es una referencia al objeto en el cual se lanzo el evento.

    const objForm = {};

    objForm.name = event.target.name.value;
    objForm.email = event.target.email.value;
    objForm.age = event.target.age.value;
    setFormInfo(objForm);

    if (objForm.name && objForm.email && objForm.age) {
      setStyleMessage({ display: "flex" });
    } else {
      alert("Ingrese informacion!, Error informacion no enviada o vacia");
    }
  };
  return (
    <div className="formSubmit">
      <form onSubmit={handdleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input id="name" type="text" placeholder="nombre" />
        <label htmlFor="email">Email: </label>
        <input id="email" type="text" placeholder="email" />
        <label htmlFor="age">Edad: </label>
        <input id="age" type="text" placeholder="age" />
        <button>Submit</button>
      </form>
      <hr />
      <h1 style={styleMessage}>
        {" "}
        informacion enviada, bien logrado {formInfo?.name}!!
      </h1>
    </div>
  );
};

export default FormSubmit;
