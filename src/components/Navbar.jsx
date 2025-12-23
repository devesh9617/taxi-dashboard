import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Kishan,</h4>
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
  color: white;
  width: 100%;
  gap: 1rem;

  /* ---------- TITLE ---------- */
  .title {
    h4 {
      font-weight: 400;
      color: #aaa;
      margin-bottom: 0.2rem;
    }

    h1 {
      font-size: 1.5rem;

      span {
        display: inline-block;
        margin-left: 0.4rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.15rem;
      }
    }
  }

  /* ---------- SEARCH BAR ---------- */
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.55rem 0.9rem;
    border-radius: 0.8rem;
    transition: background 0.3s ease;

    &:focus-within {
      background-color: #2a2a2a;
    }

    svg {
      color: #ffc107;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    input {
      width: 160px; /* 🔥 main fix */
      background: transparent;
      border: none;
      color: #ffc107;
      font-size: 0.9rem;
      letter-spacing: 0.1rem;
      font-family: "Permanent Marker", cursive;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #ffc107;
        opacity: 0.8;
      }
    }
  }

  /* ---------- RESPONSIVE ---------- */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .title h1 span {
      display: block;
      margin: 0.4rem 0 0;
      letter-spacing: 0.1rem;
    }

    .search {
      width: 100%;
    }

    .search input {
      width: 100%;
      letter-spacing: 0.08rem;
    }
  }
`;
