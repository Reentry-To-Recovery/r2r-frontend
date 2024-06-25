export default function GridSection({ title, content }) {
  return (
    <div className="flex align">
      <div className="grid-icon" />
      <strong>{title}</strong>
      {content}
    </div>
  );
}
