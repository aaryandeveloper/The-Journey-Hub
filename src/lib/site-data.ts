export type Condition = {
  slug: string;
  name: string;
  category: "neurological" | "orthopedic";
  summary: string;
  description: string;
};

export type Treatment = {
  slug: string;
  name: string;
  summary: string;
  description: string;
};

export const conditions: Condition[] = [
  {
    slug: "osteoarthritis",
    name: "Osteoarthritis",
    category: "neurological",
    summary: "Degenerative joint care that protects mobility and slows progression.",
    description:
      "A progressive condition affecting cartilage and joint structure. Our integrated protocol combines load-management, targeted exercise, and pharmacologic support to preserve function.",
  },
  {
    slug: "chronic-pain-management",
    name: "Chronic Pain Management",
    category: "neurological",
    summary: "Multimodal care for persistent pain that resists single-discipline treatment.",
    description:
      "Chronic pain rarely has one source. Our physiatrists coordinate diagnostics, interventional procedures, and rehabilitative training to restore function and reduce reliance on systemic medication.",
  },
  {
    slug: "neuropathic-pain",
    name: "Neuropathic Pain",
    category: "neurological",
    summary: "Specialized care for nerve-mediated pain syndromes.",
    description:
      "From peripheral neuropathy to post-surgical nerve injury, we use EMG-guided diagnostics and targeted interventions to identify and treat the source of nerve dysfunction.",
  },
  {
    slug: "traumatic-brain-injury",
    name: "Traumatic Brain Injury",
    category: "neurological",
    summary: "Coordinated recovery for cognitive, motor, and emotional function after TBI.",
    description:
      "Post-TBI rehabilitation requires sequencing — from acute stabilization to long-term cognitive and motor retraining. Our team aligns neurology, PT, OT, and speech therapy in a single plan.",
  },
  {
    slug: "stroke-recovery",
    name: "Stroke Recovery",
    category: "neurological",
    summary: "Neuroplasticity-driven protocols that maximize functional recovery.",
    description:
      "The first months after stroke offer the greatest opportunity for recovery. We use intensive, task-specific therapy paired with adaptive equipment to rebuild independence.",
  },
  {
    slug: "spinal-cord-injuries",
    name: "Spinal Cord Injuries",
    category: "neurological",
    summary: "Long-arc rehabilitation that protects what remains and rebuilds what's possible.",
    description:
      "Spinal cord rehabilitation extends well beyond the acute phase. Our program addresses mobility, autonomic function, and quality-of-life with equal rigor.",
  },
  {
    slug: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    category: "neurological",
    summary: "Functional preservation and symptom management across the MS continuum.",
    description:
      "Our MS care emphasizes maintaining strength, balance, and energy across relapses and remissions, with proactive support for spasticity and fatigue.",
  },
  {
    slug: "lower-back-pain",
    name: "Lower Back Pain",
    category: "orthopedic",
    summary: "Root-cause assessment for acute and chronic lumbar pain.",
    description:
      "We move past symptom suppression to understand the mechanical, neurological, or inflammatory driver — then build a recovery plan around it.",
  },
  {
    slug: "shoulder-injuries",
    name: "Shoulder Injuries",
    category: "orthopedic",
    summary: "Care for rotator cuff, labrum, and impingement conditions.",
    description:
      "Whether the goal is full athletic return or pain-free daily function, we tailor protocols to your shoulder's specific structural and movement profile.",
  },
  {
    slug: "knee-osteoarthritis",
    name: "Knee Osteoarthritis",
    category: "orthopedic",
    summary: "Joint preservation through injections, loading, and movement re-education.",
    description:
      "A combination of intra-articular injections, structured loading, and gait correction can dramatically delay or replace surgical intervention.",
  },
  {
    slug: "hip-pain",
    name: "Hip Pain",
    category: "orthopedic",
    summary: "Targeted treatment for impingement, bursitis, and degenerative hip conditions.",
    description:
      "Hip dysfunction often masquerades as back or knee pain. Our diagnostic approach finds the true source and treats it directly.",
  },
  {
    slug: "neck-pain-whiplash",
    name: "Neck Pain & Whiplash",
    category: "orthopedic",
    summary: "Cervical care from acute whiplash through chronic mechanical neck pain.",
    description:
      "Cervical injuries respond best to early, structured care. We combine manual therapy, targeted exercise, and selective interventions when indicated.",
  },
  {
    slug: "sports-injury",
    name: "Sports Injury",
    category: "orthopedic",
    summary: "Performance-oriented rehabilitation that returns athletes to full capacity.",
    description:
      "Our sports medicine protocols are built around return-to-play criteria, not arbitrary timelines — so you come back stronger and stay there.",
  },
];

