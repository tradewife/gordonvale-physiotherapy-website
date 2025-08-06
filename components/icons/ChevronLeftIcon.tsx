export default function ChevronLeftIcon({ width = 24, height = 24, color = 'currentColor', className = '' }) {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        color 
      }}
    >
      <span style={{ fontSize: typeof width === 'number' ? `${width}px` : width }}>
        ◀
      </span>
    </div>
  );
}