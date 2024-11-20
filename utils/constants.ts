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
