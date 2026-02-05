import {
  PiggyBank,
  HeartHandshake,
  IdCard,
  Lamp,
  ClipboardCheck,
  Trophy,
  Users,
  Brain,
  Stethoscope,
  Baby,
  ShieldCheck,
  Home,
  Award,
  Wallet,
} from "lucide-react";

const manifestoItems = [
  {
    title: "Students’ Kitty to Student Government",
    description:
      "We will push for the transfer of the students’ kitty from administration to the Student Governing Council to ensure faster service delivery, transparency, and accountability.\nStudents’ resources must be controlled by students, for students, to directly address comrades’ real needs.",
    icon: PiggyBank,
  },
  {
    title: "Somesha Comrades Program",
    description:
      "We will establish the Somesha Comrades Foundation to support comrades beyond politics.\nThe foundation will focus on student welfare, mental health, mentorship, and support for needy comrades, ensuring no student is left behind.",
    icon: HeartHandshake,
  },

  // NEW
  {
    title: "Mental Health Awareness",
    description:
      "Promote a culture of self-awareness and emotional well-being.\nWe will strengthen awareness, peer support, and access to help for comrades who need it.",
    icon: Brain,
  },
  {
    title: "Stronger Health Unit Services",
    description:
      "Revitalize the school health unit into a reliable and well-equipped unit that supports student wellness and provides quality services.",
    icon: Stethoscope,
  },
  {
    title: "Support for Young Mothers",
    description:
      "Support programs for young mothers through affordable daycare and accessible clinic services—ensuring no comrade is left behind.",
    icon: Baby,
  },

  {
    title: "Fair Treatment & Portal Verification",
    description:
      "We will intervene to end harassment of students without physical IDs.\nStudents will be allowed to use the student portal as a valid means of identification, promoting dignity, fairness, and respect in security operations.",
    icon: IdCard,
  },
  {
    title: "Campus Street Lighting & Safety",
    description:
      "We will advocate for the installation of street lights within and around campus to enhance security, safety, and free movement, especially at night.\nA safe campus is a productive campus.",
    icon: Lamp,
  },

  // NEW (expanded security manifesto)
  {
    title: "Security, Reporting & Emergency Response",
    description:
      "• Off-campus & hostel security: advocate for improved security personnel presence and surveillance in hostels and surrounding areas.\n" +
      "• Improve street lighting along university ways and student residence areas.\n" +
      "• Dignity & Flexibility: No student should be harassed over IDs. We will ensure the student portal is accepted as valid identification, and push for soft copy IDs to be accepted as gate passes—because your time and dignity matter.\n"+
      "• Establish faster reporting mechanisms for security threats and liaise with university security departments.\n" +
      "• Digital training: workshops on data security and ethical communication for student leaders; empower class representatives.\n" +
      "• Liaison with authorities: coordinate with administration and local law enforcement to address security breaches.\n" +
      "• Emergency management: work with security to disseminate information during emergencies and ensure student safety.\n" +
      "• Welfare-based security: promote safe study/work environments and student–lecturer dialogue to prevent harassment or conflict.",
    icon: ShieldCheck,
  },

  // Academics (your original + added points)
  {
    title: "Academic Rights, Communication & Fair Assessment",
    description:
      "We will champion academic justice by ensuring digital uploading of CAT marks to the student portal, timely release of exam results, and clear grading transparency.\n" +
      "Every grade will reflect both the letter and its points (e.g., A – 80 and above) so comrades can accurately track progress.\n\n" +
      "Key commitments:\n" +
      "• Timely and clear dissemination of academic information.\n" +
      "• Active student representation on academic concerns.\n" +
      "• Fairness and transparency in academic processes and decisions affecting students.",
    icon: ClipboardCheck,
  },

  // NEW (clubs-focused manifesto)
  {
    title: "Clubs Recognition, Funding & Partnerships",
    description:
      "• Clubs recognition: an award system to recognize the most active clubs and motivate excellence.\n" +
      "• Clubs support through funds: approved clubs should be funded to run activities smoothly.\n" +
      "• Engagement of clubs: involve clubs in MUTSO activities for visibility, marketing, and service delivery.\n" +
      "• Partnerships among clubs: encourage cooperation for bigger impact.",
    icon: Award,
  },

  // Sports + entertainment (your long text consolidated)
  {
    title: "Sports, Games, Culture & Entertainment",
    description:
      "We aim to create a university where every student has access to sports, games, and entertainment—where talent is nurtured, wellness is promoted, and campus life is exciting, united, and memorable.\n\n" +
      "Key commitments:\n" +
      "• Organize regular inter-faculty and inter-hostel tournaments.\n" +
      "• Strengthen support for university teams (training schedules and exposure matches).\n" +
      "• Advocate for better sports facilities and equipment.\n" +
      "• Promote both traditional and modern games (chess, scrabble, e-sports, etc.).\n" +
      "• Celebrate diversity through cultural exchange events.\n" +
      "• Partner with clubs to host safe, well-planned social events.\n" +
      "• Maintain open communication with students and sports captains; collect feedback and ensure fair allocation of resources.\n\n" +
      "Entertainment:\n" +
      "• Partner with sponsors and promoters to elevate major events (e.g., Freshers’ Night) to the next level.\n\n" +
      "We stand for unity, energy, and excellence—and we will serve with integrity, passion, and accountability so that sports, games, and entertainment reflect the spirit of our university.",
    icon: Trophy,
  },

  // Accommodation + welfare (rewritten as manifesto, no aspirant)
  {
    title: "Accommodation, Hygiene, Mess Standards & Inclusion",
    description:
      "We will work to create an environment that is conducive and friendly to all comrades.\n\n" +
      "Key commitments:\n" +
      "• Improve hostel hygiene support and cleanliness standards.\n" +
      "• Ensure the food provided by the school mess meets quality and quantity standards.\n" +
      "• Ensure comrades from gender minority groups are catered for with due diligence and utmost care.",
    icon: Home,
  },

  // Finance pillars (from your text)
  {
    title: "Transparent Student Finance, Bursaries & Emergency Support",
    description:
      "Vision: establish a financial system that is transparent, student-centered, and efficient—so student funds support a vibrant campus life and the academic journey of every comrade.\n\n" +
      "Key pillars:\n" +
      "A) Radical transparency & accountability\n" +
      "• Hold Finance Clinics twice a semester where any student can ask questions about budgets and allocations.\n\n" +
      "B) Efficient bursary & emergency fund management\n" +
      "• Streamline union bursaries to be fair, merit-based, and timely.\n" +
      "• Establish a Comrade-in-Need Emergency Kit for sudden personal or medical crises.\n\n" +
      "C) Timely funding for clubs & sports\n" +
      "• Create a digital requisition system to speed up approval and release of funds.\n" +
      "• Provide performance-based incentives for clubs/teams that excel and represent MUT honorably.",
    icon: Wallet,
  },

  {
    title: "Empowering Class Representatives",
    description:
      "We will empower Class Representatives through structured facilitation, leadership training, mentorship, and capacity-building workshops.\nBy equipping them with the right skills, recognition, and support, we will strengthen communication between students and leadership and ensure every comrade is effectively represented.\nStrong class leadership builds a stronger student community.",
    icon: Users,
  },

];

export { manifestoItems };