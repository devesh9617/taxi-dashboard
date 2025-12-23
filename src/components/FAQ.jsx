import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";

export default function FAQ() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage trips efficiently and increase earnings",
    },
    {
      icon: <MdTimelapse />,
      text: "How to track ride history and working hours",
    },
    {
      icon: <IoMdCash />,
      text: "How to withdraw earnings to your bank account",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Driver Guidelines</h2>
      </div>

      <div className="faqs">
        {faqs.map((faq, index) => (
          <div className="faq" key={index}>
            <div className="info">
              {faq.icon}
              <h4>{faq.text}</h4>
            </div>
            <IoIosArrowForward />
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  padding: 1.6rem;

  /* ===== TITLE ===== */
  .title {
    h2 {
      font-size: 1rem;
      font-weight: 600;
      color: #e5e7eb;
      margin-bottom: 1rem;
    }
  }

  /* ===== FAQ LIST ===== */
  .faqs {
    display: flex;
    flex-direction: column;

    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 0;
      cursor: pointer;
      transition: all 0.3s ease;

      &:not(:last-child) {
        border-bottom: 1px solid #1e293b;
      }

      &:hover {
        background: rgba(250, 204, 21, 0.05);
        padding-left: 0.4rem;
      }

      .info {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
          font-size: 1.2rem;
          color: #facc15;
        }

        h4 {
          font-size: 0.85rem;
          font-weight: 500;
          color: #e5e7eb;
        }
      }

      svg:last-child {
        color: #9ca3af;
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      &:hover svg:last-child {
        transform: translateX(4px);
        color: #facc15;
      }
    }
  }

  
  @media screen and (max-width: 1080px) {
    .faqs .faq {
      padding: 1rem 0;
    }
  }
`;
