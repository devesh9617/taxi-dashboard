import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";

const data = [
  { data: 4500 }, { data: 5000 }, { data: 4700 }, { data: 4400 },
  { data: 4800 }, { data: 5300 }, { data: 5800 }, { data: 6000 },
  { data: 6300 }, { data: 6580 }, { data: 6780 }, { data: 6680 },
  { data: 6500 }, { data: 6300 }, { data: 5900 }, { data: 5700 },
  { data: 5500 }, { data: 5300 }, { data: 5100 }, { data: 5090 },
  { data: 5300 }, { data: 5800 }, { data: 6000 }, { data: 6300 },
  { data: 6780 }, { data: 6500 }, { data: 6300 }, { data: 6500 },
  { data: 6700 }, { data: 7000 }, { data: 7300 }, { data: 7500 },
  { data: 7700 }, { data: 8090 }, { data: 8190 }, { data: 7990 },
  { data: 7700 }, { data: 7500 }, { data: 7300 }, { data: 7000 },
  { data: 6700 }, { data: 6500 }, { data: 6300 }, { data: 6500 },
  { data: 6780 }, { data: 6300 }, { data: 6000 }, { data: 5800 },
  { data: 5490 }, { data: 6000 }, { data: 8000 },
];

export default function Earnings() {
  return (
    <Section>
      {/* ===== HEADER ===== */}
      <div className="top">
        <div className="info">
          <h5>This Month’s Earnings</h5>
          <h1>₹68,250</h1>
          <div className="growth">
            <span>▲ 2.45%</span>
          </div>
        </div>
      </div>

      {/* ===== CHART ===== */}
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                color: "#e5e7eb",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Area
              animationBegin={600}
              animationDuration={1800}
              type="monotone"
              dataKey="data"
              stroke="#facc15"
              strokeWidth={3}
              fill="rgba(250, 204, 21, 0.2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  padding: 1.6rem;

  /* ===== TOP INFO ===== */
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;

      h5 {
        font-size: 13px;
        color: #9ca3af;
      }

      h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #facc15;
      }

      .growth {
        margin-top: 0.3rem;
        background: rgba(34, 197, 94, 0.15);
        padding: 0.35rem 0.7rem;
        border-radius: 999px;

        span {
          font-size: 12px;
          color: #22c55e;
          font-weight: 600;
        }
      }
    }
  }

  /* ===== CHART ===== */
  .chart {
    height: 70%;
    margin-top: 1rem;
  }
`;
