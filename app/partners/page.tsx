'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';

export default function PartnersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('partner');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const partners = [
    {
      name: 'SIMX',
      category: 'Medical Training Partner',
      description: 'First and most advanced medical VR training platform globally, developed by clinicians. Features the largest library of virtual patient encounters with 150+ simulations across 97 immersive environments, patented multiplayer technology for team training in nursing, EMS, and military medical education.',
      services: ['Medical VR Simulations', 'Patient Encounters', 'Nursing Training', 'EMS & Military Medical'],
      logo: '/assets/images/simxvr/logo.svg',
      website: 'https://www.simxvr.com'
    },
    {
      name: 'VRpatients',
      category: 'Medical Training Partner',
      description: 'No-code clinical simulation platform powered by PhysioLogicAI for multilingual AI patient conversations. Supports VR, Mixed Reality, and web-based simulations with 35+ ready-to-run scenarios. Customizable authoring tool enables educators to create patient cases with asynchronous 24/7 access.',
      services: ['Clinical Simulations', 'AI Patient Conversations', 'VR & Mixed Reality', 'Nursing Education'],
      logo: '/assets/images/vrpatients/logo.png',
      skipLogoBg: true,
      website: 'https://www.vrpatients.com'
    },
    {
      name: 'UbiSim',
      category: 'Medical Training Partner',
      description: 'Nursing VR simulation platform offering high-fidelity clinical scenarios for exam readiness and professional development with advanced patient simulation technology.',
      services: ['Nursing VR Simulations', 'Clinical Scenarios', 'Exam Preparation', 'Patient Simulation'],
      logo: '<svg width="100%" height="100%" viewBox="0 0 132 45" title="UbiSim VR Logo Link Back to Homepage" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4405_24188)"><title>UbiSim VR Logo Link Back to Homepage</title><path d="M129.346 23.8879C129.201 24.6874 129.438 25.1597 130.073 25.342C130.672 25.5243 131.328 25.4511 132 25.197L131.273 29.1602C130.673 29.4321 129.71 29.5592 128.383 29.5592C126.819 29.5592 125.655 29.1422 124.911 28.3427C124.167 27.5432 123.929 26.3238 124.219 24.7427L125.693 16.1993C125.766 15.5088 125.802 14.8543 125.838 14.2356C125.856 13.6364 125.637 13.1268 125.219 12.7083C124.784 12.2899 124.128 12.0897 123.219 12.0897C121.71 12.0897 120.201 12.671 118.711 13.8531C118.711 14.3611 118.638 15.0889 118.475 16.0528L116.166 29.196H111.166L113.439 16.1993C113.51 15.5088 113.548 14.8543 113.584 14.2356C113.619 13.6169 113.383 13.1268 112.965 12.6904C112.528 12.272 111.893 12.0717 111.001 12.0717C109.567 12.0717 108.111 12.6172 106.621 13.726L103.876 29.1766H98.8772L101.676 13.6887C101.821 12.8892 101.567 12.399 100.93 12.2331C100.312 12.0508 99.6752 12.124 99.0221 12.3796L99.7484 8.41644C100.33 8.14296 101.276 8.01594 102.583 8.01594C105.019 8.01594 106.401 8.87073 106.783 10.5983C108.873 8.87073 111.091 8.01594 113.4 8.01594C116.072 8.01594 117.726 9.07098 118.434 11.2154C120.725 9.12329 123.143 8.03387 125.67 8.01594C126.942 8.01594 127.997 8.27148 128.816 8.76164C129.635 9.2533 130.179 9.87198 130.488 10.67C130.762 11.4336 130.942 12.2884 130.998 13.2329C131.052 14.1773 130.98 15.1054 130.724 16.0513L129.342 23.8864L129.346 23.8879ZM96.661 0.291407L95.9153 4.52653H90.915L91.6608 0.291407H96.6595H96.661ZM94.4239 29.1407C93.8246 29.4127 92.8607 29.5412 91.5517 29.5412C89.9885 29.5412 88.8244 29.1407 88.0802 28.3412C87.336 27.5417 87.0984 26.3417 87.3883 24.7233L90.2426 8.36264L95.2413 8.34471L92.5335 23.8341C92.3885 24.6336 92.6246 25.1059 93.2418 25.2882C93.8605 25.4705 94.4777 25.3973 95.1517 25.1432L94.4239 29.1437V29.1407ZM76.3372 0.799502C79.3918 0.799502 81.7006 1.61843 83.2637 3.27123C84.8089 4.92553 85.5726 7.03412 85.5173 9.57908L80.7905 11.2334C80.8084 9.23387 80.3556 7.74247 79.3918 6.76065C78.4279 5.77883 77.0814 5.28867 75.3554 5.28867C73.8475 5.28867 72.5923 5.59651 71.5925 6.25255C70.6107 6.9071 70.0458 7.74247 69.865 8.79751C69.8112 9.23387 69.8291 9.59701 69.9008 9.96164C69.9741 10.3069 70.1923 10.6162 70.5195 10.8882C70.8468 11.1616 71.1741 11.3798 71.4461 11.5606C71.7195 11.743 72.2097 11.9059 72.9195 12.1061C73.6099 12.3064 74.1554 12.4334 74.52 12.5425C74.8832 12.6321 75.5377 12.8144 76.4657 13.07C77.6642 13.3614 78.7013 13.6692 79.5561 14.0339C80.4094 14.3791 81.2837 14.8528 82.1549 15.47C83.0097 16.0692 83.6284 16.8702 83.9915 17.8147C84.3367 18.7786 84.4458 19.8859 84.247 21.1592C83.8465 23.6862 82.5375 25.7215 80.3198 27.2668C78.1021 28.812 75.5571 29.5756 72.6655 29.5756C69.5571 29.5756 67.0675 28.667 65.1935 26.8857C63.3405 25.1044 62.4857 22.8314 62.6844 20.0877L67.4112 18.2511C67.4291 20.524 68.0104 22.2321 69.1566 23.3589C70.2834 24.4857 71.739 25.0864 73.5203 25.0864C75.1372 25.0864 76.5195 24.6695 77.6104 23.87C78.7013 23.0705 79.2827 22.0334 79.2827 20.7796C79.3006 19.9427 78.9928 19.2702 78.3188 18.7801C77.6463 18.3064 76.5913 17.87 75.1731 17.5068C74.136 17.199 73.338 16.9435 72.7566 16.7611C72.1918 16.5788 71.4281 16.3427 70.4463 16.0349C69.4645 15.7435 68.7009 15.3803 68.1554 15.0172C67.592 14.654 67.0286 14.1983 66.4279 13.6722C65.8466 13.1447 65.4281 12.5455 65.1726 11.8356C64.9185 11.1452 64.8094 10.3816 64.8453 9.56413C64.9185 7.12827 66.0632 5.07347 68.2271 3.36538C70.4089 1.67522 73.1168 0.802491 76.3342 0.802491M61.3738 0.294396L60.6281 4.52951H55.6279L56.3736 0.294396H61.3723H61.3738ZM59.1367 29.1437C58.5375 29.4157 57.5736 29.5442 56.2645 29.5442C54.7013 29.5442 53.5372 29.1437 52.793 28.3442C52.0473 27.5447 51.8112 26.3447 52.1026 24.7263L54.9569 8.36563L59.9556 8.3477L57.2478 23.8371C57.1028 24.6366 57.339 25.1088 57.9576 25.2912C58.5569 25.4735 59.1935 25.4002 59.866 25.1462L59.1382 29.1467L59.1367 29.1437ZM44.0314 18.7263C44.3392 16.7806 44.2316 15.1995 43.6682 13.9636C43.1048 12.7457 41.9601 12.127 40.3043 12.127C38.6485 12.127 37.2513 12.6351 35.996 13.6722L34.2147 23.743C35.1248 24.7801 36.3786 25.2882 37.997 25.2882C39.6154 25.2882 41.0142 24.6889 42.0319 23.4531C43.0137 22.2531 43.6862 20.6899 44.0314 18.7263ZM41.9945 8.001C44.6859 8.001 46.6495 9.05604 47.9033 11.1467C49.1586 13.2374 49.5218 15.7644 49.0122 18.7278C48.4847 21.6912 47.2129 24.2361 45.2134 26.3447C43.2139 28.4712 40.8677 29.5442 38.1778 29.5442C35.8869 29.5442 34.1235 28.7073 32.9056 26.9993C32.2152 28.0528 31.2154 28.9255 29.9063 29.5442L27.1791 26.3447C27.9786 25.7455 28.5076 25.0715 28.7975 24.3811C29.071 23.6907 29.3429 22.5998 29.6164 21.1098L32.2167 6.38406C32.6336 3.71208 32.798 1.85903 32.6889 0.803985L37.4889 0C37.8894 1.12677 37.7235 3.72702 37.0152 7.72603L36.652 9.79726C38.2152 8.59726 39.9965 7.99801 41.996 7.99801M26.6904 1.2L23.6179 18.5425C23.0366 21.9781 21.4914 24.6695 19.0002 26.6137C16.4911 28.5594 13.4934 29.5412 9.98453 29.5412C6.47569 29.5412 3.83957 28.5594 2.04032 26.6137C0.241067 24.6859 -0.358186 21.996 0.205201 18.5425L3.29412 1.18207H8.29287L5.60296 16.3427C4.6585 21.8152 6.42189 24.523 10.8752 24.523C15.3285 24.523 17.8734 21.7958 18.9464 16.3427L21.6378 1.18207H26.7098V1.2H26.6919H26.6904Z" fill="currentColor"></path><path d="M69.2774 42.6877H67.7188V33.8379H69.7422V37.5739C70.0515 36.8297 70.7673 36.2812 71.8493 36.2812C73.6754 36.2812 74.6303 37.7427 74.6303 39.5689C74.6303 41.3951 73.6754 42.8551 71.8074 42.8551C70.7673 42.8551 69.9813 42.3216 69.6435 41.5624L69.2789 42.6862L69.2774 42.6877ZM69.7407 39.6391C69.7407 40.6508 70.316 41.283 71.1589 41.283C72.1138 41.283 72.577 40.5941 72.577 39.5689C72.577 38.5437 72.1138 37.8698 71.1589 37.8698C70.316 37.8698 69.7407 38.5019 69.7407 39.4987V39.6391Z" fill="currentColor"></path><path d="M76.4554 44.9623L77.3684 42.7431L74.8115 36.4502H76.947L78.4504 40.3416H78.5072L80.0389 36.4502H82.0339L78.4519 44.9623H76.4569H76.4554Z" fill="currentColor"></path><path d="M87.4119 33.8379V40.9318H91.907V42.6877H85.2764V33.8379H87.4119Z" fill="currentColor"></path><path d="M98.636 40.9876C98.636 41.3104 98.7764 41.4508 99.029 41.4508C99.2113 41.4508 99.3667 41.4224 99.5491 41.3387V42.4207C99.2397 42.6448 98.8467 42.8287 98.228 42.8287C97.4838 42.8287 96.9354 42.4356 96.753 41.7333C96.4019 42.4491 95.6293 42.8287 94.6609 42.8287C93.4101 42.8287 92.624 42.1965 92.624 41.1295C92.624 39.9355 93.5236 39.4304 94.9 39.1629L96.6425 38.8536V38.7415C96.6425 38.1512 96.3481 37.8 95.7294 37.8C95.1107 37.8 94.8447 38.1646 94.7326 38.6847L92.8512 38.5442C93.0619 37.2097 94.0586 36.2832 95.8429 36.2832C97.4718 36.2832 98.639 37.014 98.639 38.7131V40.9891L98.636 40.9876ZM96.641 39.9206L95.6158 40.1313C94.9837 40.2583 94.5906 40.4122 94.5906 40.9039C94.5906 41.2685 94.8716 41.4942 95.3065 41.4942C96.0507 41.4942 96.641 40.9323 96.641 40.0476V39.9206Z" fill="currentColor"></path><path d="M101.824 42.6877H100.266V33.8379H102.289V37.5739C102.598 36.8297 103.314 36.2812 104.396 36.2812C106.222 36.2812 107.177 37.7427 107.177 39.5689C107.177 41.3951 106.222 42.8551 104.354 42.8551C103.314 42.8551 102.528 42.3216 102.192 41.5624L101.827 42.6862L101.824 42.6877ZM102.288 39.6391C102.288 40.6508 102.863 41.283 103.706 41.283C104.661 41.283 105.124 40.5941 105.124 39.5689C105.124 38.5437 104.661 37.8698 103.706 37.8698C102.863 37.8698 102.288 38.5019 102.288 39.4987V39.6391Z" fill="currentColor"></path><path d="M109.479 40.609C109.563 41.2127 110.041 41.5504 110.799 41.5504C111.347 41.5504 111.712 41.3532 111.712 41.0169C111.712 40.7076 111.515 40.5387 111.01 40.455L110.055 40.3011C108.622 40.077 107.849 39.5853 107.849 38.3494C107.849 37.1136 108.903 36.2842 110.573 36.2842C112.343 36.2842 113.396 37.0702 113.523 38.4047L111.851 38.4615C111.752 37.9131 111.317 37.6052 110.545 37.6052C110.04 37.6052 109.73 37.8159 109.73 38.1537C109.73 38.4062 109.928 38.5616 110.236 38.6035L111.443 38.8142C112.806 39.0249 113.592 39.6286 113.592 40.8227C113.592 42.1288 112.482 42.8595 110.783 42.8595C109.083 42.8595 107.819 42.1706 107.707 40.6538L109.476 40.612L109.479 40.609Z" fill="currentColor"></path><path d="M114.776 37.8699H113.904V36.634L114.354 36.5638C114.973 36.4517 115.155 36.1289 115.309 35.552L115.52 34.7227H116.771V36.4502H118.428V37.8684H116.771V40.4671C116.771 41.0006 117.023 41.2263 117.501 41.2263C117.811 41.2263 118.133 41.1426 118.513 40.9737V42.3082C118.05 42.6594 117.516 42.8567 116.702 42.8567C115.69 42.8567 114.777 42.4218 114.777 41.0171V37.8713L114.776 37.8699Z" fill="currentColor"></path><path d="M125.507 40.6359C125.185 42.0541 124.074 42.8551 122.445 42.8551C120.465 42.8551 119.061 41.6476 119.061 39.6661C119.061 37.6845 120.494 36.2812 122.404 36.2812C124.469 36.2812 125.549 37.6994 125.549 39.4001V40.0187H121.054C121.111 40.8466 121.728 41.3248 122.516 41.3248C123.218 41.3248 123.653 41.0573 123.878 40.482L125.507 40.6359ZM123.598 38.9368C123.556 38.3181 123.163 37.7562 122.39 37.7562C121.576 37.7562 121.196 38.2763 121.084 38.9368H123.599H123.598Z" fill="currentColor"></path><path d="M131.042 38.4321C130.719 38.2498 130.41 38.1796 129.975 38.1796C129.132 38.1796 128.57 38.6578 128.57 39.7382V42.6882H126.547V36.4521H128.57V37.5893C128.809 36.8869 129.455 36.2832 130.298 36.2832C130.677 36.2832 131 36.3953 131.169 36.5358L131.042 38.4321Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4405_24188"><rect width="132" height="44.9619" fill="currentColor"></rect></clipPath></defs></svg>',
      website: 'https://www.ubisimvr.com/'
    },
    {
      name: 'WeldVR',
      category: 'Industrial Training Partner',
      description: 'Advanced welding simulation system designed by experts at Cythero. Supports MIG, TIG, and Stick welding with real welding torches included. Features performance tracking for travel speed, work angle, arc length, and work distance. Trusted by 120+ organizations including Toyota and LKQ.',
      services: ['Welding Simulation', 'MIG/TIG/Stick Training', 'Performance Tracking', 'Industrial Safety'],
      logo: '/assets/images/weldvr/logo.png',
      website: 'https://www.weldvr.com'
    },
    {
      name: 'SIMBOTT',
      category: 'Industrial Training Partner',
      description: 'India-based AR, VR, and MR training simulations company specializing in welding (VR/AR/MR), spray painting, military training, fire safety, air force simulation, excavator/dozer operation, and comprehensive safety training programs for industrial sectors.',
      services: ['Welding Simulators', 'Spray Painting VR', 'Military Training', 'Safety Training'],
      logo: '/assets/images/simbott/logo.webp',
      website: 'https://www.simbott.com'
    },
    {
      name: 'DIG IN VISION',
      category: 'Industrial Training Partner',
      description: 'Poland-based portable VR welding simulator with Weld-Master AI for self-learning. Virtual Training Center provides complete VR welding experience for both beginners and professionals. Deployed globally including Cranfield University UK, with focus on MIG/MAG welding methods.',
      services: ['VR Welding', 'AI Self-Learning', 'Virtual Training Center', 'MIG/MAG Training'],
      logo: '/assets/images/diginvision/logo.png',
      skipLogoBg: true,
      website: 'https://www.diginvision.com'
    },
    {
      name: 'Simulanis',
      category: 'Industrial Training Partner',
      description: 'India\'s most awarded XR company, ranked #1 in India and Top-15 globally. Enterprise AR/VR solutions for oil & gas, automotive, pharmaceutical, defense, construction, and energy sectors. Trained 40,000+ workforce across 200+ enterprise clients with the Simulanis Uno unified platform.',
      services: ['Enterprise XR', 'Oil & Gas Training', 'Automotive VR', 'Industrial Training'],
      logo: '/assets/images/simulanis/logo.png',
      website: 'https://www.simulanis.com'
    },
    {
      name: 'Transfr',
      category: 'Workforce Development Partner',
      description: 'Immersive career exploration and training platform connecting classrooms to careers. Transfr Trek enables learners to explore 150+ careers across 16 career clusters, while Transfr Train provides VR skills training. Serves 275,000+ learners across 48 states with 1M+ simulations experienced.',
      services: ['Career Exploration', 'VR Skills Training', 'Workforce Development', 'K-12 & Community Colleges'],
      logo: '/assets/images/transfr/logo.svg',
      skipLogoBg: true,
      website: 'https://transfrinc.com'
    },
    {
      name: 'Luminous XR',
      category: 'Digital Twin Partner',
      description: 'ScanOps platform bridging reality capture to operations. High-accuracy 3D laser scanning, real-time digital twins, and mixed reality for frontline execution. Immersive technical and safety training with AR guidance. Trusted by Saudi Aramco, PepsiCo, Saint Gobain, and Diageo across oil/gas, manufacturing, aviation, defense, automotive, and pharma sectors.',
      services: ['3D Laser Scanning', 'Digital Twins', 'Mixed Reality Training', 'Reality Capture'],
      logo: '/assets/images/luminousxr/logo.svg',
      website: 'https://www.luminousxr.com'
    },
    {
      name: 'SimLab Soft',
      category: 'Technology Partner',
      description: 'Professional VR creation and 3D visualization software platform. SimLab Composer provides complete 3D visualization tools, while SimLab VR Studio enables code-free VR experience creation for product visualization and vocational training. Trusted by NASA, Tesla, Boeing, Mercedes-Benz, Disney, and Samsung.',
      services: ['VR Creation Platform', '3D Visualization', 'VR Studio', 'CAD Integration'],
      logo: '/assets/images/simlab/logo.png',
      website: 'https://www.simlab-soft.com'
    },
    {
      name: 'Cognisco',
      category: 'Technology Partner',
      description: 'MyKnow 365 competency management platform for workforce assessment and risk management. Features powerful assessments to identify knowledge gaps, comprehensive competency frameworks, skills passports, and robust reporting dashboards. Trusted by NHS, KPMG, BT, Barclays, and HSBC with 20+ years enterprise experience.',
      services: ['Competency Management', 'Skills Assessment', 'Workforce Analytics', 'Reporting Tools'],
      logo: '/assets/images/cognisco/logo.svg',
      skipLogoBg: true,
      website: 'https://www.cognisco.com'
    }
  ,
    {
      name: 'GiGi Foundation',
      category: 'Education Partner',
      description: 'GiGi Foundation builds digital skills and creates pathways into IT for socially excluded youth. They run training, internships and international projects (e.g., Jet for Africa, Digital Jumpstart) to support students across Poland, Uganda, Tanzania and Eastern Europe.',
      services: ['Digital Skills Training', 'Internships & Mentoring', 'EduTech Tools & Platforms'],
      logo: '/assets/images/gigi/logo.png',
      website: 'https://www.fundacjagigi.pl/'
    },
    {
      name: 'GIGI Global',
      category: 'Investment & Strategy Partner',
      description: 'GIGI Global is a business growth and software strategy firm delivering end-to-end IT solutions, stakeholder strategy and digital process optimisation. They partner with organisations to scale platforms and launch new digital products.',
      services: ['Software Strategy', 'Digital Transformation', 'Project Delivery'],
      logo: 'https://gigiglobal.com/img/logo-big.png',
      website: 'https://gigiglobal.com/'
    },
    {
      name: 'Haiven',
      category: 'Product Partner',
      description: 'Haiven builds community-first chat and interactive experiences for gamers and creators, focusing on honest, non-predatory monetisation and creative connection. They are actively seeking strategic partnerships and collaboration opportunities.',
      services: ['Chat Platform', 'Community Engagement', 'Subscription Products'],
      logo: '/assets/images/haiven/logo.svg',
      website: 'https://haiven.chat/'
    },
    {
      name: 'Gravity Jack',
      category: 'AR/VR Partner',
      description: 'Gravity Jack are AR/VR pioneers (since 2009) delivering immersive experiences and WebAR activations for clients including Meta, T‑Mobile and branded AR campaigns. Their work spans WebAR, mobile AR, VR games and Web3 experiments.',
      services: ['Augmented Reality', 'Virtual Reality', 'WebAR', 'Game Development'],
      logo: '/assets/images/gravityjack/logo.webp',
      website: 'https://www.gravityjack.com/'
    },
    {
      name: 'GLP Software',
      category: 'Technology Partner',
      description: 'GLP Software specialises in rapid product development, PoC and MVP delivery for startups and enterprises. They offer full-stack development, low-code/no-code options and support for EU grant-funded projects.',
      services: ['MVP & PoC Development', 'Web & Mobile Apps', 'Product Design', 'EU Fund Support'],
      logo: '/assets/images/glp/logo.png',
      skipLogoBg: true,
      website: 'https://glpsoftware.pl/'
    }
  ];

  const partnershipBenefits = [
    {
      icon: 'team.svg',
      title: 'Collaboration Opportunities',
      description: 'Work with talented students and graduates on real-world projects'
    },
    {
      icon: 'strategy.svg',
      title: 'Talent Pipeline',
      description: 'Access to skilled developers, designers, and VR specialists'
    },
    {
      icon: 'share.svg',
      title: 'Brand Visibility',
      description: 'Showcase your brand to Uganda\'s growing tech community'
    },
    {
      icon: 'rocket.svg',
      title: 'Innovation Access',
      description: 'Collaborate on cutting-edge projects and emerging technologies'
    },
    {
      icon: 'global.svg',
      title: 'Social Impact',
      description: 'Contribute to youth employment and technology education'
    },
    {
      icon: 'chart.svg',
      title: 'Market Insights',
      description: 'Gain insights into local tech trends and market needs'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Technology Partner',
      description: 'Provide hardware, software, or technical expertise to enhance our training programs.',
      examples: ['VR equipment providers', 'Software platforms', 'Cloud service providers', 'Tech companies']
    },
    {
      type: 'Education Partner',
      description: 'Collaborate on curriculum development, certification programs, and training standards.',
      examples: ['Universities', 'Training institutions', 'Certification bodies', 'Industry experts']
    },
    {
      type: 'Investment Partner',
      description: 'Support startups through funding, acceleration programs, and mentorship.',
      examples: ['VCs', 'Angel investors', 'Accelerators', 'Impact investors']
    },
    {
      type: 'Hiring Partner',
      description: 'Recruit talented graduates for internships, contract work, or full-time positions.',
      examples: ['Tech companies', 'Startups', 'Design agencies', 'Consulting firms']
    },
    {
      type: 'Community Partner',
      description: 'Support community initiatives, infrastructure, and social impact programs.',
      examples: ['NGOs', 'Government agencies', 'Community organizations', 'Foundations']
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-white">
        {/* Full-width ticker */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8 bg-white py-3">
          <div className="academy-ticker bg-white" aria-label="Partners ticker">
            <div className="academy-ticker-track">
              <div className="academy-ticker-group">
                <span className="academy-ticker-item">INDUSTRY PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">TECH INNOVATORS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">HIRING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COMMUNITY ORGS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">FUNDING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">BUILDING TOGETHER</span>
                <span className="academy-ticker-sep">•</span>
              </div>
              <div className="academy-ticker-group" aria-hidden="true">
                <span className="academy-ticker-item">INDUSTRY PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">TECH INNOVATORS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">HIRING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COMMUNITY ORGS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">FUNDING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">BUILDING TOGETHER</span>
                <span className="academy-ticker-sep">•</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Our <span className="gradient-text-3d">Partners</span>
              </h1>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                Collaborating with industry leaders, innovators, and community organizations to create opportunities 
                and drive technological advancement in Uganda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative -pt-8 md:pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
                Meet Our <span className="text-[#F58220]">Partners</span>
              </h2>
              <p className="blueox-body text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Organizations that believe in our mission and support our students
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {partners.map((partner, index) => (
              <Reveal key={index} delay={0.3 + index * 0.1}>
                <div className="border-l-4 border-[#F58220] pl-6">
                  <div className="mb-2">
                    <span className="text-[#F58220] text-sm font-semibold uppercase tracking-wide">
                      {partner.category}
                    </span>
                  </div>
                  {partner.logo && partner.logo.startsWith('<svg') ? (
                    <div className="mb-3 w-40 h-14">
                      <div dangerouslySetInnerHTML={{ __html: partner.logo }} />
                    </div>
                  ) : partner.logo && !partner.logo.startsWith('[') ? (
                    <div className={`${(partner as any).skipLogoBg ? '' : 'bg-gray-900 rounded-lg p-3'} w-fit mb-3`}>
                      <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain max-w-[200px]" />
                    </div>
                  ) : (
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
                      {partner.name}
                    </h3>
                  )}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F58220] hover:text-[#f4a08e] transition-colors font-semibold text-sm"
                  >
                    Visit Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Why <span className="text-[#F58220]">Partner</span> With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Benefits of joining the Blue OX Kampus ecosystem
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <Reveal key={index} delay={0.5 + index * 0.1}>
                <div className="glass p-6 rounded-xl hover:border-[#F58220]/50 transition-all duration-300">
                  <img src={`/icons/${benefit.icon}`} alt={benefit.title} className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.6}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Partnership <span className="text-[#F58220]">Opportunities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find the partnership type that aligns with your organization's goals
              </p>
            </div>
          </Reveal>

          <div className="space-y-6 mb-16">
            {partnershipTypes.map((partnership, index) => (
              <Reveal key={index} delay={0.7 + index * 0.1}>
                <div className="glass rounded-xl p-8 hover:border-[#F58220]/50 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-black mb-2">{partnership.type}</h3>
                    <p className="text-gray-700 leading-relaxed">{partnership.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F58220] mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnership.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section — hidden until real partner quotes are collected
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.8}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                What Our Partners <span className="text-[#F58220]">Say</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.9}>
              <div className="glass rounded-xl p-8">
                <div className="text-[#F58220] text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">
                  Partnering with Blue OX Kampus has given us direct access to some of the most talented young developers 
                  in East Africa. Their training programs produce job-ready graduates.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <img src="/icons/user.svg" alt="User" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-black font-bold">[Partner Name]</div>
                    <div className="text-gray-600 text-sm">[Company, Position]</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.0}>
              <div className="glass rounded-xl p-8">
                <div className="text-[#F58220] text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">
                  The social impact component is what drew us to Blue OX Kampus. Knowing that our partnership helps 
                  fund free training for youth makes this collaboration even more meaningful.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <img src="/icons/user.svg" alt="User" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-black font-bold">[Partner Name]</div>
                    <div className="text-gray-600 text-sm">[Organization, Role]</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal delay={1.1}>
            <div className="glass rounded-2xl border-2 border-[#F58220]/50 p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Become a Partner
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Join us in building Uganda's tech future. Submit your partnership inquiry and let's discuss how we can collaborate to create opportunities and drive innovation together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openForm('partner')}
                  className="inline-block border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#F58220] hover:text-white"
                >
                  PARTNER WITH US
                </button>
                <a 
                  href="mailto:blueoxrecruit@gmail.com"
                  className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  EMAIL US
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                Email: <a href="mailto:blueoxrecruit@gmail.com" className="text-[#F58220] hover:underline">blueoxrecruit@gmail.com</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ApplicationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={formType}
      />

      <Footer />
    </>
  );
}








