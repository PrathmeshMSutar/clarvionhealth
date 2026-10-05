import {
  Activity,
  FileText,
  ClipboardCheck,
  Users,
  Settings,
  BarChart3,
  Stethoscope,
  Building2,
  HeartPulse,
  MonitorSmartphone,
  Layers,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Workflow,
  HandshakeIcon,
  type LucideIcon,
} from 'lucide-react';

// Re-export icons used in data
export {
  Activity,
  FileText,
  ClipboardCheck,
  Users,
  Settings,
  BarChart3,
  Stethoscope,
  Building2,
  HeartPulse,
  MonitorSmartphone,
  Layers,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Workflow,
};

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  image: string;
  alt: string;
  detail: {
    whatItInvolves: string;
    typicalWorkflow: string[];
    operationalChallenges: string;
    clarvionApproach: string;
    businessValue: string;
    whoItSupports: string;
  };
}

export const services: ServiceItem[] = [
  {
    id: 'revenue-cycle-management',
    icon: Activity,
    title: 'Revenue Cycle Management',
    shortDescription:
      'Support healthcare organizations across billing, claims, accounts receivable, and revenue cycle workflows.',
    image: 'https://images.pexels.com/photos/33175651/pexels-photo-33175651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Financial documents and calculator on a desk representing revenue cycle management',
    detail: {
      whatItInvolves:
        'Revenue cycle management encompasses the full financial lifecycle of a healthcare encounter — from patient registration and eligibility verification through claims submission, payment posting, and final account resolution. Our teams support organizations across each phase of this cycle, helping maintain continuity between clinical activity and financial operations.',
      typicalWorkflow: [
        'Registration and demographic verification',
        'Eligibility and benefits verification',
        'Charge capture and coding review',
        'Claims preparation and submission',
        'Payment posting and reconciliation',
        'Accounts receivable follow-up and resolution',
      ],
      operationalChallenges:
        'Revenue cycle workflows often span multiple systems, departments, and stakeholders. Gaps in handoffs between front-end registration and back-end billing can lead to claim rejections, delayed reimbursements, and aging accounts receivable. Many organizations struggle with inconsistent processes, limited visibility into cycle performance, and difficulty scaling operations during volume fluctuations.',
      clarvionApproach:
        'We bring structured workflows to each phase of the revenue cycle, with clear documentation of handoffs, escalation paths, and quality checkpoints. Our teams work alongside existing staff and systems, helping standardize processes across departments while maintaining flexibility for organization-specific requirements. We focus on reducing friction points where delays and errors most commonly occur.',
      businessValue:
        'Organizations that strengthen revenue cycle workflows can experience faster claim turnaround, reduced denial rates, lower days in accounts receivable, and improved cash flow predictability. Structured processes also create the visibility needed to identify trends, allocate resources effectively, and plan for growth.',
      whoItSupports:
        'Hospitals and health systems, multi-specialty group practices, specialty practices, ambulatory healthcare organizations, and healthcare technology companies that need operational support for their revenue cycle functions.',
    },
  },
  {
    id: 'medical-billing-claims-support',
    icon: FileText,
    title: 'Medical Billing & Claims Support',
    shortDescription:
      'Administrative support designed to help healthcare organizations manage billing and claims processes.',
    image: 'https://images.pexels.com/photos/6129037/pexels-photo-6129037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Healthcare professional working at a computer workstation processing billing',
    detail: {
      whatItInvolves:
        'Medical billing and claims support covers the preparation, submission, tracking, and management of claims sent to payers. This includes translating clinical documentation into billable claims, applying payer-specific rules, managing claim status, and supporting corrections when claims are rejected or denied.',
      typicalWorkflow: [
        'Review of clinical documentation for billing completeness',
        'Application of payer-specific billing rules and formats',
        'Claim generation and electronic submission',
        'Claim status monitoring and payer follow-up',
        'Rejection and denial identification and correction',
        'Re-submission and resolution tracking',
      ],
      operationalChallenges:
        'Payer requirements vary widely and change frequently, making it difficult for internal teams to stay current. Claims may be denied for reasons ranging from coding discrepancies to missing prior authorizations. High denial volumes create backlogs that compound over time, tying up staff resources and delaying revenue recognition.',
      clarvionApproach:
        'Our billing support teams follow documented procedures for each payer relationship, with quality review steps built into the claim generation process. We maintain organized tracking of claim statuses, denial reasons, and correction cycles so that nothing falls through the cracks. When issues arise, we follow structured escalation paths to resolve them promptly.',
      businessValue:
        'Cleaner claim submissions reduce denial volumes and the associated rework. Faster identification and correction of rejected claims accelerates reimbursement. Organized claim tracking provides visibility into payer performance and helps organizations identify systemic issues that can be addressed at their source.',
      whoItSupports:
        'Physician practices, specialty practices, multi-specialty groups, and hospital billing departments that need reliable, scalable claims processing support.',
    },
  },
  {
    id: 'accounts-receivable-denial-management',
    icon: ClipboardCheck,
    title: 'Accounts Receivable & Denial Management',
    shortDescription:
      'Structured workflows supporting follow-up, account resolution, and denial-related processes.',
    image: 'https://images.pexels.com/photos/8428063/pexels-photo-8428063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Documents and laptop on a desk representing accounts receivable management',
    detail: {
      whatItInvolves:
        'Accounts receivable and denial management focuses on the back-end of the revenue cycle — tracking outstanding balances, following up on unpaid claims, managing denial responses, and resolving accounts to completion. This work requires persistent follow-up, detailed documentation, and an understanding of payer behaviors and appeal processes.',
      typicalWorkflow: [
        'Aging analysis and account prioritization',
        'Payer follow-up on outstanding claims',
        'Denial reason identification and categorization',
        'Appeal preparation and submission',
        'Short-pay and zero-pay investigation',
        'Account write-off or escalation recommendations',
      ],
      operationalChallenges:
        'Aging accounts receivable can quickly become unmanageable without disciplined follow-up. Denials require specific knowledge of appeal timelines, required documentation, and payer-specific processes. Many organizations lack the staff capacity to follow up on every account in a timely way, leading to lost revenue and inflated AR balances.',
      clarvionApproach:
        'We bring structured aging management workflows that prioritize accounts based on age, balance, and likelihood of recovery. Our denial management process categorizes denials by reason code, enabling pattern identification and root-cause feedback to upstream departments. Every account action is documented, creating a clear audit trail and supporting continuous improvement.',
      businessValue:
        'Systematic AR follow-up improves collection rates and reduces the percentage of accounts that age beyond recovery. Structured denial management not only recovers more denied revenue but also generates insights that help prevent future denials. Clean AR aging supports more accurate financial reporting and forecasting.',
      whoItSupports:
        'Healthcare organizations of all sizes that need disciplined follow-up on outstanding accounts, including hospitals, multi-specialty groups, specialty practices, and ambulatory care organizations.',
    },
  },
  {
    id: 'patient-access-eligibility',
    icon: Users,
    title: 'Patient Access & Eligibility',
    shortDescription:
      'Operational support around eligibility verification, registration, and patient access workflows.',
    image: 'https://images.pexels.com/photos/7108318/pexels-photo-7108318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Clinic reception area with patients and staff interacting during registration',
    detail: {
      whatItInvolves:
        'Patient access and eligibility support covers the front-end operations that occur before and during a patient encounter. This includes registration accuracy, insurance eligibility verification, benefits investigation, prior authorization support, and patient financial communication. These workflows set the foundation for a clean revenue cycle downstream.',
      typicalWorkflow: [
        'Patient registration and demographic verification',
        'Insurance eligibility and benefits verification',
        'Prior authorization initiation and tracking',
        'Patient financial responsibility communication',
        'Co-pay and deductible collection support',
        'Pre-visit authorization confirmation',
      ],
      operationalChallenges:
        'Front-end errors in registration or eligibility verification are among the most common causes of downstream claim denials. Verifying benefits across multiple payers is time-consuming, and prior authorization requirements add complexity. High patient volume can create pressure to rush through these steps, introducing errors that are expensive to correct later.',
      clarvionApproach:
        'Our patient access teams follow standardized verification checklists for each payer type, ensuring that critical information is captured before the encounter. We maintain organized authorization tracking with proactive follow-up on pending approvals. By addressing eligibility and authorization issues before service delivery, we help reduce the denial volume that reaches the back-end team.',
      businessValue:
        'Accurate front-end workflows reduce claim denials at their source, decreasing rework and accelerating reimbursement. Proactive eligibility verification helps patients understand their financial responsibility earlier, improving collections and reducing bad debt. Clean registration data also supports better analytics and reporting downstream.',
      whoItSupports:
        'Hospitals, multi-specialty groups, specialty practices, and ambulatory healthcare organizations that want to strengthen front-end operations and reduce downstream denial volume.',
    },
  },
  {
    id: 'healthcare-administrative-services',
    icon: Settings,
    title: 'Healthcare Administrative Services',
    shortDescription:
      'Back-office support designed around healthcare administrative operations.',
    image: 'https://images.pexels.com/photos/6129142/pexels-photo-6129142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Medical staff working on administrative tasks in a hospital office',
    detail: {
      whatItInvolves:
        'Healthcare administrative services cover the broad range of back-office functions that keep healthcare organizations running — from documentation management and record maintenance to correspondence handling, reporting, and operational coordination. These functions are essential but often consume resources that could be directed toward patient-facing activities.',
      typicalWorkflow: [
        'Documentation review and organization',
        'Record maintenance and updates',
        'Correspondence management with payers and patients',
        'Operational reporting and data entry',
        'Compliance documentation support',
        'Cross-departmental coordination tasks',
      ],
      operationalChallenges:
        'Administrative workloads tend to grow with organizational scale, creating bottlenecks that slow down core operations. Inconsistent documentation practices make it difficult to locate information quickly. Manual reporting processes are time-consuming and prone to error. Many organizations struggle to balance administrative demands with clinical and financial priorities.',
      clarvionApproach:
        'We provide structured administrative support with clear task definitions, turnaround expectations, and quality standards. Our teams integrate with existing systems and follow documented procedures for each function. We bring consistency to documentation and reporting practices, helping organizations maintain organized, accessible records and timely operational outputs.',
      businessValue:
        'Reliable administrative support frees internal staff to focus on clinical and revenue-generating activities. Standardized documentation improves information accessibility and supports compliance efforts. Consistent reporting provides leadership with the visibility needed to make informed operational decisions.',
      whoItSupports:
        'Healthcare organizations of all types that need scalable back-office support, including hospitals, physician practices, ambulatory organizations, and healthcare technology companies.',
    },
  },
  {
    id: 'healthcare-process-optimization',
    icon: Workflow,
    title: 'Healthcare Process Optimization',
    shortDescription:
      'Workflow analysis, standardization, documentation, and continuous improvement.',
    image: 'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Diverse team collaborating in a bright modern conference room',
    detail: {
      whatItInvolves:
        'Process optimization involves analyzing existing operational workflows, identifying inefficiencies and bottlenecks, standardizing procedures across teams, documenting best practices, and establishing cycles of continuous improvement. This service helps organizations move from inconsistent, person-dependent processes to reliable, repeatable operations.',
      typicalWorkflow: [
        'Current-state workflow mapping and analysis',
        'Bottleneck and inefficiency identification',
        'Future-state process design and standardization',
        'Procedure documentation and SOP development',
        'Team training and change management support',
        'Performance monitoring and improvement cycles',
      ],
      operationalChallenges:
        'Many healthcare organizations have workflows that evolved organically, resulting in inconsistent practices across departments and individuals. Tribal knowledge creates risk when experienced staff leave. Without documented procedures, training new staff is slow and error-prone. Identifying which processes to optimize first can be difficult without a clear operational picture.',
      clarvionApproach:
        'We begin with a structured assessment of current-state workflows, mapping each process end-to-end and identifying where delays, errors, and rework occur. We then work with internal teams to design standardized future-state processes that are practical and sustainable. Our approach emphasizes documentation, training, and measurable performance tracking so that improvements are maintained over time.',
      businessValue:
        'Standardized workflows reduce variability, errors, and rework. Documented procedures accelerate onboarding and reduce dependency on individual knowledge. Continuous improvement cycles help organizations adapt to changing requirements while maintaining operational quality. Process optimization creates the foundation for scaling operations efficiently.',
      whoItSupports:
        'Healthcare organizations experiencing growth, operational challenges, or planning to scale — including hospitals, multi-specialty groups, ambulatory organizations, and healthcare technology companies.',
    },
  },
  {
    id: 'healthcare-technology-support',
    icon: MonitorSmartphone,
    title: 'Healthcare Technology Support',
    shortDescription:
      'Technology-enabled workflows, reporting, data visibility, and operational support.',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop displaying data analytics and charts representing healthcare technology',
    detail: {
      whatItInvolves:
        'Healthcare technology support encompasses the tools, systems, and data capabilities that enable modern healthcare operations. This includes workflow technology configuration, reporting and dashboard development, data integration support, operational analytics, and the application of technology to reduce manual effort and improve visibility across the revenue cycle and administrative functions.',
      typicalWorkflow: [
        'Operational technology needs assessment',
        'Workflow tool configuration and optimization',
        'Reporting and dashboard development',
        'Data integration and quality support',
        'Operational analytics and trend identification',
        'Technology-enabled process implementation',
      ],
      operationalChallenges:
        'Many healthcare organizations have multiple systems that do not communicate effectively, creating data silos and manual reconciliation work. Reporting is often ad hoc and inconsistent, making it difficult to track performance trends. Limited technology adoption can leave valuable tools underutilized. Staff may lack the time or expertise to configure systems for optimal efficiency.',
      clarvionApproach:
        'We help organizations leverage their existing technology investments more effectively through configuration optimization, reporting development, and data-driven workflow improvements. Our teams bridge the gap between operational needs and technology capabilities, helping translate business requirements into system configurations that reduce manual effort and improve data visibility.',
      businessValue:
        'Better technology utilization reduces manual work and its associated errors. Consistent reporting provides leadership with real-time visibility into operational performance. Data integration eliminates reconciliation work and enables more accurate analytics. Technology-enabled workflows create the scalability that supports organizational growth without proportional headcount increases.',
      whoItSupports:
        'Healthcare organizations that want to maximize the value of their technology investments, including hospitals, physician practices, ambulatory organizations, and healthcare technology companies.',
    },
  },
];

