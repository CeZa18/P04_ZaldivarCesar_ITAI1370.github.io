function Sqaure() {
  return <button className="Sqaurequare">1</button>;
}

export default function Board() {
  return (
    <>
      <div className="borad=row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="borad=row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="borad=row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
    </>
  );
}
