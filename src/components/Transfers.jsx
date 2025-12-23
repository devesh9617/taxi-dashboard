import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

export default function Transfers() {
  const trips = [
    {
      image: avatarImage,
      name: "Rider: Kishan Sheth",
      time: "Today, 16:36",
      amount: "₹450",
      status: "Completed",
    },
    {
      image: avatarImage,
      name: "Rider: Lauras Santos",
      time: "Today, 08:49",
      amount: "₹320",
      status: "Completed",
    },
    {
      image: avatarImage,
      name: "Rider: Jadon S.",
      time: "Yesterday, 14:36",
      amount: "₹780",
      status: "Cancelled",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Recent Trips</h2>
      </div>

      <div className="transactions">
        {trips.map((trip, index) => (
          <div className="transaction" key={index}>
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={trip.image} alt="rider avatar" />
              </div>
              <div className="transaction__title__details">
                <h3>{trip.name}</h3>
                <h5>{trip.time}</h5>
                <span
                  className={
                    trip.status === "Completed"
                      ? "status completed"
                      : "status cancelled"
                  }
                >
                  {trip.status}
                </span>
              </div>
            </div>

            <div className="transaction__amount">
              <span>{trip.amount}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="view">
        View all trips <HiArrowNarrowRight />
      </button>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    h2 {
      color: #facc15;
      font-weight: 600;
      letter-spacing: 0.1rem;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      &__title {
        display: flex;
        gap: 1rem;

        &__image img {
          height: 2.5rem;
          border-radius: 3rem;
        }

        &__details {
          h3 {
            color: white;
            font-size: 14px;
          }

          h5 {
            font-size: 12px;
            color: #9ca3af;
          }

          .status {
            font-size: 11px;
          }

          .completed {
            color: #22c55e;
          }

          .cancelled {
            color: #ef4444;
          }
        }
      }

      &__amount {
        background-color: #facc1520;
        padding: 0.2rem 0.6rem;
        width: 4.5rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;

        span {
          color: #facc15;
          font-weight: 600;
        }

        &:hover {
          background-color: #facc15;

          span {
            color: black;
          }
        }
      }
    }
  }

  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    background: none;
    border: none;
    color: #facc15;
    font-weight: 600;
    cursor: pointer;

    svg {
      font-size: 1.4rem;
      transition: 0.3s ease-in-out;
    }

    &:hover svg {
      transform: translateX(0.5rem);
    }
  }

  @media screen and (max-width: 375px) {
    .transactions .transaction {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;
