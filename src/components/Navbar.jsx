import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h1>
          Welcome to <span>MY TAXI DASHBOARD</span>
        </h1>
      </div>

      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #1e293b;

  /* ---------- TITLE ---------- */
  .title {
    max-width: 70%; /* 🔥 prevents clash */

    h1 {
      font-size: 1.5rem;
      color: #e5e7eb;
      line-height: 1.3;

      span {
        margin-left: 0.4rem;
        color: #facc15;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.12rem;
        white-space: nowrap;
      }
    }
  }

  /* ---------- SEARCH BAR ---------- */
  .search {
    background: linear-gradient(180deg, #0f172a, #020617);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1rem;
    border-radius: 0.9rem;
    border: 1px solid #1e293b;
    transition: all 0.3s ease;

    flex-shrink: 0; /* 🔥 MOST IMPORTANT FIX */

    &:focus-within {
      border-color: #facc15;
      box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.4);
    }

    svg {
      color: #facc15;
      font-size: 1.2rem;
    }

    input {
      width: 160px;
      background: transparent;
      border: none;
      color: #e5e7eb;
      font-size: 0.9rem;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #9ca3af;
      }
    }
  }

  /* ---------- RESPONSIVE ---------- */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    .title {
      max-width: 100%;
    }

    .title h1 span {
      display: block;
      margin: 0.4rem 0 0;
    }

    .search {
      width: 100%;
    }

    .search input {
      width: 100%;
    }
  }
`;