export const treatments: Treatment[] = [
  {
    slug: "therapeutic-exercise",
    name: "Therapeutic Exercise",
    summary: "Tailored movement protocols that rebuild strength, mobility, and resilience.",
    description:
      "Every plan is calibrated to your stage of recovery, biomechanical profile, and personal goals — supervised by clinicians, not generic templates.",
  },
  {
    slug: "electromyography",
    name: "Electromyography (EMG)",
    summary: "Precise nerve and muscle diagnostics that find the source of dysfunction.",
    description:
      "EMG and nerve conduction studies give us clinical certainty about where and why a nerve or muscle is failing — the foundation of any effective treatment plan.",
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    summary: "Targeted relief for myofascial pain that won't respond to surface treatment.",
    description:
      "When palpable trigger points sustain a pain cycle, precise injections can interrupt it and unlock the rehabilitation work that follows.",
  },
  {
    slug: "physical-rehabilitation",
    name: "Physical Rehabilitation",
    summary: "Comprehensive recovery programs for post-surgical and post-injury patients.",
    description:
      "We coordinate the full arc of physical recovery — from early protection through return to performance — with one team and one plan.",
  },
  {
    slug: "pain-management",
    name: "Pain Management",
    summary: "Integrated care that addresses pain at every level — biological, functional, and behavioral.",
    description:
      "Sustainable pain management means reducing reliance on systemic medication while restoring the function pain has taken away.",
  },
  {
    slug: "joint-injections",
    name: "Joint Injections",
    summary: "Image-guided injections that relieve inflammation and enable movement.",
    description:
      "Whether corticosteroid, hyaluronic acid, or regenerative — joint injections are a precise tool used in the right hands at the right moment.",
  },
];

export const team = [
  {
    name: "Dr. Marisol Quintero, MD",
    role: "Director of Physical Medicine & Rehabilitation",
    bio: "Board-certified physiatrist with twenty years of experience in complex neurological and orthopedic recovery.",
  },
  {
    name: "Dr. Elias Reaves, DO",
    role: "Interventional Pain Specialist",
    bio: "Fellowship-trained in interventional pain procedures, with a focus on image-guided spine and joint injections.",
  },
  {
    name: "Dr. Hana Okafor, MD",
    role: "Neurorehabilitation Lead",
    bio: "Specializes in stroke, TBI, and spinal cord recovery, with a research interest in neuroplasticity-driven protocols.",
  },
  {
    name: "Priya Anand, DPT",
    role: "Lead Physical Therapist",
    bio: "Doctor of Physical Therapy specializing in post-surgical rehabilitation and return-to-sport progression.",
  },
];

export const learningArticles = [
  {
    slug: "understanding-chronic-pain",
    title: "Understanding Chronic Pain: Why It Persists",
    category: "Pain Science",
    excerpt: "A clinician's guide to the mechanisms that turn acute pain into a chronic condition — and what actually helps.",
    readTime: "8 min read",
  },
  {
    slug: "stroke-recovery-first-90-days",
    title: "The First 90 Days After Stroke",
    category: "Neurological",
    excerpt: "What the evidence says about the most important window in stroke recovery and how to make the most of it.",
    readTime: "10 min read",
  },
  {
    slug: "before-knee-surgery",
    title: "Before You Consider Knee Surgery",
    category: "Orthopedic",
    excerpt: "Why conservative care fails when it does — and what a comprehensive non-surgical plan really looks like.",
    readTime: "7 min read",
  },
  {
    slug: "emg-explained",
    title: "EMG, Explained Without the Jargon",
    category: "Diagnostics",
    excerpt: "What an electromyography test actually measures, what it feels like, and what your results mean.",
    readTime: "5 min read",
  },
];
