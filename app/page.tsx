export default function Home() {
  return (
    <main className="page">
      <section className="scene" aria-labelledby="scene-title">
        <h1 id="scene-title" className="sr-only">
          The Listener standing in the rain beneath a flickering streetlamp.
        </h1>
        <div className="background" aria-hidden="true">
          <div className="mist" />
          <div className="rain" />
          <div className="streetlamp">
            <div className="lamp-glow" />
            <div className="lamp-pole" />
          </div>
          <div className="listener">
            <div className="listener-core" />
            <div className="listener-highlight" />
          </div>
          <div className="ground" />
        </div>
      </section>
    </main>
  );
}
