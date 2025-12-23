import React, { useEffect } from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transfers from "./Transfers";
import scrollreveal from "scrollreveal";
import { StatCard } from "./ReusableStyles";

export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "60px",
      duration: 1200,
      reset: false,
    });

    sr.reveal(
      `
        nav,
        .stats__row,
        .row__one,
        .row__two
      `,
      {
        opacity: 0,
        interval: 150,
      }
    );
  }, []);

  return (
    <Section>
      <Navbar />

      {/* ===== HERO STATS ===== */}
      <div className="stats__row">
        <StatCard>
          <p>Today's Earnings</p>
          <h2>₹5,840</h2>
        </StatCard>

        <StatCard>
          <p>Active Rides</p>
          <h2>12</h2>
        </StatCard>

        <StatCard>
          <p>Online Drivers</p>
          <h2>8</h2>
        </StatCard>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>

        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  /* 🔥 KEY FIX */
  flex: 1; /* takes all remaining space after sidebar */

  padding: 2rem;
  min-height: 100vh;
  background-color: #0b1220;
  overflow-x: hidden;

  /* ===== HERO STATS ===== */
  .stats__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
  }

  /* ===== MAIN GRID ===== */
  .grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .row__one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .row__two {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* ===== RESPONSIVE ===== */
  @media screen and (max-width: 1080px) {
    padding: 1.5rem;

    .stats__row,
    .row__one,
    .row__two {
      grid-template-columns: 1fr;
    }
  }
`;
