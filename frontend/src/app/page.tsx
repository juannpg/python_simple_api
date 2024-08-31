"use client";

import { useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter your name");
      return;
    }


    const repsonse = await fetch(`http://192.168.1.142:4000/getUsers?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await repsonse.json();
    const nameResponse = data.name;
    alert(nameResponse);
  }

  return (
    <main className="flex flex-col h-screen items-center justify-center text-white">
      <h1>Tell me your name!</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="text-black px-2"
          onSubmit={() => handleSubmit}
          value={name}
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="border rounded-md border-white mt-2 ">Submit</button>
      </form>
    </main>
  );
}
