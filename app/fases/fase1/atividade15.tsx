import React from "react";
import MarkActivity from "../../../components/templates/MarkActivity";

export default function Atividade2Screen() {
  return (
   <MarkActivity
  question="marque apenas as vogais"
  options={[
    { label: "U", value: "u" },
    { label: "E", value: "e" },
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "L", value: "l" },
    { label: "K", value: "k" },
  ]}
  correctAnswers={["u", "e", "a"]}
  nextRoute="/fases/fase1/final1"
  wrongRoute="/fases/fase1/final1"
  progress={0.8}
/>
  );
}