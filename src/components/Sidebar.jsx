import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import scrollreveal from "scrollreveal";

export default function Sidebar() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "60px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(".brand, .links li, .logout", {
      opacity: 0,
      interval: 150,
    });
  }, []);

  return (
    <Section>
      <div className="top">
        <div className="brand">
          <FaTaxi />
          <span>MY TAXI</span>
        </div>

        <ul className="links">
          <li className={active === 1 ? "active" : ""} onClick={() => setActive(1)}>
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </li>
          <li className={active === 2 ? "active" : ""} onClick={() => setActive(2)}>
            <RiDashboard2Fill />
            <span>Riders</span>
          </li>
          <li className={active === 3 ? "active" : ""} onClick={() => setActive(3)}>
            <FaAddressCard />
            <span>Payments</span>
          </li>
          <li className={active === 4 ? "active" : ""} onClick={() => setActive(4)}>
            <GiTwirlCenter />
            <span>Learning</span>
          </li>
          <li className={active === 5 ? "active" : ""} onClick={() => setActive(5)}>
            <BsFillChatTextFill />
            <span>FAQs</span>
          </li>
          <li className={active === 6 ? "active" : ""} onClick={() => setActive(6)}>
            <IoSettings />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <div className="logout">
        <FiLogOut />
        <span>Logout</span>
      </div>
    </Section>
  );
}

const Section = styled.aside`
  width: 260px;              /* 🔥 FIXED WIDTH */
  flex-shrink: 0;            /* 🔥 NEVER SHRINK */
  min-height: 100vh;
  background: linear-gradient(180deg, #020617, #0b1220);
  border-right: 1px solid #1e293b;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;

  position: sticky;          /* 🔥 FLEX-SAFE (not fixed) */
  top: 0;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 2rem;

    svg {
      color: #facc15;
      font-size: 2rem;
    }

    span {
      color: #facc15;
      font-size: 1.6rem;
      font-family: "Permanent Marker", cursive;
    }
  }

  .links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.7rem 1rem;
      border-radius: 0.8rem;
      cursor: pointer;
      color: #e5e7eb;
      transition: all 0.3s ease;

      svg {
        font-size: 1.2rem;
      }

      &:hover {
        background: rgba(250, 204, 21, 0.15);
      }
    }

    .active {
      background: rgba(250, 204, 21, 0.25);
      box-shadow: inset 3px 0 0 #facc15;
    }
  }

  .logout {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.5rem;
    color: #ef4444;
    cursor: pointer;

    &:hover {
      background: rgba(239, 68, 68, 0.15);
      border-radius: 0.8rem;
    }
  }

  @media (max-width: 1080px) {
    display: none; /* mobile handled separately if needed */
  }
`;
