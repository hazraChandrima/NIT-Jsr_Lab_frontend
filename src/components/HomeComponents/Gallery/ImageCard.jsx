function ImageCard({ height, width, left, top, imgSrc }) {
  return (
    <div
      className="bg-blue-700"
      style={{
        height: `${height}vw`,
        width: `${width}vw`,
        position: "absolute",
        left: `${left}vw`,
        top: `${top}vw`,
      }}
    >
      <img
        src={imgSrc}
        alt="Image Card"
        className="w-full h-full object-fill"
      />
    </div>
  );
}

export default ImageCard;
