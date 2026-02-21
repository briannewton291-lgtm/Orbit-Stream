const GradientBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute w-[500px] h-[500px] rounded-full opacity-10 animate-blob-drift"
      style={{
        background: "radial-gradient(circle, hsl(176 88% 41% / 0.4), transparent 70%)",
        top: "10%",
        left: "10%",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full opacity-10 animate-blob-drift"
      style={{
        background: "radial-gradient(circle, hsl(17 100% 62% / 0.3), transparent 70%)",
        bottom: "20%",
        right: "10%",
        animationDelay: "5s",
      }}
    />
    <div
      className="absolute w-[300px] h-[300px] rounded-full opacity-5 animate-blob-drift"
      style={{
        background: "radial-gradient(circle, hsl(176 88% 41% / 0.3), transparent 70%)",
        top: "50%",
        right: "30%",
        animationDelay: "10s",
      }}
    />
  </div>
);

export default GradientBlobs;
