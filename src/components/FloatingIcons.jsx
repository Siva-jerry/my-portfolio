import "./FloatingIcons.css";

function FloatingIcons() {
  const icons = [
    "💻",
    "⚛️",
    "🤖",
    "🚀",
    "📱",
    "🌐",
    "⚡",
    "🧠",
    "☁️",
    "💡",
  ];

  return (
    <div className="floating-icons">
      {icons.map((icon, index) => (
        <span
          key={index}
          className={`floating-icon icon-${index}`}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}

export default FloatingIcons;