export default function ModalListItem({ title, value }) {
  return (
    <div className='info'>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}
