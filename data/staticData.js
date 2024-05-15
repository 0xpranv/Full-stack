const ourServicesData = [
  {
    id: 1,
    title: "Admission Counseling",
    description:
      "Guidance on selecting suitable universities and programs based on academic qualifications, interests, and career goals.",
    iconName: "TicketIcon",
  },
  {
    id: 2,
    title: "Application Assistance",
    description:
      "Assistance with completing university applications, including advice on writing personal statements, gathering required documents, and meeting application deadlines.",
    iconName: "CheckIcon",
  },
  {
    id: 3,
    title: "Test Preparation",
    description:
      "Support and resources for standardized test preparation, such as the SAT, ACT, GRE, GMAT, TOEFL, and IELTS.",
    iconName: "BookIcon",
  },
  {
    id: 4,
    title: "Document Verification and Evaluation",
    description:
      "Verification and evaluation of academic transcripts, certificates, and other required documents to ensure compliance with university admission criteria.",
    iconName: "GoalIcon",
  },
  {
    id: 5,
    title: "Financial Aid and Scholarship Information",
    description:
      "Verification and evaluation of academic transcripts, certificates, and other required documents to ensure compliance with university admission criteria.",
    iconName: "BriefcaseIcon",
  },
  {
    id: 6,
    title: "Document Verification and Evaluation",
    description:
      " Information and guidance on available financial aid options, scholarships, grants, and student loans to fund education abroad.",
    iconName: "WorkflowIcon",
  },
];

const SevenStepProcessData = [
  {
    id: 1,
    title: "Step 1",
    description: "Onboarding University and program selection",
    iconName: "TicketIcon",
  },
  {
    id: 2,
    title: "Step 2",
    description: "In-depth research and preparation of application material",
    iconName: "TicketIcon",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Test preparation guidance",
    iconName: "TicketIcon",
  },
  {
    id: 4,
    title: "Step 4",
    description: "Application submission (including eligible scholarships)",
    iconName: "TicketIcon",
  },
  {
    id: 5,
    title: "Step 5",
    description: "Admission offers.",
    iconName: "TicketIcon",
  },
  {
    id: 6,
    title: "Step 6",
    description: "Fees and financing",
    iconName: "TicketIcon",
  },
  {
    id: 7,
    title: "Step 7",
    description: "Visa guidance and mock interview",
    iconName: "TicketIcon",
  },
];

const testmonialData = [
  {
    id: 1,
    name: "Pranay Baswapuram",
    University: "Sacred Heart Univeristy",
    major: "MCS",
    testimony:
      "Thanks to HelpStudyAbroad, I turned my dream of studying abroad into reality! Their personalized guidance made the process seamless. Highly recommend!",
  },
  {
    id: 2,
    name: "Kavya Bandam",
    University: "Roosevelt University",
    major: "MCC",
    testimony:
      "Choosing HelpStudyAbroad was a game-changer for me! Their team's dedication and expertise guided me through the entire study abroad process effortlessly.",
  },
  {
    id: 3,
    name: "Rishik Kandukuri",
    University: "Lawrence Technological Univeristy",
    major: "MCS",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    testimony:
      "Their personalized support and invaluable advice made the entire process stress-free. I couldn't be happier with my decision to choose them.",
  },
  {
    id: 4,
    name: "Stella Joseph",
    University: "Saint leo Univeristy",
    major: "BBA",
    testimony:
      "From navigating complex applications to cultural insights, they were with me every step of the way. Grateful for their expertise and highly recommend their services!",
  },
  {
    id: 5,
    name: "Srinath Banda",
    University: "University of Central Missouri",
    major: "MDS",
    testimony:
      "HelpStudyAbroad truly exceeded my expectations! Their team went above and beyond to ensure my study abroad experience was nothing short of amazing.",
  },
];

const fiveReasons = [
  {
    id: 1,
    description: "Learn about study abroad process and steps.",
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 2,
    description: "Tailored Solutions as per your needs.",
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    id: 3,
    description: "Expert Advice from our team.",
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="5" r="3"></circle>
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
      </svg>
    ),
  },
  {
    id: 4,
    description: "Clear Roadmap to achieve your dream.",
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 5,
    description: "Lastly, your first call is totally free on us.",
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    ),
  },
];

const faqs = [
  {
    id: 1,
    question: "What are the benefits of studying abroad?",
    answer:
      "helpstudyabroad offer various services, including application assistance, career counseling, visa assistance, financial aid and scholarship assistance, in-country support services",
  },
  {
    id: 2,
    question: "What is HelpStudyAbroad.com?",
    answer:
      "helpstudyabroad offer various services, including application assistance, career counseling, visa assistance, financial aid and scholarship assistance, in-country support services",
  },
  {
    id: 3,
    question: "How can HelpStudyAbroad.com experts can help me study abroad?",
    answer:
      "helpstudyabroad offer various services, including application assistance, career counseling, visa assistance, financial aid and scholarship assistance, in-country support services",
  },
  {
    id: 4,
    question: "How can I study abroad if I am financially weak?",
    answer:
      "helpstudyabroad offer various services, including application assistance, career counseling, visa assistance, financial aid and scholarship assistance, in-country support services",
  },
  {
    id: 5,
    question: "Why should I take expert guidance from HelpStudyAbroad.com?",
    answer:
      "helpstudyabroad offer various services, including application assistance, career counseling, visa assistance, financial aid and scholarship assistance, in-country support services",
  },
  {
    id: 6,
    question: "Can I study abroad for free?",
    answer:
      "helpstudyabroad offer various services, including application assistance, career counseling, visa assistance, financial aid and scholarship assistance, in-country support services",
  },
];

export {
  ourServicesData,
  testmonialData,
  SevenStepProcessData,
  fiveReasons,
  faqs,
};
