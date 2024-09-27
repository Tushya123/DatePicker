"use client";
import DatePicker from "../component/DatePicker";
import { DatePickerProvider } from "@/context/DatePickerContext";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 items-start ">
     <DatePickerProvider>
      <DatePicker />
    </DatePickerProvider>
  </div>
  );
}


