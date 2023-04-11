export default function Squares() {
  const squaresCount = 2040;
  const arr = [];

  for (let i = 0; i < squaresCount; i++) {
    arr.push(
      <div
        key={i}
        onMouseOver={(e) => onSquare(e)}
        onMouseOut={(e) => onSquare(e)}
        className={`square`}
      ></div>
    );
  }

  const generateColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const onSquare = (e) => {
    const colorBg = generateColor();
    const target = e.target;

    if (e.type === "mouseover") {
      target.style.background = colorBg;
      target.style.boxShadow = `0 0 2px ${colorBg}, 0 0 10px ${colorBg}`;
    } else {
      target.style.background = "";
      target.style.boxShadow = "";
    }
  };

  return <div className="container">{arr.map((square) => square)}</div>;
}
