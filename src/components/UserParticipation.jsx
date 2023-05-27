import React from 'react'
import { useState } from 'react'



function UserParticipation() {
  const [JsCount, setJsCount] = useState(0);
  const [PyCount, setPyCount] = useState(0);
  const [JavaCount, setJavaCount] = useState(0);
  const [CsCount, setCsCount] = useState(0);

  const handleCheckboxChange = (event, countUpdater) => {
    const checkbox = event.target;
    if (checkbox.checked) {
      // Increment the count
      countUpdater((prevCount) => prevCount + 1);
      // Uncheck other checkboxes
      uncheckOtherCheckboxes(checkbox);
    } else {
      // Checkbox was unchecked, you can handle this case if needed
    }
  };

  const uncheckOtherCheckboxes = (checkedCheckbox) => {
    const checkboxes = document.getElementsByName("checkbox");
    checkboxes.forEach((checkbox) => {
      if (checkbox !== checkedCheckbox) {
        checkbox.checked = false;
      }
    });
  };

  return (
    <div>
      <h3>Answer the Choices:</h3>

      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={(event) => handleCheckboxChange(event, setJsCount)}
        />
        JavaScript
      </label>
      <h2>Total JavaScript Votes: {JsCount}</h2>

      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={(event) => handleCheckboxChange(event, setPyCount)}
        />
        Python
      </label>
      <h2>Total Python Votes: {PyCount}</h2>

      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={(event) => handleCheckboxChange(event, setJavaCount)}
        />
        Java
      </label>
      <h2>Total Java Votes: {JavaCount}</h2>

      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={(event) => handleCheckboxChange(event, setCsCount)}
        />
        CSharp
      </label>
      <h2>Total CSharp Votes: {CsCount}</h2>
    </div>
  );
}



export default UserParticipation
