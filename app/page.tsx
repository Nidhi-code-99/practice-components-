"use client";

import React, { useState } from "react";
import Button from "./components/button/button";
import Input from "./components/input/input";
import Heading from "./components/heading/heading";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email });
    setSubmitted(true);
  };

  return (
    <div className="container flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-md mx-auto space-y-4 w-full"
      >
        <Heading
          size="h2"
          title="Welcome to my website"
          color="white"
          weight="6"
          useH1TagInHtml
        />

        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email && !email.includes("@") ? "Invalid email address" : ""}
        />

        <Button title="Submit" type="submit" />

        {submitted && (
          <p className="text-green-600 text-sm mt-2">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}
