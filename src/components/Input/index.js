import React from "react";

import { Container } from "./styles";

function Input({ type, options, required, disabled, label }) {
  return (
    <Container>
      <div>
        <small>{required === true && "*"}</small>
        {label}
      </div>
      {type === "select" ? (
        <select>
          {options &&
            options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.text}
              </option>
            ))}
        </select>
      ) : (
        <input type={type} placeholder={label} disabled={disabled} />
      )}
    </Container>
  );
}

export default Input;
