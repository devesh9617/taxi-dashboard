import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";

export default function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Trips This Month</h5>
          <h2>682</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Total Earnings</h5>
          <h2>₹35,040</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>New Riders</h5>
          <h2>321</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="content">
          <h5>Active Hours</h5>
          <h2>54.5 hrs</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;

  .analytic {
    ${cardStyles};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.4rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      border-color: #facc15;
    }

    .content {
      h5 {
        font-size: 13px;
        color: #9ca3af;
        margin-bottom: 0.3rem;
      }

      h2 {
        font-size: 22px;
        font-weight: 700;
        color: #facc15;
      }
    }

    .logo {
      background: linear-gradient(180deg, #0f172a, #020617);
      border-radius: 50%;
      padding: 1rem;
      border: 1px solid #1e293b;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1.4rem;
        color: #facc15;
      }
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
