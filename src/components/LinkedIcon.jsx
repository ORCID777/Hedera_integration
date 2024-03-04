export default function Icon({ img, text, link }) {
  return (
    <a href={link}>
      <img
        src={img}
        alt={text}
      />
    </a>
  );
}
