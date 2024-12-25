import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i=0; i<6; i++) {
      hexColor += hex[Math.floor(Math.random()*hex.length)]
    }
    setColor(hexColor)
  }

  function createRandomRgbColor() {
    const r = Math.floor(Math.random()*(256))
    const g = Math.floor(Math.random()*(256))
    const b = Math.floor(Math.random()*(256))

    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {
    typeOfColor === 'rgb'? createRandomRgbColor() : createRandomHexColor()
  }, [typeOfColor])

  return (
    <div style={{
        width: "100vw",
        height: "100vw",
        background: color,
      }}>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={
        typeOfColor === "hex" 
        ? createRandomHexColor 
        : createRandomRgbColor}>
        Generate Random Color
      </button>
      <div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h3>{typeOfColor === 'rgb' ? 'RGB Color:' : 'HEX Color:'}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  )
}