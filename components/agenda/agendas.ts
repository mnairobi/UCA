"use client";

import { BookOpenCheck, Briefcase, HandCoins, Handshake, HousePlus, Lock, ShieldCheck, Trophy } from 'lucide-react';


const agendaItems = [
    {
      agenda: "Financial Support & Student Empowerment",
      description: "Through our MUTSO Scholarship we will ensure that no student drops out due to fees constraints. We will offer student financial aid and advocate for more work-study opportunities within our campuses.",
      icon: BookOpenCheck,
    },
    {
      agenda: "Rising rent and substandard living conditions",
      description: "The recent increase in rent rates with some landlords charging between ksh 4000 and 4500 for subpar living conditions is unacceptable. We will work towards establishing partnerships with univeristy management and local landlords to ensure that accomodation rates are fair, affodable and reflective of the quality provided.",
      icon: HousePlus,
    },
    {
      agenda: "Hostel deposit Refunds.",
      description: "Many students have reported difficulties in retrieving their accomodation deposits upon vacating the rooms. This exploitation cannot continue.We will push for a clear transparent and legally binding systems to guarantee students get their deposits back as long as the terms are met.",
      icon: HandCoins, 
    },
    {
      agenda: "Safety and Security.",
      description: "Safety is a fundamental right and it is alarming that many hostels are situated in poorly lit and unsafe areas. We will advocate for improved security measures and better lighting along paths. No student should feel unsafe.",
      icon: Lock,
    },
    {
      agenda: "Student participation",
      description: "We will appoint representatives in each academic department to act as a liason between the students and the council so as to address departmental concers effectively.",
      icon: Handshake,
    },
    {
      agenda: "Student health and wellness",
      description: "Student health remains one of our top priorities. We will advocate for improved medical services ensuring that our school clinics are fully equiped with essintial medicines and medical equipment. We will ensure that our condom dispensors are regulary stocked promoting better sexual and reproductive health.",
      icon: Trophy,
    },
    {
      agenda: "Transparent and Accountable Leadership",
      description: "We shall lead a transparent leadership, promote financial accountability, and introduce open forums for students to voice concerns to our leadership.",
      icon: ShieldCheck,
    },
    {
      agenda: "Career Events",
      description: "We will introduce Career Expos in partnership with top employers in the country to provide our students with insights about the job market and also provide networking opportunities.",
      icon: Briefcase, 
    },
  ];
  
  export { agendaItems };
  