export const projectsData = [
  {
    id: 'trishield-multilayer-authenticated-locker',
    title: 'TriShield Multilayer Authenticated Locker',
    year: 2026,
    category: 'IoT & Embedded Systems',
    theme: 'Internet of Things & Embedded Computing',
    summary:
      'An advanced IoT security prototype designed to improve traditional locker security through a four-step authentication process involving a Master PIN, SMS-based OTP, facial recognition, and fingerprint authentication. The system integrates ESP32 and Arduino hardware with Python, OpenCV, and Firebase for secure credential storage and real-time access logging. It also includes a duress fingerprint mechanism that can silently trigger an emergency alert during forced access attempts.',
    description: 'The "TriShield Multilayer Authenticated Locker" is an advanced IoT security prototype designed to overcome the vulnerabilities of traditional locker systems by utilizing multiple layers of protection. To grant access, the system enforces a rigorous four-step verification process that sequentially requires a Master PIN, an SMS-based OTP, facial recognition, and fingerprint authentication. Its hardware infrastructure, powered by an ESP32 and Arduino Uno, integrates seamlessly with software tools like Python, OpenCV, and Firebase to enable secure SHA-256 credential storage and real-time access logging. A standout safety innovation in this project is the inclusion of a specialized "duress fingerprint" mechanism. If a user is coerced into opening the locker under threat, scanning this specific fingerprint silently triggers an emergency alert while keeping the primary vault safely locked.'
    ,team: [
      'P Sai Lekhya',
      'Parinitha M',
      'Parinitha B S',
      'Nikitha Dayanand',
    ],
    screenshots: [
        {
            src: '/project-images/TriShield-Multilayer-Authenticated-Locker-1.png',
            alt: 'TriShield Multilayer Authenticated Locker project screenshot 1',
        },
        {
            src: '/project-images/TriShield-Multilayer-Authenticated-Locker-2.png',
            alt: 'TriShield Multilayer Authenticated Locker project screenshot 2',
        }
    ],
    mentor: 'Neethu S',
    resources: [
        {
            label: 'Report',
            url: '/project-documents/TriShield-Multilayer-Authenticated-Locker-Report.pdf',
        },
        {
            label: 'Poster',
            url: '/project-documents/TriShield-Multilayer-Authenticated-Locker-Poster.pdf',
        }
    ],
    image: null,
  },

  {
    id: 'wind-induced-pressure-analysis',
    title:
      'Wind-Induced Pressure Analysis and Structural Performance Evaluation of a Multi-storey Building',
    year: 2026,
    category: 'Civil Engineering',
    theme: 'Structural and Wind Engineering',
    summary:
      'This project evaluates the wind-induced pressure and structural performance of a G+9 residential building. Using AutoCAD, STAAD.Pro, and ANSYS Fluent, the team compared conventional IS 875 wind-load calculations with Computational Fluid Dynamics simulations to identify realistic pressure and suction zones caused by wind flow around the building.',
    description: 'The project focuses on evaluating the wind-induced pressure and structural performance of a G+9 residential building. It addresses the limitations of standard IS 875 wind load calculations, which rely on generalized coefficients and often neglect actual building geometry or corner vortices. To provide a more accurate assessment, the team utilized AutoCAD for drafting, STAAD.Pro for structural analysis under Zone 4 conditions, and ANSYS Fluent to simulate real-world wind flow at 47 m/s. The resulting Computational Fluid Dynamics (CFD) analysis revealed significant differences from the IS 875 values, accurately pinpointing high-pressure zones on the windward face and suction on the leeward face. Ultimately, the study concludes that integrating CFD with traditional structural analysis provides a much more realistic and reliable method for designing safe multi-storey buildings.'
    ,team: [
      'Madhu Nandan M',
      'Mohammad Yaseen D G',
      'Tharun N',
      'Suphian J',
    ],
    screenshots: [
        {
            src: '/project-images/Wind-Induced-Pressure-Analysis-1.png',
            alt: 'Wind-Induced Pressure Analysis and Structural Performance Evaluation of a Multi-storey Building project screenshot 1',
        },
        {
            src: '/project-images/Wind-Induced-Pressure-Analysis-2.png',
            alt: 'Wind-Induced Pressure Analysis and Structural Performance Evaluation of a Multi-storey Building project screenshot 2',
        }
    ],
    mentor: null,
    resources: [
        {
            label: 'Report',
            url: '/project-documents/Wind-Induced-Pressure-Analysis-Report.pdf',
        },
        {
            label: 'Poster',
            url: '/project-documents/Wind-Induced-Pressure-Analysis-Poster.pdf',
        }
    ],
    image: null,
  },

  {
    id: 'multi-stage-exhaust-gas-purification',
    title: 'Multi-Stage Exhaust Gas Purification System for Automobiles',
    year: 2025,
    category: 'Sustainability',
    theme: 'Interdisciplinary Engineering',
    summary:
      'A compact and modular multi-stage exhaust purification system designed to reduce harmful vehicular emissions. The system combines an electrostatic precipitator for particulate capture with a catalyst-coated ceramic honeycomb filter that helps convert harmful exhaust gases into less toxic byproducts.',
    description: 'The project details the development of a compact, modular, multi-stage exhaust purification system designed to significantly reduce toxic vehicular emissions in urban environments. It integrates an electrostatic precipitator (ESP) to capture fine particulate matter and a catalyst-coated ceramic honeycomb filter to chemically convert harmful gases into less toxic byproducts. The system utilizes a high-voltage power supply to maintain a stable corona discharge for the ESP, alongside copper and titanium dioxide catalysts deposited on the honeycomb substrate. Laboratory testing demonstrated that the prototype successfully removed over 90% of particulate matter and achieved substantial reductions in harmful gases like carbon monoxide and nitrogen oxides. Ultimately, this thermally robust and low-back-pressure design offers a scalable, sustainable solution to meet stringent emission standards without compromising engine performance.'
    ,team: [
      'Tharun N',
      'Adithya Mallanagouda Yargal',
      'Devisri Harshini Baramal',
      'Vignesh Hariharan',
      'Varsha V',
    ],
    screenshots: [
        {
            src: '/project-images/Multi-Stage-Exhaust-Gas-Purification-1.png',
            alt: 'Multi-Stage Exhaust Gas Purification System for Automobiles project screenshot 1',
        },
        {
            src: '/project-images/Multi-Stage-Exhaust-Gas-Purification-2.png',
            alt: 'Multi-Stage Exhaust Gas Purification System for Automobiles project screenshot 2',
        },
        {
            src: '/project-images/Multi-Stage-Exhaust-Gas-Purification-3.png',
            alt: 'Multi-Stage Exhaust Gas Purification System for Automobiles project screenshot 3',
        }
    ],
    mentor: null,
    resources: [
        {
            label: 'IEEE-Paper',
            url: '/project-documents/Multi-Stage-Exhaust-Gas-Purification-IEEE-Paper.pdf',
        },
        {
            label: 'Poster',
            url: '/project-documents/Multi-Stage-Exhaust-Gas-Purification-Poster.pptx',
        }
    ],
    image: null,
  },

  {
    id: 'fpga-smith-waterman-score-computation',
    title: 'FPGA-Based Smith–Waterman Score Computation with Python-Based Traceback',
    year: null,
    category: 'Hardware Acceleration',
    theme: 'FPGA and Bioinformatics',
    summary:
      'A hybrid hardware-software solution for accelerating DNA sequence alignment using the Smith–Waterman algorithm. The computationally intensive scoring process is implemented on an FPGA using a custom Verilog-based systolic array, while a Python program performs the traceback process to generate the locally aligned DNA sequences.',
    description: 'This project presents a hybrid hardware-software approach to accelerate DNA sequence alignment by implementing the computationally intensive Smith–Waterman (SW) algorithm on an FPGA. To overcome the slow runtime of the algorithm\'s dynamic-programming structure, the team developed a custom systolic array architecture composed of Processing Elements (PEs) using Verilog to compute alignment scores in parallel. The design was successfully deployed and tested on a Pynq Z2 FPGA board utilizing Vivado ML Edition and Virtual I/O (VIO) IP for real-time signal control and hardware validation. Once the hardware computes the maximum alignment score and its exact matrix position, a custom Python script uses these outputs to perform the reverse traceback step, ultimately generating the locally aligned DNA segments. Testing across various sequence matching scenarios demonstrated that this hardware-accelerated solution efficiently and flexibly handles the heavy computational demands of modern genomic data processing.'
    ,team: [
      'Shreekara H',
      'Yashwanth S',
      'Y Sanjana',
      'Pranati Rao',
      'Vartika Mrigwani',
    ],
    screenshots: [],
    mentor: 'Srividya P',
    resources: [
        {
            label: 'PPT',
            url: '/project-documents/FPGA-Smith-Waterman-Score-PPT.pptx',
        }
    ],
    image: null,
  },

  {
    id: 'fpga-dna-disease-detection',
    title:
      'FPGA-Based DNA Disease Detection and Genomic Analysis Platform Using Hardware Accelerated Sequence Alignment',
    year: null,
    category: 'Healthcare Technology',
    theme: 'FPGA and Genomic Analysis',
    summary:
      'A hardware-software co-design platform that uses a Zynq-7000 FPGA to accelerate the Smith–Waterman sequence alignment algorithm for DNA disease detection. The platform also performs genomic feature extraction, including GC-content analysis, sequence entropy calculation, and anomaly detection, before generating ranked disease matches and automated reports.',
    description: 'This project presents a hardware-software co-design platform utilizing a Zynq-7000 FPGA to accelerate the computationally intensive Smith-Waterman sequence alignment algorithm for rapid DNA disease detection. By integrating this hardware accelerator with a Python-based PYNQ framework, the system efficiently compares input DNA sequences against known disease-associated genetic patterns. Beyond simple alignment, the platform performs comprehensive genomic feature extraction, including GC-content analysis, sequence entropy calculation, and Z-score-based anomaly detection, to deeply evaluate sequence complexity. The system subsequently classifies and ranks potential disease matches, providing users with an intuitive interpretation of the strongest genomic correlations. Ultimately, the platform enhances the accessibility of genomic data by compiling these findings into automated PDF reports featuring interactive visualizations like heatmaps and nucleotide distribution charts.'
    ,team: [
      'Dakshraj Shetty',
      'M Vaibhav',
      'Anirudh Shashidhar Tantry',
      'Barath Ganesh SBP',
    ],
    screenshots: [],
    mentor: 'Dr. K B Ramesh',
    resources: [
        {
            label: 'IEEE-Paper',
            url: '/project-documents/FPGA-DNA-Disease-Detection-IEEE-Paper.docx',
        }
    ],
    image: null,
  },

  {
    id: 'beidou-non-binary-ldpc',
    title: 'BeiDou GF(64) Non-Binary LDPC Communication System',
    year: 2026,
    category: 'Communication Systems',
    theme: 'MATLAB',
    summary:
      'A complete MATLAB implementation of a BeiDou B-CNAV2 compliant Non-Binary LDPC communication system over GF(64). The project implements the complete communication chain, including navigation message generation, LDPC encoding, AWGN transmission, and iterative decoding using the Extended Min-Sum algorithm.',
    description: 'A complete MATLAB implementation of a BeiDou B-CNAV2 compliant Non-Binary LDPC communication system over GF(64). The project implements the entire digital communication chain, from navigation message generation and LDPC encoding to AWGN transmission and iterative decoding using the Extended Min-Sum (EMS) algorithm. The implementation closely follows the BeiDou B-CNAV2 Interface Control Document (ICD) while emphasizing algorithmic clarity and educational value through explicit Galois Field arithmetic, parity-check matrix operations, and iterative belief propagation'
    ,team: ['Yashwanth S'],
    screenshots: [],
    mentor: null,
    resources: [
        {
            label: 'GitHub Repo',
            url: 'https://github.com/yashuhereiam/Non-Binary-LDPC-implementation-on-MATLAB',
        }
    ],
    image: null,
  },

  {
    id: 'autonomous-static-crane-management',
    title: 'Autonomous Static Crane Management - Control Unit',
    year: 2026,
    category: 'Automation',
    theme: 'Autonomous Control Systems',
    summary:
      'A control system designed to reduce the need for crane operators working at risky heights. The system uses triangulation to manage hook coordinates and supports autonomous crane management through real-time feedback.',
    description: 'Eliminates need of operators working at risky heights at cabin, rather uses Triangulation to manage hook coordinates & further allows, autonomous management through real-time feedback.'
    ,team: ['Kavin C Krishnan'],
    screenshots: [
        {
            src: '/project-images/Autonomous-Static-Crane-Management-1.jpg',
            alt: 'Autonomous Static Crane Management - Control Unit project screenshot 1',
        },
        {
            src: '/project-images/Autonomous-Static-Crane-Management-2.jpg',
            alt: 'Autonomous Static Crane Management - Control Unit project screenshot 2',
        }
    ],
    mentor: null,
    resources: [],
    image: null,
  },

  {
    id: 'self-reconfigurable-axle-integrity-network',
    title:
      'Self-Reconfigurable Distributed Network for Axle Integrity Analysis in Rolling Stock',
    year: 2026,
    category: 'Railway Technology',
    theme: 'Distributed Monitoring Systems',
    summary:
      'A distributed system for analysing railway axle integrity using temperature as a key monitoring parameter. The project also includes a train mapping algorithm that automates the identification of train layouts.',
    description: '●	Allows for Axle Integrity Analysis through parameter of temperature, successful development of train mapping algorithm, which automates the process of train layout identification.'
    ,team: ['Kavin C Krishnan'],
    screenshots: [
        {
            src: '/project-images/Self-Reconfigurable-Network-Axle-Integrity-1.jpg',
            alt: 'Self-Reconfigurable Distributed Network for Axle Integrity Analysis in Rolling Stock project screenshot 1',
        },
        {
            src: '/project-images/Self-Reconfigurable-Network-Axle-Integrity-2.jpg',
            alt: 'Self-Reconfigurable Distributed Network for Axle Integrity Analysis in Rolling Stock project screenshot 2',
        },
        {
            src: '/project-images/Self-Reconfigurable-Network-Axle-Integrity-3.jpg',
            alt: 'Self-Reconfigurable Distributed Network for Axle Integrity Analysis in Rolling Stock project screenshot 3',
        }
    ],
    mentor: null,
    resources: [],
    image: null,
  },

  {
    id: 'detection-of-heavy-metal-ions',
    title: 'Detection of Heavy Metal Ions',
    year: 2026,
    category: 'Environmental Technology',
    theme: 'Chemical Sensing',
    summary:
      'A portable paper-based colorimetric sensor designed to detect and estimate toxic Ni²⁺ and Cr⁶⁺ ions in water. The system uses chemical indicators, controlled lighting, and Python-based RGB analysis to translate colour changes into digital concentration estimates.',
    description: 'This project introduces a portable, paper-based colorimetric sensor designed to detect and estimate toxic Ni²⁺ and Cr⁶⁺ ions in water. To overcome the high costs and bulkiness of traditional spectroscopy, it employs a capillary flow system using Axiva paper combined with chemical indicators like DPC and DMG. The system captures the resulting chemical color changes under controlled lighting and utilizes a Python-based RGB analysis to estimate ion concentrations through calibration curves. Its key innovation lies in translating a visual chemical response into a digital measurement without requiring expensive laboratory equipment. Ultimately, the sensor successfully quantified Cr⁶⁺ with a consistent violet-to-red response, while Ni²⁺ detection achieved reliable visual identification despite quantitative limitations.'
    ,team: [
      'Apoorva Hemmige Arun',
      'A S S S Koundinya',
      'Naluri Naga Venkata Sai Krishna Mohan',
      'Neha L',
    ],
    screenshots: [
        {
            src: '/project-images/Detection-Heavy-Metal-Ions-1.png',
            alt: 'Detection of Heavy Metal Ions project screenshot 1',
        },
        {
            src: '/project-images/Detection-Heavy-Metal-Ions-2.png',
            alt: 'Detection of Heavy Metal Ions project screenshot 2',
        }
    ],
    mentor: null,
    resources: [
        {
            label: 'Report',
            url: '/project-documents/Detection-Heavy-Metal-Ions-Report.docx',
        }
    ],
    image: null,
  },

  {
    id: 'rewire-drug-repurposing',
    title:
      'REWIRE: Drug Repurposing using Protein Network and Graph Attention Networks',
    year: 2026,
    category: 'Healthcare AI',
    theme: 'Artificial Intelligence',
    summary:
      'A computational drug-repurposing framework that represents diseases and drugs as dynamic perturbations within a human Protein-Protein Interaction network. The system uses network-based relationships to identify potential new therapeutic applications for existing drugs.',
    description: 'REWIRE is a computational drug-repurposing framework that represents diseases and drugs as dynamic perturbations within a human Protein-Protein Interaction (PPI) network. It addresses the limitations of traditional, slow drug discovery by shifting from a molecule-centric perspective to a network-rewiring approach. The system simulates topological changes to generate Rewiring Signature Vectors and employs a Graph Attention Network (GAT) to learn informative drug representations. Candidates are then ranked based on the topology-driven similarity between drug and disease signatures, moving beyond simple chemical similarity. The framework successfully generated signatures for 141 drugs and diseases, yielding clinically relevant predictions such as repurposing Nilotinib for Parkinson’s disease.'
    ,team: [
      'Parinitha M',
      'A S S S Koundinya',
      'Naga Venkata Akhilesh Chandaluri',
      'Jansi Hegde',
    ],
    screenshots: [
        {
            src: '/project-images/REWIRE-Drug-Repurposing-1.png',
            alt: 'REWIRE: Drug Repurposing project screenshot 1',
        }
    ],
    mentor: 'Dr. Praveena T',
    resources: [
        {
            label: 'Report',
            url: '/project-documents/REWIRE-Drug-Repurposing-Report.docx',
        }
    ],
    image: null,
  },

  {
    id: 'logiroute-last-mile-logistics',
    title: 'LogiRoute: An Algorithmic Pipeline for Last-Mile Logistics',
    year: 2026,
    category: 'Algorithms & Computing',
    theme: 'Design and Analysis of Algorithms (DAA) EL',
    summary:
      'A modular, event-driven simulation framework designed to optimize last-mile logistics. The system combines dynamic programming, topological sorting, Floyd-Warshall shortest-path computation, and Branch and Bound optimization to improve package handling and route planning while responding to live traffic disruptions.',
    description: 'The "LogiRoute" project is a modular, event-driven simulation framework designed to optimize the computationally complex last-mile logistics phase of modern supply chains. It tackles multi-dimensional resource bottlenecks by utilizing a 2D 0/1 Knapsack algorithm with Dynamic Programming to maximize vehicular payload utility across both weight and volume constraints simultaneously. To ensure physical and operational package sorting rules are strictly followed, the pipeline employs Topological Sorting via Depth First Search (DFS) on a Directed Acyclic Graph (DAG). For optimal routing, LogiRoute leverages the Floyd-Warshall algorithm to pre-compute an all-pairs shortest path matrix, which then feeds into an exact Branch and Bound solver to efficiently navigate the Traveling Salesman Problem (TSP). Ultimately, this multi-stage algorithmic approach achieves a 20% to 25% reduction in total distance traversed compared to greedy heuristic baselines, while featuring an asynchronous feedback layer to handle live traffic disruptions seamlessly.'
    ,team: ['Mansi Rai', 'K Laxmi Sravanthi'],
    screenshots: [
        {
            src: '/project-images/LogiRoute-1.png',
            alt: 'LogiRoute project screenshot 1',
        },
        {
            src: '/project-images/LogiRoute-2.png',
            alt: 'LogiRoute project screenshot 2',
        }
    ],
    mentor: 'Dr. Ganashree K N',
    resources: [
        {
            label: 'Report',
            url: '/project-documents/LogiRoute-Report.pdf',
        }
    ],
    image: null,
  },

  {
    id: 'proactiveheal-predictive-self-healing',
    title:
      'ProactiveHeal: A Verified Autonomous Framework for Predictive Self-Healing in Cloud Systems',
    year: 2026,
    category: 'Cloud Computing & AI',
    theme: 'AIOps',
    summary:
      'A governance-aware AIOps framework for predictive self-healing in cloud systems. It combines anomaly detection, failure forecasting, historical incident retrieval, and AI-generated remediation recommendations with the Veritas governance engine, which validates proposed actions before execution.',
    description: 'ProactiveHeal v2 is a governance-aware AIOps framework designed to address the safety risks associated with autonomous self-healing in complex cloud computing systems. The architecture integrates several advanced technologies, utilizing Isolation Forest for anomaly detection, Prophet for predictive failure forecasting, ChromaDB for historical incident retrieval, and Gemini AI to generate contextual remediation recommendations. The project\'s primary innovation is the Veritas governance engine, a mandatory validation layer that evaluates all AI-generated actions against confidence thresholds, blast-radius estimates, and protected-resource policies prior to execution. During experimental validation using 500 telemetry samples with synthetic fault injections, the framework achieved a 92% anomaly detection rate, a 6% false positive rate, and an 89% successful recovery rate. Most notably, the Veritas engine achieved a 100% safety enforcement rate by successfully intercepting and blocking all 24 unsafe remediation attempts, demonstrating that governance-based validation effectively prevents catastrophic autonomous infrastructure modifications.'
    ,team: [
      'Mansi Rai',
      'Yarragunta Chandrakala',
      'Ziyad Hussain',
      'Rajan Kumar Singh',
    ],
    screenshots: [
        {
            src: '/project-images/ProactiveHeal-1.png',
            alt: 'ProactiveHeal project screenshot 1',
        },
        {
            src: '/project-images/ProactiveHeal-2.png',
            alt: 'ProactiveHeal project screenshot 2',
        },
        {
            src: '/project-images/ProactiveHeal-3.png',
            alt: 'ProactiveHeal project screenshot 3',
        }
    ],
    mentor: 'Dr. Saraswati Govind Datar',
    resources: [
        {
            label: 'IEEE-Paper',
            url: '/project-documents/ProactiveHeal-IEEE-Paper.pdf',
        },
        {
            label: 'Report',
            url: '/project-documents/ProactiveHeal-Report.pdf',
        }
    ],
    image: null,
  },

  {
    id: 'mist-assisted-catalytic-purifier',
    title: 'Mist-Assisted Catalytic Purifier',
    year: 2026,
    category: 'Environmental Technology',
    theme: 'Air Pollution Control',
    summary:
      'A low-cost and sustainable air-purification prototype designed as an energy-efficient alternative to traditional HEPA filtration. The multi-stage system combines mist-assisted particulate capture with a UV-activated CuO-TiO₂ photocatalytic honeycomb filter for reducing particulate and gaseous pollutants.',
    description: 'The "Mist-Assisted Catalytic Purifier" is a low-cost, sustainable prototype designed to combat urban air pollution by offering an energy-efficient alternative to traditional HEPA filters. Built for under ₹3500, the system operates at a low voltage across four integrated compartments that sequentially process polluted air. It begins by drawing in air through a mist-assisted inlet and swirling it within a vortex mixing chamber, causing fine particulate matter to collide and agglomerate with water droplets. These polluted droplets are then captured by a mesh coalescer, while the remaining air passes through a UV-activated CuO-TiO2 photocatalytic honeycomb filter to safely degrade gaseous pollutants and microbes. Experimental testing demonstrated the prototype\'s high efficiency, successfully reducing PM2.5 levels by up to 97.5% and cutting CO2 concentrations by approximately 90%.'
    ,team: [
      'Krish Pradeep Kerkar',
      'Tharun N',
      'Mohammed Yaseen D G',
      'Tameem Siddiqui Faisal',
    ],
    screenshots: [
        {
            src: '/project-images/Mist-Assisted-Catalytic-Purifier-1.png',
            alt: 'Mist-Assisted Catalytic Purifier project screenshot 1',
        },
    ],
    mentor: 'Dr. Vidya C',
    resources: [
        {
            label: 'Report',
            url: '/project-documents/Mist-Assisted-Catalytic-Purifier-Report.pdf',
        },
        {
            label: 'Poster',
            url: '/project-documents/Mist-Assisted-Catalytic-Purifier-Poster.pdf',
        },
        {
            label: 'Demo Video',
            url: 'https://youtu.be/ufRNj1vPBS4?si=2ZA3uyw2_EnwHyVj',
        }
    ],
    image: null,
  },

  {
    id: 'airflow-analysis-aircraft-engine-compressor',
    title:
      'Airflow Analysis of an Aircraft Engine Axial Compressor with Smooth and Axial Groove Casing Using CFD',
    year: null,
    category: 'Aerospace Engineering',
    theme: 'Main EL',
    summary:
      'A Computational Fluid Dynamics study of the NASA Rotor-37 transonic axial compressor. The project compares smooth and axial-groove casing configurations to study flow separation, tip leakage effects, compressor stability, and improvements in stall margin.',
    description: 'This study presents a computational fluid dynamics (CFD) analysis of the NASA Rotor-37 transonic axial compressor to evaluate its performance and stability limits. The researchers first validated a baseline model with a smooth casing using Reynolds-Averaged Navier-Stokes equations and the SST k-ω turbulence model, achieving good agreement with published experimental data. To enhance compressor stability, axial grooves were subsequently introduced on the casing as a passive flow control technique. This grooved configuration successfully delayed flow separation and weakened tip leakage vortex interactions, allowing the system to maintain stable operation at lower mass flow rates. Ultimately, the axial groove casing treatment yielded an approximate 9.2% improvement in the stall margin, proving to be an effective method for extending the stable operating range of transonic compressors without a significant performance penalty.'
    ,team: [
      'Avishka P Sharma',
      'Chinmayi Devi H N',
      'Srikanth S R',
      'Sharvani D Bhat',
      'Snehanshu Ganguly',
    ],
    screenshots: [
        {
            src: '/project-images/Airflow-Analysis-CFD-1.png',
            alt: 'Airflow Analysis of an Aircraft Engine Axial Compressor project screenshot 1',
        },
        {
            src: '/project-images/Airflow-Analysis-CFD-2.png',
            alt: 'Airflow Analysis of an Aircraft Engine Axial Compressor project screenshot 2',
        },
        {
            src: '/project-images/Airflow-Analysis-CFD-3.png',
            alt: 'Airflow Analysis of an Aircraft Engine Axial Compressor project screenshot 3',
        }
    ],
    mentor: 'Mr. Mukesh M',
    resources: [
        {
            label: 'IEEE Paper',
            url: '/project-documents/Airflow-Analysis-CFD-IEEE-Paper.pdf',
        }
    ],
    image: null,
  },

  {
    id: 'railvolt-distributed-traction-system',
    title: 'RailVolt: Distributed Traction System for Railway',
    year: null,
    category: 'Railway Technology',
    theme: 'Distributed Traction Systems',
    summary:
      'A modular prototype for retrofitting railway coaches with a distributed traction system. The design distributes tractive load across motorized coaches and uses an ESP32 master controller with synchronized Arduino Nano controllers to coordinate motor operation and improve acceleration and braking performance.',
    description: 'The "Rail Volt" project proposes a modular and scalable prototype to retrofit India\'s existing LHB railway coaches with a distributed traction system, addressing the mechanical and energy inefficiencies of traditional single-locomotive setups. By motorizing every third coach and regulating power through simulated pantograph-equipped feeder coaches, the design effectively distributes the tractive load across the entire train. The system utilizes an ESP32 master controller that communicates via UART to synchronize Arduino Nano boards embedded in the motorized coaches, which then drive the motors using PWM signals. During physical testing, the scaled prototype achieved stable power delivery and real-time motor synchronization with sub-200 millisecond response times. Ultimately, this distributed propulsion approach demonstrated significantly smoother acceleration and braking profiles, proving to be a cost-effective and infrastructure-compatible modernization pathway for Indian Railways.'
    ,team: [
      'Barath Ganesh S.P',
      'Monish Gangadharan',
      'Kavin Krishnan C',
      'Roshan Kumar',
      'Mohammad Asif',
    ],
    screenshots: [

    ],
    mentor: 'Girish Kumar',
    resources: [
        {
            label: 'Report',
            url: '/project-documents/RailVolt-Report.pdf',
        },
    ],
    image: null,
  },

  {
    id: 'audio-visual-active-speaker-tracking',
    title:
      'Audio-Visual Active Speaker Tracking for Automated Video Reframing',
    year: 2026,
    category: 'Artificial Intelligence',
    theme: 'Audio-Visual Processing / Computer Vision (Main EL)',
    summary:
      'A system that automatically converts horizontal videos into stable 9:16 vertical formats by dynamically tracking the active speaker. It combines audio diarization, sparse face detection, Kalman filtering, and smoothing techniques to reduce computational cost while maintaining stable speaker tracking.',
    description: 'This system automates the conversion of horizontal videos into stable 9:16 vertical formats by dynamically tracking the active speaker. To solve the computational expense of per-frame facial tracking, it extracts and diarizes audio to determine speaking intervals and only runs face detection on a 20% sample of frames. The pipeline associates speakers with detected faces and utilizes a constant-velocity Kalman filter alongside Exponential Moving Average (EMA) smoothing to predict and stabilize positions across skipped frames. This efficiency-oriented fusion of sparse visual sampling and temporal estimation ensures professional-looking motion without jitter. As a result, the optimized system achieved a 98–100% speaker-detection accuracy while reducing processing time by up to 40% and trajectory jitter by roughly 10x.'
    ,team: [
      'Parinitha M',
      'A S S S Koundinya',
      'Naga Venkata Akhilesh Chandaluri',
      'Nikitha Dayanand',
      'Sujal Chavan',
    ],
    screenshots: [
        {
            src: '/project-images/Speaker-Centric-Video-Cropping-System-1.png',
            alt: 'Speaker-Centric Video Cropping System project screenshot 1',
        },
    ],
    mentor: 'Dr. Hemavathy R, Prof. Deepika Dash',
    resources: [
        {
            label: 'Report',
            url: '/project-documents/Speaker-Centric-Video-Cropping-System-Report.docx',
        }
    ],
    image: null,
  },

  {
    id: 'anoxia-spatiotemporal-modeling',
    title:
      'ANOXIA: Spatiotemporal Modeling of Hypoxia and Lagrangian Drift Convergence',
    year: 2026,
    category: 'Artificial Intelligence',
    theme: 'Hackathon',
    summary:
      'A predictive marine-intelligence system designed to forecast biodiversity traps by tracking the convergence of hypoxic zones and drifting ghost gear. The system combines LSTM-based oxygen forecasting with Lagrangian drift modelling to generate spatial eco-risk alerts.',
    description: 'ANOXIA is a predictive marine-intelligence system designed to forecast "Biodiversity Traps" by tracking the convergence of hypoxic zones and drifting ghost gear. It tackles the lack of early-warning capabilities by employing an LSTM-based Dead Zone Engine to forecast oxygen crashes up to 30 days in advance. Simultaneously, a Lagrangian Drift Engine models the trajectory of lost fishing gear using ocean currents and AIS/VMS vessel anomaly data. The primary innovation is the intersection of these two models through an Eco-Risk Overlay and a Compound Mortality Score (CMS) to generate actionable spatial alerts at a 1 km² resolution. Evaluation of the system yielded an impressive F1 score of 0.9333 and identified changes in chlorophyll as the most critical precursor feature for prediction.'
    ,team: [
      'A S S S Koundinya',
      'Parinitha M',
      'Naga Venkata Akhilesh',
      'Priyanka S',
    ],
    screenshots: [
        {
            src: '/project-images/ANOXIA-1.png',
            alt: 'ANOXIA project screenshot 1',
        },
        {
            src: '/project-images/ANOXIA-2.png',
            alt: 'ANOXIA project screenshot 2',
        }
    ],
    mentor: null,
    resources: [
        {
            label: 'Report',
            url: '/project-documents/ANOXIA-Report.docx',
        },
    ],
    image: null,
  },

  {
    id: 'cloudcartel-cloud-architecture',
    title: 'CloudCartel: Cloud Architecture Simulation & IaC Generation Platform',
    year: 2026,
    category: 'Cloud Computing',
    theme: 'Hackathon',
    summary:
      'A no-code cloud-native learning platform that allows users to design cloud architectures using a drag-and-drop interface and simulate scenarios such as traffic spikes, security breaches, and regional outages. The platform provides architecture-aware guidance to help users understand failures before real deployment.',
    description: 'CloudCartel is a no-code, cloud-native platform created to provide an experiential learning environment for students and junior developers to practice cloud architecture. It addresses the fear of costly cloud misconfigurations by offering a drag-and-drop canvas where users can build architectures and safely simulate realistic disasters. The platform’s engine translates the visual graph into a structured backend representation to run live simulations of traffic spikes, security breaches, and regional outages. During these simulations, integrated OpenAI models provide contextual, architecture-aware mentorship to explain failures and suggest cost-effective redesigns. By bridging the gap between passive theory and active practice, it allows users to deeply understand cascading failures and architecture behavior before progressing to actual cloud deployment workflows.'
    ,team: [
      'Parinitha M',
      'Aadhya R',
      'A S S S Koundinya',
      'Hamsini H',
    ],
    screenshots: [
        {
            src: '/project-images/CloudCartel-1.png',
            alt: 'CloudCartel project screenshot 1',
        }
    ],
    mentor: null,
    resources: [
        {
            label: 'Report',
            url: '/project-documents/CloudCartel-Report.docx',
        }
    ],
    image: null,
  },

  {
    id: 'twindrive-digital-replica',
    title: 'TwinDrive: A Digital Replica for Motor Insights and Analytics',
    year: null,
    category: 'Electric Vehicle Technology',
    theme: 'Electric Vehicle Technology',
    summary:
      'A digital twin system for Brushless DC motors that enables real-time monitoring and predictive maintenance without physical motor disassembly. Sensors connected to an ESP32 continuously collect motor parameters and compare real-world behaviour with a virtual model to identify anomalies.',
    description: 'The "TwinDrive" project presents a digital twin system for Brushless DC (BLDC) motors that enables real-time monitoring and predictive maintenance without requiring physical motor disassembly. By integrating sensors for temperature, vibration, current, and voltage with an ESP32 microcontroller, the system continuously acquires and transmits synchronized motor data to a cloud or edge platform. This live data is used to constantly update a virtual model of the motor, allowing the system to compare actual physical behavior against virtual predictions to detect anomalies like torque imbalance or thermal hotspots. The resulting insights and live parameters are visualized on a clear digital dashboard and an OLED display, offering operators a dependable and easily interpretable analytics layer. Ultimately, this setup improves the speed and accuracy of fault detection, significantly reducing the reliance on manual inspections and reactive troubleshooting to prevent industrial breakdowns.'
    ,team: [
      'M. Vaibhav',
      'Dakshraj Shetty',
      'Mehul Singhania',
      'Mohammad Asif',
    ],
    screenshots: [

    ],
    mentor: null,
    resources: [
        {
            label: 'Poster',
            url: '/project-documents/Twindrive-Motor-InsightsAndAnalysis-Poster.pptx',
        }
    ],
    image: null,
  },

  {
    id: 'lithium-nanoparticle-based-battery',
    title: 'Lithium Nanoparticle Based Battery',
    year: 2025,
    category: 'Energy Storage',
    theme: 'Advanced Materials (Interdisciplinary Main EL)',
    summary:
      'A project focused on improving conventional lithium-ion battery technology through the development of a lithium nanoparticle-based battery and asymmetric hybrid supercapacitor for advanced energy-storage applications.',
    description: 'The project aims to overcome the limitations of traditional lithium-ion batteries by developing a lithium nanoparticle-based battery and asymmetric hybrid supercapacitor. To achieve this, the team utilized a low-cost, highly porous solution combustion method to synthesize a solid-state electrolyte using precursors like lithium nitrate, aluminium nitrate, and silicic acid. The synthesized compounds then underwent calcination in a tubular furnace, a process that successfully increased the material\'s crystallinity and removed impurities. Subsequent X-Ray Diffraction (XRD) analysis revealed peaks matching LiAlSiO4 and LiAlSi2O6, though some minor impurities and phase differences were still present. Moving forward, the team plans to further heat the compound to improve its purity, conduct comprehensive electrochemical tests like cyclic voltammetry, and ultimately assemble a functional coin cell.'
    ,team: [
      'Abhinav Mallela',
      'Dakshraj Shetty',
      'M. Vaibhav',
      'Manoj Gupta D B',
    ],
    screenshots: [
        {
            src: '/project-images/Lithium-Nanoparticle-Battery-1.png',
            alt: 'Lithium Nanoparticle Based Battery project screenshot 1',
        }
    ],
    mentor: 'Dr. Sham Aan M P',
    resources: [
        {
            label: 'PPT',
            url: '/project-documents/Lithium-Nanoparticle-Battery-PPT.pptx',
        },
        {
            label: 'Report',
            url: '/project-documents/Lithium-Nanoparticle-Battery-Report.docx',
        },
        {
            label: 'IEEE Paper',
            url: '/project-documents/Lithium-Nanoparticle-Battery-IEEE-Paper.docx',
        },
    ],
    image: null,
  },

    {
    id: 'bioshield-ai-sentinel',
    title:
      'BioShield-AI Sentinel: A Convolutional Neural Network Approach for AI-Assisted Biosecurity Screening of Nucleic Acid Synthesis Orders',
    year: 2026,
    category: 'Artificial Intelligence & Biosecurity',
    theme: 'AI-Assisted Biosecurity',
    summary:
      'An AI-assisted biosecurity screening approach that uses a Convolutional Neural Network to analyse nucleic acid synthesis orders and help identify potentially concerning sequences. The system is designed to support safer screening workflows through automated analysis and risk-aware classification.',
    description: 'The "BioShield-AI Sentinel" project introduces a deep learning-based prototype designed to improve biosecurity screening for nucleic acid synthesis orders by identifying hazardous sequences that traditional static string-matching might miss. To achieve this, the system processes raw DNA by tokenizing it into overlapping 6-mer sequences and applying a one-dimensional convolutional neural network (1D-CNN) with adaptive max-pooling to detect dangerous local biological motifs. When trained and evaluated on the NIST Nucleic Acid Synthesis Screening Test Dataset, the model achieved a 61.0% accuracy on a held-out test set, though it demonstrated a higher proficiency in identifying benign sequences over hazardous ones. The trained model is integrated into a user-friendly Streamlit dashboard that allows DNA synthesis providers to submit sequences and immediately receive a binary risk verdict alongside confidence diagnostics and a detailed fragment analysis. Although its current false-negative rate prevents it from being used as a standalone tool, the prototype successfully demonstrates the feasibility of using AI as a complementary, low-latency screening layer to flag suspicious DNA orders for expert review.'
      ,team: [
        'Roshan George',
        'Mansi Rai',
        'Pedada Punarv'
    ],
    screenshots: [
    {
        src: '/project-images/BioShield-AI-Sentinel-1.png',
        alt: 'BioShield-AI Sentinel project screenshot 1',
    },
    {
        src: '/project-images/BioShield-AI-Sentinel-2.png',
        alt: 'BioShield-AI Sentinel project screenshot 2',
    },
    {
        src: '/project-images/BioShield-AI-Sentinel-3.png',
        alt: 'BioShield-AI Sentinel project screenshot 3',
    },
    ],
    mentor: 'Prof. Ajeet Kumar Srivastava',
    resources: [
        {
            label: 'IEEE-Paper',
            url: '/project-documents/BioShield-AI-Sentinel-IEEE-Paper.pdf',
        }
    ],
    image: null,
},

  /*{
    id: 'project-data-pending',
    title: 'Project Information Pending',
    year: null,
    category: 'Other',
    theme: null,
    summary:
      'This entry should be replaced with the remaining verified project information from the source document before final deployment.',
    team: [],
    mentor: null,
    resources: [],
    image: null,
  },*/

];