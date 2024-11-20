import Bar from "@/assets/bar.svg";
import Achievement from "@/assets/achievement.svg";
import File from "@/assets/file.svg";

import HTML from "@/assets/html.png";

import Trophy from "@/assets/trophy.png";
import Note from "@/assets/notepad.png";
import Tick from "@/assets/tick.png";

export const sidebarData = [
  {
    id: 1,
    icon: Bar,
    label: "Dashboard",
  },
  {
    id: 2,
    icon: Achievement,
    label: "Skill Test",
  },
  {
    id: 3,
    icon: File,
    label: "Internship",
  },
];

export const titleCardData = {
  image: HTML,
  title: "Hyper Text Markup Language",
  questions: "08",
  duration: "15 mins",
  submittedOn: "5 June 2021",
};

export const statCard = {
  title: "Quick Statistics",
  trophy: Trophy,
  note: Note,
  tick: Tick,
};

export const syllabusData = [
  {
    id: 1,
    title: "HTML Tools, Forms, History",
    percentage: 80,
    progressColor: "#2590f7",
    progressBg: "#d6ebff",
  },
  {
    id: 2,
    title: "Tags & References in HTML",
    percentage: 60,
    progressColor: "#ff9600",
    progressBg: "#ffedd2",
  },
  {
    id: 3,
    title: "Tables & References in HTML",
    percentage: 24,
    progressColor: "#ff3434",
    progressBg: "#ffe1e1",
  },
  {
    id: 4,
    title: "Tables & CSS Basics",
    percentage: 96,
    progressColor: "#00e241",
    progressBg: "#dfffe8",
  },
];
