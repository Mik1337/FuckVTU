const image = () => {
  const imgs = [
    "https://media.giphy.com/media/3ohzdJKvFq7VYRhKhy/giphy.gif",
    "https://media.giphy.com/media/ZEI5zInCq3OcXTYCrT/giphy.gif",
  ];
  return imgs[Math.floor(Math.random() * imgs.length)];
};
export default function Index() {
  return (
    <div style={{ display: "inlineBlock" }}>
      <center style={{ whiteSpace: "nowrap" }}>
        <span>4</span>
        <img align="bottom" src={image()} />
        <span>4</span>
        <p>Page Not Found</p>
      </center>
      <style jsx>{`
        p {
          paddint-top: -10em;
          font-weight: 200;
          font-size: 40px;
        }
        span {
          font-style: italic;
          font-size: 20vw;
        }
      `}</style>
    </div>
  );
}
