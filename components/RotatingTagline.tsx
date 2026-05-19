"use client";

import { useState, useEffect, useCallback } from "react";

const ONE_LINERS = [
  "We fix the boring parts. You get the glory.",
  "Your spreadsheet called. It's moving on.",
  "Less ugh. More legendary.",
  "Automating the stuff you pretend to enjoy.",
  "For every problem you've Googled more than twice.",
  "Making the mundane feel like someone else's problem. (Because it is.)",
  "If it's boring, we're already on it.",
  "One less thing on your list. You're welcome.",
  "Software that does the thing nobody wanted to do.",
  "Solving problems before they become personality traits.",
  "We sweat the small stuff so you don't have to.",
  "For the tasks you've been 'getting to' since Q1.",
  "Built for the 'there has to be a better way' moment.",
  "Tools so good, you'll forget they exist. That's the point.",
  "The robots are working on it. We just supervise.",
  "Turning 'I'll do it manually this once' into never.",
  "Your to-do list called. It wants to retire.",
  "Not magic. Just really well-written code.",
  "We asked 'why is this still manual?' and then did something about it.",
  "For the tasks that don't spark joy. Or any joy.",
  "The antidote to copy-paste hell.",
  "Built with caffeine and a deep hatred of repetitive tasks.",
  "Boring problems, brilliant solutions.",
  "You handle the interesting stuff. We handle the dull stuff.",
  "For every task that makes you audibly sigh.",
  "We've never met a spreadsheet we couldn't replace.",
  "Your future self is grateful. Current self has no idea yet.",
  "Your biggest time sink just became someone else's algorithm.",
  "We make the tedious feel like a superpower.",
  "Turns out, the thing slowing you down can actually be solved.",
  "Less admin. More momentum.",
  "Built for the 'ugh, again?' moments.",
  "No task too mundane. Seriously, try us.",
  "We turned 'this takes forever' into 'oh, it's already done.'",
  "We build tools. You build things that matter.",
  "Elegantly solving the inelegant.",
  "We turned 'I hate this task' into 'what task?'",
  "Your pain point is our product brief.",
  "Solving the thing you've procrastinated on for two quarters.",
  "The fastest way from 'ugh' to 'done.'",
  "Less clicks. Same result. Better mood.",
  "No spreadsheet was harmed. A few retired, though.",
  "Making the things nobody wants to do... disappear.",
  "We solve it once. You never solve it again.",
  "Built for people who have better things to do.",
  "From 'this is annoying' to 'this is automated.' Fast.",
  "We're allergic to inefficiency. It shows.",
  "The shortest distance between a problem and a solution.",
  "We asked 'what if this just... worked?' and then built it.",
  "We solve the things you stopped complaining about because complaining didn't help.",
  "Turning your daily drag into a daily done.",
  "Less friction. More traction.",
  "If it repeats, it shouldn't be manual. We agree.",
  "Built by people who find inefficiency personally offensive.",
  "The cure for 'I've always done it this way.'",
  "We make the annoying stuff go away. Quietly.",
  "Solving the unsolvable — which was actually always solvable.",
  "We turned complexity into a button.",
  "Making software that sparks less anxiety.",
  "Tools that make your actual job easier to do.",
  "The best thing you'll never have to think about again.",
  "Because 'export to CSV and fix it in Excel' is not a strategy.",
  "We turned 'someone should build this' into 'someone did.'",
  "Fixing the stuff that slows down the stuff that matters.",
  "Mundane in. Legendary out.",
  "For the 27-step process that should be one button.",
  "We solve. You launch. Simple as that.",
  "Less tab-switching. More shipping.",
  "Built for the 'why does this not exist yet?' moment.",
  "That thing you've been doing manually since 2019? Fixed.",
  "You said 'I'll automate this later.' Later is now.",
  "Built for the person who Googled 'is there a faster way.'",
  "For when you're tired of being your own IT support.",
  "Your 'quick task' ate three hours. Again. Not anymore.",
  "Less 'I have to do this again.' More 'wait, that's already done?'",
  "For the task that's been on your list since last season.",
  "You shouldn't need a spreadsheet to manage your life.",
  "Your future self stopped dreading Mondays. You're welcome.",
  "We turned your loudest 'ugh' into your quietest workflow.",
  "Because your time is worth more than this task.",
  "We solve problems so you can go touch grass.",
  "You deserve tools that actually work for you.",
  "The fix you've been putting off? We made it a product.",
  "Less copy-paste. More actually getting things done.",
  "Your tab count will thank you.",
  "Built for the person who has seventeen browser tabs open right now.",
  "We handle the tedium. You handle the triumph.",
  "Stop doing the thing. Start having it done.",
  "Your workflow called. It said it's been meaning to talk to you.",
  "One tool. Zero excuses for that task still being on your list.",
  "We solve mundane. You launch legendary.",
  "For the problem that doesn't have a subreddit solution.",
  "Your 'I'll figure it out' just became 'it's already figured out.'",
  "Less doing the thing. More having done the thing.",
  "We built the shortcut you always knew should exist.",
  "For the day you realized your process needed a process.",
  "Your recurring nightmare just became a solved problem.",
  "Making the boring stuff boring-less since 2026.",
  "Not every hero writes code. But we do, for you.",
  "The thing taking up mental real estate? Evicted.",
  "We make 'I'll get to it' into 'it's already done.'"
];

function randomLine(current: string) {
  let next: string;
  do {
    next = ONE_LINERS[Math.floor(Math.random() * ONE_LINERS.length)];
  } while (next === current);
  return next;
}

export default function RotatingTagline() {
  const [line, setLine] = useState(ONE_LINERS[0]);
  const [visible, setVisible] = useState(true);

  const cycle = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setLine((prev) => randomLine(prev));
      setVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    cycle();
    const id = setInterval(cycle, 8000);
    return () => clearInterval(id);
  }, [cycle]);

  return (
    <p
      className="text-[#FFFFFC]/70 text-xl md:text-2xl tracking-wide"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
        fontFamily: "var(--font-caveat), cursive",
      }}
    >
      {line}
    </p>
  );
}
