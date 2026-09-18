import { LazySignalOrb } from "@/components/lazy-signal-orb";

export default function Home() {
  return (
    <main className="signal-page">
      <section className="signal-hero">
        <div className="signal-copy">
          <p className="eyebrow">FlyRankAI / spatial systems</p>
          <h1>See the signal<br /><em>before</em> it moves.</h1>
          <p className="signal-intro">A small, tactile instrument for exploring how a campaign signal changes under different surface conditions.</p>
          <div className="signal-meta" aria-label="Experience details">
            <span><i className="status-dot" />Live scene</span>
            <span>WebGL / 60 target</span>
            <span>Build 07.24</span>
          </div>
        </div>
        <LazySignalOrb />
      </section>

      <section className="signal-footer">
        <div>
          <p className="eyebrow">Field note 001</p>
          <p className="footer-note">Drag to orbit. Move across the field. Change the material to tune the read.</p>
        </div>
        <div className="footer-stat">
          <span className="stat-value">01</span>
          <span>interactive<br />object</span>
        </div>
        <div className="footer-stat">
          <span className="stat-value">0 kb</span>
          <span>external<br />model data</span>
        </div>
      </section>
    </main>
  );
}
