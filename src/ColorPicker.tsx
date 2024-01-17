import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState<any>("#ffffff");

  return (
    <div className="color-picker-container" style={{}}>
      <h1>Color Picker</h1>
      <div className="color-display" style={{ background: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="">Select Color: </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
