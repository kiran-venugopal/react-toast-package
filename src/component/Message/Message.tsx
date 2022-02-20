import "./style.css";

type PropType = { onClose(): void };

export default function Message({ onClose }: PropType) {
  return (
    <div className="message">
      You have one new message
      <button onClick={onClose}>close</button>
    </div>
  );
}