export interface SpecialtyItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const specialties: SpecialtyItem[] = [
  {
    id: 'physician-practices',
    icon: Stethoscope,
    title: 'Physician Practices',
    description:
      'Physician practices face the challenge of maintaining efficient revenue cycles while focusing on patient care. We support practice operations with billing, eligibility verification, claims management, and administrative workflows tailored to the scale and specialty of each practice.',
    image: 'https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Doctor consulting a patient in a modern medical office',
  },
  {
    id: 'specialty-practices',
    icon: HeartPulse,
    title: 'Specialty Practices',
    description:
      'Specialty practices often deal with complex payer requirements, prior authorization workflows, and specialized coding needs. Our support is designed around the specific operational demands of specialty care, from eligibility and authorization through claims and denial management.',
    image: 'https://images.pexels.com/photos/6129154/pexels-photo-6129154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Doctors and nurse discussing medical charts in a hospital setting',
  },
  {
    id: 'multi-specialty-groups',
    icon: Layers,
    title: 'Multi-Specialty Groups',
    description:
      'Multi-specialty groups operate across diverse service lines, each with its own billing rules and operational requirements. We help standardize processes across specialties while maintaining the flexibility needed for specialty-specific workflows, reporting, and payer management.',
    image: 'https://images.pexels.com/photos/6285362/pexels-photo-6285362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Two healthcare workers collaborating on data analysis at a computer',
  },
  {
    id: 'hospitals-health-systems',
    icon: Building2,
    title: 'Hospitals & Health Systems',
    description:
      'Hospitals and health systems manage high volumes across complex departmental structures. We provide scalable operational support for revenue cycle functions, patient access workflows, administrative processes, and technology-enabled reporting that meets the demands of large-scale healthcare operations.',
    image: 'https://images.pexels.com/photos/36078152/pexels-photo-36078152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of a modern hospital building surrounded by greenery',
  },
  {
    id: 'ambulatory-organizations',
    icon: Activity,
    title: 'Ambulatory Healthcare Organizations',
    description:
      'Ambulatory organizations balance high patient throughput with the need for accurate front-end and back-end operations. Our support covers eligibility verification, registration accuracy, claims management, and administrative workflows designed for the pace and scale of ambulatory care.',
    image: 'https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bright and clean medical waiting room with modern seating',
  },
  {
    id: 'healthcare-technology-organizations',
    icon: Cpu,
    title: 'Healthcare Technology Organizations',
    description:
      'Healthcare technology companies need operational support that understands both healthcare workflows and technology environments. We provide process optimization, operational reporting, workflow configuration, and data-driven support that complements technology platforms and enhances their value to end users.',
    image: 'https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop showing an analytics dashboard with charts and graphs',
  },
];

