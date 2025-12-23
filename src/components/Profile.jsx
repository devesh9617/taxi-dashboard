import React from "react";
import styled from "styled-components";
import image from "../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="Driver profile" />
      </div>

      <div className="title">
        <h2>Kishan Sheth</h2>
        <h5>
          <HiOutlineLocationMarker /> New York, USA
        </h5>
      </div>

      <div className="info">
        <div className="container">
          <h5>Days at Work</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>Total Rides</h5>
          <h3>427</h3>
        </div>
        <div className="container">
          <h5>Active Hours</h5>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;

  /* ===== PROFILE IMAGE ===== */
  .image {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(250, 204, 21, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: 0.4s ease;
    }

    &:hover img {
      transform: scale(1.08);
    }
  }

  /* ===== NAME & LOCATION ===== */
  .title {
    text-align: center;

    h2 {
      color: #e5e7eb;
      font-size: 1.2rem;
      font-weight: 600;
    }

    h5 {
      margin-top: 0.3rem;
      font-size: 0.85rem;
      color: #9ca3af;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;

      svg {
        color: #facc15;
      }
    }
  }

  /* ===== STATS ===== */
  .info {
    display: flex;
    gap: 1.4rem;
    margin-top: 0.6rem;

    .container {
      text-align: center;

      h5 {
        font-size: 12px;
        color: #9ca3af;
        margin-bottom: 0.2rem;
      }

      h3 {
        font-size: 20px;
        font-weight: 700;
        color: #facc15;
      }
    }
  }
`;
