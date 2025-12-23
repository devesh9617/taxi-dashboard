import styled from "styled-components";

/* ===== OLD CARD STYLE (USED BY MANY FILES) ===== */
export const cardStyles = `
  background: #111827;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #1f2933;
`;

/* ===== NEW HERO STAT CARD ===== */
export const StatCard = styled.div`
  background: #111827;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #1f2933;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    border-color: #facc15;
  }

  p {
    font-size: 13px;
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #facc15;
  }
`;