export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    icon: Users,
    title: 'People',
    description:
      'Experienced teams focused on healthcare operations, with the training, documentation, and support structures needed to deliver consistent quality across every engagement.',
  },
  {
    icon: Workflow,
    title: 'Process',
    description:
      'Structured and documented workflows that reduce variability, accelerate onboarding, and create the reliability that healthcare organizations need from their operational partners.',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description:
      'Technology-enabled workflows that reduce manual effort, improve data visibility, and create the operational scalability that supports organizational growth and adaptability.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description:
      'Quality-focused operations with built-in review checkpoints, performance tracking, and continuous improvement cycles that maintain standards over time.',
  },
];

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const valueItems: ValueItem[] = [
  {
    icon: TrendingUp,
    title: 'Operational Performance',
    description:
      'Structured workflows and disciplined follow-up that help organizations improve key operational metrics across the revenue cycle and administrative functions.',
  },
  {
    icon: ShieldCheck,
    title: 'Process Reliability',
    description:
      'Documented procedures and quality checkpoints that reduce variability and create consistent, repeatable outcomes across teams and departments.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insight',
    description:
      'Reporting and analytics that provide visibility into operational performance, enabling informed decisions and proactive issue identification.',
  },
  {
    icon: Layers,
    title: 'Scalable Operations',
    description:
      'Flexible support models that scale with organizational needs, providing capacity during growth periods and volume fluctuations.',
  },
  {
    icon: HandshakeIcon,
    title: 'Collaborative Partnership',
    description:
      'Teams that integrate with existing staff and systems, working alongside internal departments rather than creating parallel structures.',
  },
  {
    icon: Cpu,
    title: 'Technology Enablement',
    description:
      'Practical application of technology to reduce manual effort, improve data quality, and create the visibility needed for effective operations management.',
  },
];

export const trustStripItems = [
  { icon: ShieldCheck, title: 'Healthcare Expertise', description: 'Specialized teams focused on healthcare operations' },
  { icon: Cpu, title: 'Technology Enabled', description: 'Systems and tools that reduce manual effort' },
  { icon: Workflow, title: 'Process Driven', description: 'Documented workflows with quality checkpoints' },
  { icon: TrendingUp, title: 'Quality Focused', description: 'Continuous improvement and performance tracking' },
];

export const careerDepartments = [
  { title: 'Revenue Cycle Operations', description: 'Billing, claims, AR follow-up, and denial management teams supporting healthcare organizations across the revenue cycle.' },
  { title: 'Patient Access & Eligibility', description: 'Front-end operations including registration, eligibility verification, and prior authorization support.' },
  { title: 'Healthcare Administration', description: 'Back-office functions including documentation, reporting, compliance support, and operational coordination.' },
  { title: 'Process & Quality', description: 'Workflow analysis, process standardization, quality assurance, and continuous improvement initiatives.' },
  { title: 'Technology & Analytics', description: 'Reporting development, data integration, system configuration, and operational analytics support.' },
  { title: 'Client Operations', description: 'Engagement management, operational coordination, and relationship support for healthcare organization partners.' },
];
