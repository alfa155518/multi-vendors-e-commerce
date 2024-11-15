"use client";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
export default function ConfettiParty({ isConfettiVisible }) {
  const { width, height } = useWindowSize();
  return isConfettiVisible ? (
    <Confetti width={width} height={height} numberOfPieces={1000} />
  ) : (
    <></>
  );
}
