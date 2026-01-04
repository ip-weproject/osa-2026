// HeroVideo.tsx
export function HeroVideo() {
  return (
    // IMPORTANTE: absolute, inset-0, w-full, h-full
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10"> 
      <video
        className="w-full h-full object-cover opacity-90" // opacity opcional
        autoPlay
        loop
        muted
        playsInline
      >
        {/* <source src="../../../" type="video/mp4"/></video> */}
      <source src="" type="video/mp4" /></video>
      {/* Opcional: Una capa oscura encima para que se lea el texto */}
      <div className="absolute inset-0 bg-black/40"></div> 
    </div>
  );
}