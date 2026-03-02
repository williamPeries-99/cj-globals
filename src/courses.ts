// src/courses.ts
// Course data for all available courses
const images = import.meta.glob('./assets/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export interface CourseKeyFact {
  label: string;
  value: string;
}

export interface EntryRequirement {
  label: string;
  local: string;
  international: string;
}

export interface Course {
  id: string;
  title: string;
  synopsis: string;
  image: string;
  language?: string;
  overview: string;
  objectives: string[];
  keyFacts: CourseKeyFact[];
  structure: string[];
  entryRequirements: EntryRequirement[];
}

export const COURSES: Course[] = [
  // Diploma
  {
    id: 'diploma-hospitality-patisserie',
    title: 'Diploma in Hospitality Management (Patisserie & Baking)',
    synopsis:
      'The Diploma in Hospitality Management (Patisserie & Baking) course is designed for learners who wish to build foundational skills in pastry, baking and hospitality operations.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This full-time diploma is designed for students who want practical training for hospitality and baking careers. Learners develop core competencies in food and beverage service, kitchen production, guest engagement, and workplace professionalism. The programme pairs classroom learning with hands-on training and a structured industry attachment, so graduates leave with both technical capability and workplace confidence.',
    objectives: [
      'Apply core hospitality operations knowledge in front-of-house and service environments.',
      'Produce breads, pastries and plated desserts to commercial standards.',
      'Demonstrate service communication, teamwork and professional work ethics in fast-paced settings.',
      'Operate safely with food hygiene and basic kitchen workflow control.',
      'Build employability through supervised industry attachment and reflective practice.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Hospitality Management (Patisserie & Baking)' },
      { label: 'Duration', value: '12 months (6 months class + 6 months internship)' },
      { label: 'Mode of Study', value: 'Full-time, face-to-face' },
      { label: 'Intakes', value: 'January, April, July, October' },
      { label: 'Class Size', value: 'Maximum 40 students' },
    ],
    structure: [
      'Hospitality Service Excellence',
      'Food & Beverage Operations',
      'Professional Bakery Fundamentals',
      'Patisserie Production Techniques',
      'Customer Experience & Communication Skills',
      'Workplace Safety and Food Hygiene',
      'Industry Attachment / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: '3 GCE O-Level passes or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at secondary level or equivalent',
        international: 'IELTS 5.5 or equivalent, or equivalent English qualification',
      },
    ],
  },
  {
    id: 'diploma-hospitality-patisserie-chinese',
    title: 'Diploma in Hospitality Management (Patisserie & Baking) (Chinese)',
    synopsis:
      'The Diploma in Hospitality Management (Patisserie & Baking) (Chinese) course is designed for Mandarin-speaking learners who want to build skills in pastry, baking and hospitality operations.',
    image: images['./assets/Logo.jpeg'],
    language: 'Chinese',
    overview:
      'This diploma mirrors the English programme but is delivered in Chinese to better support Mandarin-speaking learners. It focuses on hospitality operations, professional patisserie skills and guest service, while also preparing students to work in multilingual and multicultural environments.',
    objectives: [
      'Develop pastry and baking skills suitable for cafes, bakeries and hotels.',
      'Apply hospitality operations knowledge in Chinese and English-speaking environments.',
      'Demonstrate professional behaviour, teamwork and communication skills.',
      'Apply food safety and workplace hygiene standards.',
      'Prepare for further studies or employment in hospitality-related roles.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Hospitality Management (Patisserie & Baking) (Chinese)' },
      { label: 'Duration', value: '12 months (including internship/attachment)' },
      { label: 'Language of Instruction', value: 'Chinese' },
      { label: 'Mode of Study', value: 'Full-time' },
      { label: 'Intakes', value: 'Selected intakes throughout the year' },
    ],
    structure: [
      'Introduction to Hospitality & Tourism (Chinese)',
      'Food & Beverage Operations (Chinese)',
      'Bakery & Patisserie Techniques',
      'Customer Service & Communication',
      'Food Safety & Hygiene',
      'Industry Attachment / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: '3 GCE O-Level passes or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'Language Requirement',
        local: 'Proficiency in Chinese (Mandarin)',
        international: 'Proficiency in Chinese (Mandarin)',
      },
    ],
  },
  {
    id: 'diploma-hospitality-cafe-operations',
    title: 'Diploma in Hospitality (Café Operations)',
    synopsis:
      'The Diploma in Hospitality (Café Operations) course is designed for school leavers who wish to pursue a career in café, coffee house and casual dining operations.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This programme focuses on front-of-house skills, cafe service workflows and guest experience. Learners gain hands-on exposure to specialty coffee, basic food preparation, counter service and reservations handling, preparing them for employment in cafes and casual hospitality outlets.',
    objectives: [
      'Operate effectively in a café or quick-service environment.',
      'Apply customer service principles to create positive guest experiences.',
      'Handle basic food and beverage preparation, service and POS operations.',
      'Apply food hygiene and workplace safety in daily operations.',
      'Prepare for supervisory responsibilities in small hospitality outlets.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Hospitality (Café Operations)' },
      { label: 'Duration', value: '12 months' },
      { label: 'Mode of Study', value: 'Full-time' },
      { label: 'Intakes', value: 'January, April, July, October' },
      { label: 'Career Pathways', value: 'Café crew, barista, service associate' },
    ],
    structure: [
      'Introduction to Hospitality & Café Operations',
      'Customer Service & Communication',
      'Beverage & Barista Skills',
      'Food & Café Menu Fundamentals',
      'Point-of-Sale & Reservations Handling',
      'Workplace Safety & Hygiene',
      'Industry Attachment / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'At least 1 GCE O-Level pass or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at secondary level or equivalent',
        international: 'IELTS 5.0 or equivalent',
      },
    ],
  },
  {
    id: 'diploma-hospitality-cafe-operations-chinese',
    title: 'Diploma in Hospitality (Café Operations) (Chinese)',
    synopsis:
      'The Diploma in Hospitality (Café Operations) (Chinese) course is designed for school leavers who wish to pursue a career in café operations with Chinese as the main language of instruction.',
    image: images['./assets/Logo.jpeg'],
    language: 'Chinese',
    overview:
      'This programme is tailored for Mandarin-speaking learners who want to work in cafes and casual dining outlets. It emphasises guest service, communication and workflow management, while also introducing basic barista and café menu skills.',
    objectives: [
      'Communicate effectively with guests and colleagues in Chinese in café settings.',
      'Perform basic café operations including order taking, service and cashiering.',
      'Apply professional grooming and service standards.',
      'Follow workplace safety and food hygiene requirements.',
      'Develop readiness for further studies or entry-level employment.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Hospitality (Café Operations) (Chinese)' },
      { label: 'Duration', value: '12 months' },
      { label: 'Language of Instruction', value: 'Chinese' },
      { label: 'Mode of Study', value: 'Full-time' },
      { label: 'Intakes', value: 'Selected intakes throughout the year' },
    ],
    structure: [
      'Introduction to Hospitality (Chinese)',
      'Café Operations & Service Standards',
      'Customer Service & Communication (Chinese)',
      'Basic Beverage & Barista Skills',
      'Workplace Safety & Hygiene',
      'Industry Attachment / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'At least 1 GCE O-Level pass or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'Language Requirement',
        local: 'Proficiency in Chinese (Mandarin)',
        international: 'Proficiency in Chinese (Mandarin)',
      },
    ],
  },
  {
    id: 'diploma-retail-supply-chain',
    title: 'Diploma in Retail and Supply Chain Management',
    synopsis:
      'The Diploma in Retail and Supply Chain Management introduces learners to the full value chain, from production and warehousing to distribution and retailing in modern retail environments.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This diploma equips learners with knowledge of end-to-end retail and supply chain operations. Students study inventory management, merchandising, logistics coordination and customer-facing retail functions, preparing them for entry-level roles across the supply chain sector.',
    objectives: [
      'Understand how products move through the supply chain from production to retail.',
      'Apply basic inventory, warehousing and distribution concepts.',
      'Support retail operations through merchandising and customer service.',
      'Use simple data and technology tools to support supply chain decisions.',
      'Prepare for progression to higher-level logistics or business qualifications.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Retail and Supply Chain Management' },
      { label: 'Duration', value: '12 months' },
      { label: 'Mode of Study', value: 'Full-time' },
      { label: 'Career Pathways', value: 'Retail assistant, logistics coordinator, warehouse support' },
      { label: 'Progression', value: 'Pathway to Higher Diploma or Advanced Diploma programmes' },
    ],
    structure: [
      'Introduction to Retail & Supply Chain',
      'Warehouse & Inventory Management',
      'Transportation & Distribution Basics',
      'Retail Operations & Merchandising',
      'Customer Service in Retail',
      'Technology in Retail & Logistics',
      'Industry Attachment / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'At least 1 GCE O-Level pass or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at secondary level or equivalent',
        international: 'IELTS 5.0 or equivalent',
      },
    ],
  },
  {
    id: 'diploma-business-technology',
    title: 'Diploma in Business & Technology',
    synopsis:
      'The Diploma in Business & Technology course is designed for learners who want a blend of business fundamentals and technology applications across the value chain.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This programme combines business principles with practical technology skills used in modern workplaces. Learners explore areas such as digital productivity tools, basic data analysis, e-commerce and operations, positioning them for varied roles in business support and administration.',
    objectives: [
      'Apply foundational business concepts in marketing, operations and finance.',
      'Use common office and digital productivity tools effectively.',
      'Understand how technology supports modern business processes.',
      'Communicate professionally with internal and external stakeholders.',
      'Prepare for further study in business, IT or related fields.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Business & Technology' },
      { label: 'Duration', value: '12 months' },
      { label: 'Mode of Study', value: 'Full-time' },
      { label: 'Intakes', value: 'January, April, July, October' },
      { label: 'Progression', value: 'Pathway to Higher Diploma or Degree programmes' },
    ],
    structure: [
      'Business Communication',
      'Principles of Management',
      'Introduction to Marketing',
      'Business Information Systems',
      'Data & Spreadsheet Fundamentals',
      'E-commerce & Digital Business',
      'Industry Attachment / Project',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: '3 GCE O-Level passes or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at secondary level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },
  {
    id: 'diploma-patisserie-baking',
    title: 'Diploma in Patisserie and Baking',
    synopsis:
      'The Diploma in Patisserie and Baking is designed for those who aspire to become professional pastry chefs and bakers in hotels, bakeries and cafés.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This specialised diploma focuses on the art and science of baking and pastry. Learners spend significant time in practical kitchens, mastering techniques for breads, cakes, pastries and plated desserts while also gaining essential knowledge in kitchen operations and food safety.',
    objectives: [
      'Develop technical proficiency in core baking and pastry techniques.',
      'Apply recipe formulas and methods in a professional kitchen setting.',
      'Follow food safety, hygiene and workplace safety requirements.',
      'Collaborate in kitchen brigades and work effectively under time pressure.',
      'Build a portfolio of pastry and bakery products suitable for industry.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Diploma in Patisserie and Baking' },
      { label: 'Duration', value: '12 months' },
      { label: 'Mode of Study', value: 'Full-time, practice-focused' },
      { label: 'Training Environment', value: 'Professional pastry and bakery kitchens' },
      { label: 'Career Pathways', value: 'Assistant pastry chef, baker, commis chef' },
    ],
    structure: [
      'Fundamentals of Baking Science',
      'Bread & Dough Products',
      'Cakes, Tortes & Gateaux',
      'Tarts, Pies & Petit Fours',
      'Plated Desserts & Presentation',
      'Food Safety & Kitchen Operations',
      'Industry Attachment / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '17 years old',
        international: '17 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'At least 1 GCE O-Level pass or equivalent',
        international: 'Completed 10 years of formal education or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at secondary level or equivalent',
        international: 'IELTS 5.0 or equivalent',
      },
    ],
  },

  // Higher Diploma
  {
    id: 'higher-diploma-business-management',
    title: 'Higher Diploma in Business Management',
    synopsis:
      'The Higher Diploma in Business Management course is designed for learners who want to build strong, practical skills in managing people, operations and resources in modern organisations.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This higher diploma deepens learners’ understanding of core business disciplines including management, marketing, finance and operations. It is suitable for those progressing from diploma level studies and seeking to prepare for supervisory roles or further undergraduate study.',
    objectives: [
      'Analyse business environments and develop appropriate management responses.',
      'Apply management and leadership concepts in practical scenarios.',
      'Interpret basic financial information to support decision-making.',
      'Develop marketing and customer relationship strategies.',
      'Prepare for further studies at degree level in business-related disciplines.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Higher Diploma in Business Management' },
      { label: 'Duration', value: '18–24 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Progression', value: 'Pathway to final-year degree entry (subject to university acceptance)' },
      { label: 'Level', value: 'Advanced post-secondary qualification' },
    ],
    structure: [
      'Organisational Behaviour & Leadership',
      'Strategic Management Fundamentals',
      'Marketing Management',
      'Financial Management for Non-Specialists',
      'Operations & Supply Chain Management',
      'Business Law & Ethics',
      'Business Project / Case Study',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma or equivalent',
        international: 'Equivalent post-secondary qualification in business or related field',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at GCE O-Level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },
  {
    id: 'higher-diploma-hospitality-tourism',
    title: 'Higher Diploma in Hospitality and Tourism Management',
    synopsis:
      'The Higher Diploma in Hospitality and Tourism Management course is designed for learners who seek advanced knowledge and skills for careers in hotels, tourism businesses and related services.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This programme provides in-depth coverage of hospitality and tourism operations, service excellence, destination management and revenue management. It prepares graduates to take on supervisory and junior management roles in the hospitality and tourism sectors.',
    objectives: [
      'Apply advanced hospitality and tourism concepts to real-world scenarios.',
      'Manage service quality and guest experience across different hospitality contexts.',
      'Understand tourism systems, destination marketing and sustainability.',
      'Analyse performance data to support operational decisions.',
      'Progress towards a hospitality or tourism degree with advanced standing (subject to partner policies).',
    ],
    keyFacts: [
      { label: 'Award', value: 'Higher Diploma in Hospitality and Tourism Management' },
      { label: 'Duration', value: '18–24 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Career Pathways', value: 'Hotel supervisor, tourism coordinator, guest services executive' },
      { label: 'Progression', value: 'Pathway to undergraduate degrees in hospitality and tourism' },
    ],
    structure: [
      'Hospitality Operations Management',
      'Tourism Systems & Destination Management',
      'Service Quality & Customer Experience',
      'Revenue & Yield Management',
      'Events & MICE Management',
      'Sustainable Tourism & Responsible Travel',
      'Industry Project / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma in Hospitality, Tourism or Business',
        international: 'Equivalent qualification in hospitality, tourism or related areas',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at GCE O-Level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },
  {
    id: 'higher-diploma-logistics-supply-chain',
    title: 'Higher Diploma in Logistics and Supply Chain Management',
    synopsis:
      'The Higher Diploma in Logistics and Supply Chain Management course is designed for learners who want advanced skills in coordinating the movement, storage and distribution of goods.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This higher diploma builds on foundational logistics and supply chain knowledge to cover planning, coordination and optimisation of supply chain activities. It prepares learners for roles in logistics operations, procurement, distribution and related functions.',
    objectives: [
      'Plan and manage logistics and supply chain activities across multiple stages.',
      'Apply inventory control and warehouse management techniques.',
      'Use data and technology tools to support supply chain decision-making.',
      'Understand global trade, transport modes and regulatory environments.',
      'Prepare for further study or career progression in logistics and operations management.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Higher Diploma in Logistics and Supply Chain Management' },
      { label: 'Duration', value: '18–24 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Career Pathways', value: 'Logistics executive, supply chain coordinator, distribution planner' },
      { label: 'Progression', value: 'Pathway to logistics or business degrees' },
    ],
    structure: [
      'Advanced Supply Chain Management',
      'Warehouse & Inventory Strategy',
      'Transportation & Distribution Management',
      'Procurement & Supplier Management',
      'Logistics Technology & Analytics',
      'Sustainability in Supply Chains',
      'Industry Project / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma in business, logistics or related fields',
        international: 'Equivalent post-secondary qualification',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at GCE O-Level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },

  // Advanced Diploma
  {
    id: 'advanced-diploma-hospitality-cafe-management',
    title: 'Advanced Diploma in Hospitality (Café Management)',
    synopsis:
      'The Advanced Diploma in Hospitality (Café Management) course is designed for learners who want to progress into supervisory and management roles in café and casual dining environments.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This advanced diploma builds on café operations knowledge and develops skills in people management, menu planning, cost control and service quality. It is suitable for diploma holders or experienced staff who want to step up into leadership roles in the café segment.',
    objectives: [
      'Lead and supervise teams in café and casual dining settings.',
      'Plan menus and manage costings to support profitability.',
      'Manage service quality, guest satisfaction and complaint resolution.',
      'Oversee daily operations, including staffing and inventory.',
      'Prepare for progression to degree-level study in hospitality management.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Advanced Diploma in Hospitality (Café Management)' },
      { label: 'Duration', value: '12–18 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Career Pathways', value: 'Café supervisor, outlet manager, F&B executive' },
      { label: 'Progression', value: 'Pathway to hospitality management degrees' },
    ],
    structure: [
      'Café Operations Management',
      'Menu Planning & Cost Control',
      'Service Leadership & Team Management',
      'Marketing for Café & Casual Dining',
      'Customer Experience & Service Recovery',
      'Business Analytics for F&B',
      'Industry Project / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma in Hospitality or equivalent',
        international: 'Equivalent qualification in hospitality or related areas',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at GCE O-Level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },
  {
    id: 'advanced-diploma-hospitality-cafe-management-chinese',
    title: 'Advanced Diploma in Hospitality (Café Management) (Chinese)',
    synopsis:
      'The Advanced Diploma in Hospitality (Café Management) (Chinese) course is designed for learners who prefer Mandarin as the medium of instruction while preparing for leadership in café operations.',
    image: images['./assets/Logo.jpeg'],
    language: 'Chinese',
    overview:
      'This programme mirrors the English-medium advanced diploma but is delivered primarily in Chinese. It supports Mandarin-speaking learners in developing managerial skills for café and casual dining operations in both local and regional markets.',
    objectives: [
      'Lead teams and manage operations in café environments.',
      'Apply menu and cost management concepts in Chinese-speaking markets.',
      'Maintain service quality and handle guest feedback effectively.',
      'Plan basic marketing activities for café outlets.',
      'Prepare for further studies or career advancement in hospitality.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Advanced Diploma in Hospitality (Café Management) (Chinese)' },
      { label: 'Duration', value: '12–18 months' },
      { label: 'Language of Instruction', value: 'Chinese' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Progression', value: 'Pathway to selected degree programmes (subject to entry requirements)' },
    ],
    structure: [
      'Café Operations Management (Chinese)',
      'Menu Planning & Cost Control',
      'Service Leadership & Team Management',
      'Marketing for Café & Casual Dining',
      'Customer Experience & Service Recovery',
      'Industry Project / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma in Hospitality or equivalent',
        international: 'Equivalent qualification in hospitality or related areas',
      },
      {
        label: 'Language Requirement',
        local: 'Proficiency in Chinese (Mandarin)',
        international: 'Proficiency in Chinese (Mandarin)',
      },
    ],
  },
  {
    id: 'advanced-diploma-retail-supply-chain',
    title: 'Advanced Diploma in Retail and Supply Chain Management',
    synopsis:
      'The Advanced Diploma in Retail and Supply Chain Management deepens learners’ understanding of the production, transportation, warehousing, distribution and retailing functions across the value chain.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This programme expands on diploma-level knowledge to develop strategic and analytical capabilities in retail and supply chain management. Learners explore integrated supply chains, omnichannel retailing, analytics and optimisation tools.',
    objectives: [
      'Design and manage integrated retail and supply chain networks.',
      'Apply advanced inventory, warehousing and distribution strategies.',
      'Use data and analytics to improve supply chain performance.',
      'Align retail operations with customer expectations and brand promises.',
      'Prepare for managerial roles or further undergraduate study.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Advanced Diploma in Retail and Supply Chain Management' },
      { label: 'Duration', value: '12–18 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Career Pathways', value: 'Retail manager, logistics executive, supply chain analyst' },
      { label: 'Progression', value: 'Pathway to degrees in logistics, supply chain or business' },
    ],
    structure: [
      'Strategic Retail Management',
      'Supply Chain Design & Optimisation',
      'Omnichannel Retail & E-commerce',
      'Advanced Inventory & Distribution Management',
      'Retail Analytics & Performance Measurement',
      'Sustainability in Retail & Logistics',
      'Industry Project / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma in business, retail or logistics',
        international: 'Equivalent post-secondary qualification',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at GCE O-Level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },
  {
    id: 'advanced-diploma-hospitality-operations',
    title: 'Advanced Diploma in Hospitality Operations',
    synopsis:
      'The Advanced Diploma in Hospitality Operations is designed for learners who wish to assume supervisory and junior management roles in hotels, resorts and other hospitality businesses.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This broad-based advanced diploma covers front office, housekeeping, F&B service and back-of-house coordination. Learners develop operational planning, people management and service leadership skills necessary for smooth hospitality operations.',
    objectives: [
      'Plan and oversee daily hospitality operations across key departments.',
      'Lead and motivate teams to deliver consistent service standards.',
      'Apply revenue and cost management principles to improve profitability.',
      'Enhance guest satisfaction through service recovery and quality initiatives.',
      'Prepare for degree-level study or progression into supervisory roles.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Advanced Diploma in Hospitality Operations' },
      { label: 'Duration', value: '12–18 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Career Pathways', value: 'Hotel supervisor, front office executive, F&B supervisor' },
      { label: 'Progression', value: 'Pathway to hospitality management degrees' },
    ],
    structure: [
      'Front Office & Rooms Division Management',
      'Housekeeping Operations & Standards',
      'Food & Beverage Service Management',
      'Revenue & Cost Control in Hospitality',
      'Service Quality & Guest Experience',
      'Human Resource Management in Hospitality',
      'Industry Project / Internship',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '18 years old',
        international: '18 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Relevant Diploma in Hospitality or equivalent',
        international: 'Equivalent post-secondary qualification in hospitality or related fields',
      },
      {
        label: 'English Proficiency',
        local: 'Pass in English at GCE O-Level or equivalent',
        international: 'IELTS 5.5 or equivalent',
      },
    ],
  },

  // Postgraduate Diploma
  {
    id: 'postgrad-diploma-hospitality-cafe-management',
    title: 'Postgraduate Diploma in Hospitality (Café Management)',
    synopsis:
      'The Postgraduate Diploma in Hospitality (Café Management) course is designed for graduates who wish to specialise in the café and casual dining segment of the hospitality industry.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This postgraduate-level programme is targeted at degree holders or experienced professionals seeking specialised knowledge in café and casual dining management. It combines strategic thinking with practical applications in concept development, branding, operations and leadership.',
    objectives: [
      'Critically evaluate trends and opportunities in café and casual dining markets.',
      'Design and manage café concepts, menus and service blueprints.',
      'Apply strategic and financial tools to improve outlet performance.',
      'Lead diverse teams and drive service innovation.',
      'Prepare for senior operational or entrepreneurial roles in the café segment.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Postgraduate Diploma in Hospitality (Café Management)' },
      { label: 'Duration', value: '12 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Entry Level', value: 'Postgraduate (for degree holders or equivalent)' },
      { label: 'Progression', value: 'Possible credit transfer to selected master’s programmes (subject to partner policies)' },
    ],
    structure: [
      'Hospitality Strategy & Innovation',
      'Café Concept Development & Branding',
      'Advanced Menu Engineering & Cost Control',
      'Service Excellence & Experience Design',
      'People Leadership & Change Management',
      'Business Analytics for Hospitality',
      'Capstone Project in Café Management',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '21 years old',
        international: '21 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Recognised Bachelor’s degree or equivalent',
        international: 'Recognised Bachelor’s degree or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'IELTS 6.0 or equivalent',
        international: 'IELTS 6.0 or equivalent',
      },
    ],
  },
  {
    id: 'postgrad-diploma-retail-supply-chain',
    title: 'Postgraduate Diploma in Retail and Supply Chain Management',
    synopsis:
      'The Postgraduate Diploma in Retail and Supply Chain Management is designed for graduates who want advanced capabilities across production, transportation, warehousing, distribution and retailing.',
    image: images['./assets/Logo.jpeg'],
    language: 'English',
    overview:
      'This programme equips learners with strategic and analytical tools to manage complex retail and supply chain systems. It is suitable for those aiming for middle-management roles or preparing for further master’s-level study.',
    objectives: [
      'Analyse and design integrated retail and supply chain networks.',
      'Evaluate and implement advanced logistics and distribution strategies.',
      'Use data analytics to support retail and supply chain decision-making.',
      'Manage stakeholder relationships across suppliers, logistics partners and retailers.',
      'Lead improvement projects that enhance efficiency and customer value.',
    ],
    keyFacts: [
      { label: 'Award', value: 'Postgraduate Diploma in Retail and Supply Chain Management' },
      { label: 'Duration', value: '12 months' },
      { label: 'Mode of Study', value: 'Full-time / Part-time (where available)' },
      { label: 'Entry Level', value: 'Postgraduate (for degree holders or equivalent)' },
      { label: 'Progression', value: 'Potential articulation to master’s degrees (subject to partner requirements)' },
    ],
    structure: [
      'Strategic Supply Chain Management',
      'Advanced Retail Management & Omnichannel Strategy',
      'Logistics Network Design & Optimisation',
      'Data Analytics for Retail & Supply Chains',
      'Global Trade, Risk & Compliance',
      'Sustainability & Ethics in Supply Chains',
      'Capstone Project in Retail / Supply Chain',
    ],
    entryRequirements: [
      {
        label: 'Minimum Age',
        local: '21 years old',
        international: '21 years old',
      },
      {
        label: 'Academic Qualification',
        local: 'Recognised Bachelor’s degree or equivalent',
        international: 'Recognised Bachelor’s degree or equivalent',
      },
      {
        label: 'English Proficiency',
        local: 'IELTS 6.0 or equivalent',
        international: 'IELTS 6.0 or equivalent',
      },
    ],
  },
];
