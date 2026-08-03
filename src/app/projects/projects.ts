import { Component } from '@angular/core';
import { Project } from '../models/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      id: 'retail',
      title: 'Retail Experience Platform',
      description:
        'Enterprise retailer management platform with authentication, role-based access control, invoice verification, reward management, QR code management, and reporting dashboards.',
      technologies: [
        'Angular',
        'Node.js',
        'MySQL',
        'REST API',
      ],
      image: './assets/images/retailer.png',
      github: '',
      live: '',
      hasGitLink: false
    },
    {
      id: 'SHAP',
      title: 'Smart Home Automation',
      description:
        'IoT-based smart home automation system with multilingual voice control, sensors, actuators, and energy-efficient automation.',
      technologies: [
        'React',
        'IoT',
        'Sensors',
        'Voice Control'
      ],
      image: './assets/images/smart.png',
      github: '',
      live: '',
      hasGitLink: false
    },
    {
      id: 'eduthon',
      title: 'EduThon',
      description:
        'Smart parental learning and monitoring platform using Flask, React, IoT dashboards, multilingual AI, and analytics.',
      technologies: [
        'Flask',
        'React',
        'IoT',
        'AI'
      ],
      image: './assets/images/eduthon.png',
      github:
        'https://github.com/pavankumarrcs22/Parental_Guidance_System/tree/master',
      live: '',
      hasGitLink: true
    },
    {
      id: 'EMSP',
      title: 'Event Management System',
      description:
        'Scalable platform for event scheduling, ticketing, venue allocation, and AI-powered resource management.',
      technologies: [
        'Node.js',
        'React',
        'MySQL',
        'MongoDB'
      ],
      image: './assets/images/event.png',
      github:
        'https://github.com/pavankumarrcs22/Event-Management-System',

      live: '',
      hasGitLink: true
    },
    {
      id: 'CANP',
      title: 'CAN Bus Threat Detection',
      description:
        'Machine learning-based cybersecurity solution for detecting attacks on automotive CAN networks using TensorFlow.',
      technologies: [
        'Python',
        'TensorFlow',
        'Flask'
      ],
      image: './assets/images/can.png',
      github:
        'https://github.com/pavankumarrcs22/Cyber_Securtity_Threat_Detection_System',
      live: '',
      hasGitLink: true
    }

  ];

}