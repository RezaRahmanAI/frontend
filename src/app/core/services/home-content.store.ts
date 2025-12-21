import { Injectable, computed, inject, signal } from '@angular/core';
import { take } from 'rxjs';

import { HomeContent, InsightItem, ServiceCard, StatItem, Testimonial } from '../models/home';
import { ContentApiService } from './content-api.service';

@Injectable({ providedIn: 'root' })
export class HomeContentStore {
  private readonly storageKey = 'hum-tech-academy-home-content';
  private readonly api = inject(ContentApiService);

  private readonly initialHomeContent: HomeContent = {
    hero: {
      badge: 'New Version 2.0 is Live',
      title: 'Innovating the',
      titleHighlight: 'Future',
      titleSuffix: 'of Business',
      description:
        'Scalable software solutions designed for the modern enterprise. We help you transform your digital infrastructure with cutting-edge technology.',
      primaryCta: {
        label: 'Get Started',
        routerLink: '/contact',
      },
      secondaryCta: {
        label: 'Learn More',
        routerLink: '/academy',
      },
      trustedByline: 'Trusted by 500+ companies',
      avatars: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5HHtCa-xSOQuDox5ircpM2QVCiuNWliWybwOstQOXKvWs5_jEMnisgy05i-u3-cf1J0_pEswdVKHPTLqVN6KR1uU-znjUmEj0Mggpy2r9BA-eUZnwDhdjeh_ZuaNnfL5TASJolG9q8TVpem11MKoe3Ozgsqb3NZN9dr7rlgljqEBRQ8nxL7c9SgTtMeCKhOAuGrreLE8JdTR3aZTiSZWMwmOFX4qaKvQpoEYcPXpVEaMS7x0G7NDtptTZIEkxhIm5Jq4tFAhq4Ag',
          alt: 'Portrait of a smiling woman',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyfpqFI6ek0AcDG4h5Cgo4YyHy2l_n0Bhtf6Gtw2xejbpmd74KIn36ewtTNENYG_2X02_Jx4sHX87DFcLB2x3p3AM01X0FVn_4yAsx2wwhcLD00vKvxueMC5BDwJuZVO53vxaC9TrfKhvrQw-ZcsQz6WDtki4-xWXHxBQIEzqaFML50b9pWGWqUASOLVmNf5EBdjWsgpGZY-0q-LRBzOroFx9oE_4Ui3qeyj4fZHlguKincleUfg3XWl3yhcj2CJmzREsh1oaKKMk',
          alt: 'Portrait of a man with glasses',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqPpINo1Y7DTEbGmwV4N7Epq-j02u2EWa8rjLAaiRb4iSTBaGRowCNlbNVeqUXYobxPm63tj0C_DGR09Oilugks-_6se4mi6hTHNcdupG-v9xC4PXE8jirUY8OgGPyQk_-A-qoeOgPKMibpzkb_ZXFQtTeVLCVmlfPZQJ61F63ZYTNtL84rF0kogGgfFs9vCLMxHWnzg_f2vZRXJllsiBz2m5dVW1TPbiLeleQS7KgDQmpWCXbp2Zxnqp7brDVEfCruBD2x5wpi9I',
          alt: 'Portrait of a smiling man',
        },
      ],
      image: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTNcAuNk_uvfj13yKrkRsyHfDCiB2Ywa6Hd1gZu6NmnspiKw8-9R8TjSixfc3kRaayALPJbxZQ5oHCVt0GhzfMeCQWuL5hNqNqGDY95UlDf8UaRi-qPaJgk0gFvit4YKS1wwPNsNH9w8R2cq-2K4sx2ThiLwFVufpH3eACgySe2XdCEiPzHZcHXrMdbem6cgLc1G_NXWe0JVjbEr7qeA8HjpwJk10qF0RPoz-ZmOSxSe3qXxcv3-vWlNorZaVwDAYbJMTda8HfPNY',
        alt: 'Futuristic cyber security data visualization with blue nodes and connections',
      },
    },
    trust: {
      tagline: 'Trusted by teams at',
      companies: ['Anthropic', 'Stripe', 'Vercel', 'Linear'],
      stats: [
        { label: 'Projects Delivered', value: 50, suffix: '+' },
        { label: 'Countries Served', value: 1, suffix: '+' },
        { label: 'Students Trained', value: 1, suffix: 'K+' },
        { label: 'Years Combined Experience', value: 2, suffix: '+' },
      ],
    },
    services: {
      header: {
        eyebrow: 'Solutions',
        title: 'Comprehensive Technology Solutions',
        subtitle:
          'Strategy, delivery, and enablement crafted for ambitious brands and fast-scaling ventures.',
        align: 'center',
      },
      items: [
        {
          title: 'Digital Marketing',
          icon: '🎯',
          description:
            'Grow your global visibility with performance-driven campaigns and storytelling that resonates.',
          highlights: [
            'SEO & multi-language content strategy',
            'Full-funnel paid media management',
            'Brand development & identity systems',
            'Data-driven analytics and conversion optimization',
          ],
          tagline: 'Grow Your Digital Presence Globally',
        },
        {
          title: 'Software Development',
          icon: '💻',
          description:
            'Build resilient platforms across web, mobile, and cloud with modern engineering practices.',
          highlights: [
            'Custom enterprise applications',
            'Mobile experiences for iOS and Android',
            'API integrations & automation',
            'Cloud architecture, DevOps & observability',
          ],
          tagline: 'Building Scalable Solutions',
        },
        {
          title: 'Website Building',
          icon: '🌐',
          description:
            'Design pixel-perfect digital homes that translate your brand into immersive customer journeys.',
          highlights: [
            'Responsive corporate and e-commerce sites',
            'Conversion-optimized landing pages',
            'WordPress & headless CMS implementations',
            'Continuous support and performance tuning',
          ],
          tagline: 'Your Digital Home, Perfected',
        },
        {
          title: 'HumTech Academy',
          icon: '🎓',
          description:
            'Future-ready tech education with live cohorts, real-world projects, and mentorship from industry leaders.',
          highlights: [
            'Live interactive bootcamps and micro-courses',
            'Industry-recognized certificates',
            'Career coaching & placement support',
            'Hands-on projects reviewed by senior engineers',
          ],
          tagline: 'Learn From the Best, Become the Best',
          featured: true,
        },
        {
          title: 'App Development',
          icon: '📱',
          description:
            'Create intuitive and feature-rich applications across multiple platforms to engage users effectively.',
          highlights: [
            'Custom mobile app development for iOS and Android',
            'Cross-platform development with Flutter or React Native',
            'App store optimization and maintenance',
            'User-centric design and testing for seamless UX',
          ],
          tagline: 'Powerful Apps, Seamless Experiences',
        },
        {
          title: 'Graphics Design',
          icon: '🎨',
          description:
            'Craft stunning visuals that convey your brand message clearly and captivate your audience.',
          highlights: [
            'Logo and brand identity design',
            'Marketing collateral (brochures, flyers, banners)',
            'Social media and website graphics',
            'Illustrations and custom graphics for digital and print',
          ],
          tagline: 'Designs That Speak Volumes',
        },
        {
          title: 'UI/UX Design',
          icon: '🖥️',
          description:
            'Design smooth, user-friendly interfaces and seamless user experiences for web and mobile platforms.',
          highlights: [
            'User research and wireframing',
            'Interactive prototypes and mockups',
            'UI/UX audits and testing',
            'Design systems and component libraries',
          ],
          tagline: 'Engage Users with Intuitive Design',
        },
        {
          title: 'Photo Retouch',
          icon: '📸',
          description:
            'Enhance your images with professional editing services to make your visuals stand out.',
          highlights: [
            'Portrait retouching for a polished look',
            'Product photography enhancement',
            'Background removal and adjustments',
            'Color correction, skin smoothing, and more',
          ],
          tagline: 'Bringing Your Photos to Life',
        },
      ],
    },
    differentiators: {
      header: {
        eyebrow: 'Why HumTech',
        title: 'Why Leading Companies Choose Us',
        subtitle:
          'End-to-end partnership, measurable outcomes, and a commitment to the teams who rely on our solutions every day.',
      },
      items: [
        {
          title: 'Global Standards, Local Expertise',
          description:
            'International delivery quality with a deep understanding of Bangladesh and emerging markets to localize impact.',
        },
        {
          title: 'Proven Track Record',
          description:
            '500+ successful projects across fintech, retail, telco, and startups spanning 50+ countries.',
        },
        {
          title: 'End-to-End Solutions',
          description:
            'Strategy, execution, maintenance, and training handled by dedicated cross-functional teams.',
        },
        {
          title: 'Transparent Communication',
          description:
            'Real-time reporting, dedicated PMs, and communication aligned to your timezone and toolstack.',
        },
        {
          title: 'Certified Professionals',
          description:
            'Engineers and marketers certified by AWS, Google, Microsoft, Meta, and HubSpot.',
        },
        {
          title: 'Beyond Delivery',
          description:
            'We empower your team with upskilling and internal enablement through HumTech Academy programs.',
        },
      ],
      partnershipPanel: {
        eyebrow: 'Partnership DNA',
        title: 'Strategy, build, enablement and continuous optimization—one integrated team.',
        description:
          'We embed with your teams, align KPIs, and share knowledge through HumTech Academy so you stay in control long after launch.',
        highlights: [
          { label: 'Dedicated PMO', value: 'Weekly sprints & dashboards' },
          { label: 'Academy Enablement', value: 'Workshops & certifications' },
        ],
      },
    },
    methodology: {
      header: {
        eyebrow: 'Our Methodology',
        title: 'How We Work',
        subtitle: 'A proven framework that keeps delivery transparent, collaborative, and fast.',
        align: 'center',
      },
      steps: [
        {
          step: 'Discover',
          detail: 'Deep dive workshops to understand objectives, users, and success metrics.',
        },
        {
          step: 'Design',
          detail: 'Collaborative prototyping, technical architecture, and experience design.',
        },
        {
          step: 'Develop',
          detail:
            'Agile delivery with continuous integration, QA automation, and security reviews.',
        },
        {
          step: 'Deploy',
          detail: 'Cloud-native deployment, observability setup, and go-live orchestration.',
        },
        {
          step: 'Support',
          detail: '24/7 monitoring, optimization sprints, and on-demand training for your teams.',
        },
      ],
    },
    caseStudies: {
      header: {
        eyebrow: 'Success Stories',
        title: 'Success Stories That Inspire',
        subtitle:
          'Experience the measurable outcomes we deliver for Bangladesh and international brands.',
        align: 'center',
      },
      items: [
        {
          client: 'Aarong Global',
          industry: 'Retail & E-commerce',
          challenge: 'Low conversion rates and fragmented customer journeys.',
          solution: 'Full-stack replatforming, UX revamp, and omnichannel marketing automation.',
          result: '250% increase in online revenue within 6 months.',
        },
        {
          client: 'NovaCare Health',
          industry: 'Healthcare',
          challenge: 'Legacy systems limiting patient experience across regions.',
          solution: 'HIPAA-compliant patient portal with mobile apps and AI triage assistant.',
          result: 'Customer satisfaction jumped to 4.9/5 and support tickets reduced by 63%.',
        },
        {
          client: 'Velocity Fintech',
          industry: 'Financial Services',
          challenge: 'Needed a scalable API layer to expand into new markets quickly.',
          solution:
            'Microservices architecture with automated compliance checks and observability.',
          result: 'Launch speed improved by 3x across 5 new countries.',
        },
      ],
    },
    academy: {
      header: {
        eyebrow: 'HumTech Academy',
        title: 'HumTech Academy: Learn Technology, Build Careers',
        subtitle: 'Live online courses taught by industry experts. From beginner to professional.',
      },
      categories: [
        'Web Development',
        'Digital Marketing',
        'Software Engineering',
        'Mobile Development',
        'Data Science & AI',
        'UI/UX Design',
      ],
      stats: [
        { label: 'Students Enrolled', value: 10, suffix: 'K+' },
        { label: 'Course Completion Rate', value: 95, suffix: '%' },
        { label: 'Average Rating', value: 4.9, suffix: '/5', decimals: 1 },
        { label: 'Courses Available', value: 80, suffix: '+' },
      ],
      featuredCourses: [
        {
          title: 'Full-Stack Web Development with Angular & Node.js',
          instructor: 'Sadia Rahman (Ex-Google)',
          duration: '12 weeks · Live · Capstone Project',
          rating: '4.9/5 (320 reviews)',
          price: 'BDT 18,500 | $165',
        },
        {
          title: 'Performance Marketing Accelerator',
          instructor: 'Tahmid Hasan (Meta Certified)',
          duration: '8 weeks · Live Campaign Clinics',
          rating: '4.8/5 (210 reviews)',
          price: 'BDT 14,000 | $125',
        },
        {
          title: 'Cloud & DevOps Engineer Program',
          instructor: 'Farzana Chowdhury (AWS Community Builder)',
          duration: '10 weeks · Labs & Certifications',
          rating: '4.9/5 (185 reviews)',
          price: 'BDT 22,000 | $195',
        },
      ],
      benefits: [
        'Live interactive sessions (not pre-recorded)',
        'Industry expert instructors',
        'Lifetime access to resources',
        'Job placement support & mentorship',
      ],
    },
    globalPresence: {
      header: {
        eyebrow: 'Global Presence',
        title: 'From Dhaka to the World',
        subtitle:
          'Proudly Bangladeshi, globally connected—delivering excellence across continents with the agility of local teams.',
      },
      headquarters: {
        title: 'Headquarters',
        location: '📍 Dhaka, Bangladesh',
        address: 'Innovation Avenue, Tejgaon, Dhaka 1207',
      },
      marketsServed: 'Asia · Europe · North America · Middle East · Australia',
      verticals: 'Fintech · Retail · Healthcare · SaaS · Public Sector · Education',
      map: {
        title: 'Global Delivery Map',
        description:
          'Animated map placeholder — highlight major hubs in Dhaka, Singapore, Dubai, London, Toronto, Sydney.',
        badge: 'Cloud-first. Remote-native. 24/7 support.',
      },
    },
    testimonials: {
      header: {
        eyebrow: 'Testimonials',
        title: 'What Our Clients & Students Say',
        subtitle:
          'Real outcomes, global voices. Explore how partnerships and learning experiences reshape careers and companies.',
        align: 'center',
      },
      items: [
        {
          quote:
            'HumTech transformed our digital presence and unified our customer journey across markets. Their strategy and execution rival the best global agencies.',
          name: 'Arif Khan',
          title: 'Chief Digital Officer, Aarong Global',
          location: 'Dhaka & Dubai',
          rating: 5,
          type: 'client',
        },
        {
          quote:
            'The engineering team delivered a robust fintech platform ahead of schedule. Their communication cadence and technical depth were outstanding.',
          name: 'Sophia Patel',
          title: 'VP Product, Velocity Fintech',
          location: 'Singapore',
          rating: 5,
          type: 'client',
        },
        {
          quote:
            'HumTech Academy’s DevOps bootcamp helped me transition from support engineer to cloud engineer in under six months with real mentorship.',
          name: 'Mahim Islam',
          title: 'Cloud Engineer, Sydney',
          location: 'Sydney, Australia',
          rating: 5,
          type: 'student',
        },
        {
          quote:
            'Practical, hands-on sessions with industry leaders. The marketing accelerator gave me the confidence and portfolio to land international clients.',
          name: 'Faria Noor',
          title: 'Performance Marketer',
          location: 'Toronto, Canada',
          rating: 5,
          type: 'student',
        },
      ],
    },
    impact: {
      header: {
        eyebrow: 'Numbers That Matter',
        title: 'Impact in Every Engagement',
        subtitle:
          'Metrics that capture our commitment to excellence, support, and continuous learning.',
        align: 'center',
      },
      stats: [
        { label: 'Projects Delivered', value: 500, suffix: '+' },
        { label: 'Countries Served', value: 50, suffix: '+' },
        { label: 'Students Trained', value: 10, suffix: 'K+' },
        { label: 'Years Combined Experience', value: 15, suffix: '+' },
      ],
    },
    insights: {
      header: {
        eyebrow: 'Latest Insights',
        title: 'Tech Insights & Learning Resources',
        subtitle:
          'Deep dives, playbooks, and tutorials from our engineering, marketing, and academy teams.',
        align: 'center',
      },
      items: [
        {
          title: 'Designing Omni-Channel Experiences for Emerging Markets',
          category: 'Case Study',
          summary:
            'How HumTech reimagined retail experiences with localized content and automation.',
          readTime: '7 min read',
        },
        {
          title: 'Scaling Engineering Teams with Academy-led Upskilling',
          category: 'Academy',
          summary:
            'Building engineering excellence through custom training journeys and mentorship.',
          readTime: '5 min read',
        },
        {
          title: 'The Playbook for High-Converting SaaS Websites',
          category: 'Insights',
          summary:
            'UI/UX strategies and experimentation frameworks that deliver measurable growth.',
          readTime: '8 min read',
        },
      ],
    },
    closingCtas: {
      business: {
        title: 'Ready to Transform Your Business?',
        description:
          'Collaborate with our strategists and engineers to design your next breakthrough.',
        cta: {
          label: 'Start Your Project',
          routerLink: '/contact',
        },
      },
      academy: {
        title: 'Ready to Advance Your Career?',
        description:
          'Enroll in HumTech Academy programs to upgrade your skills with mentorship from industry practitioners.',
        cta: {
          label: 'Browse Courses',
          routerLink: '/academy',
        },
      },
    },
    contact: {
      header: {
        eyebrow: 'Contact',
        title: "Let's Build Something Amazing Together",
        subtitle: 'Tell us about your goals and we will curate a dedicated team for you.',
      },
      headquarters: 'HumTech, 123 Innovation Avenue, Tejgaon, Dhaka 1207',
      phones: ['Bangladesh: +880 1234-567890', 'International: +1 415-555-0198'],
      emails: [
        { label: 'Business', value: 'hello@humtech.academy' },
        { label: 'Academy', value: 'courses@humtech.academy' },
        { label: 'Support', value: 'support@humtech.academy' },
      ],
      businessHours: ['Sun-Thu: 9:00 AM - 6:00 PM (GMT+6)', 'Fri-Sat: Closed'],
      socials: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/humtechacademy' },
        { label: 'Facebook', url: 'https://www.facebook.com/humtechacademy' },
        { label: 'Twitter', url: 'https://twitter.com/humtechacademy' },
        { label: 'Instagram', url: 'https://www.instagram.com/humtechacademy' },
        { label: 'YouTube', url: 'https://www.youtube.com/@humtechacademy' },
        { label: 'GitHub', url: 'https://github.com/humtechacademy' },
      ],
      consultation: {
        label: 'Schedule a Free Consultation',
        routerLink: '/contact',
        fragment: 'consultation',
      },
      profileDownload: {
        label: 'Download Company Profile (PDF)',
        url: 'https://www.humtech.academy/assets/company-profile.pdf',
      },
    },
  };

  private readonly _homeContent = signal<HomeContent>(this.loadHomeContent());

  readonly homeContent = computed(() => this._homeContent());

  constructor() {
    this.syncFromApi();
  }

  setHomeContent(content: HomeContent): void {
    const next = this.clone(content);
    this._homeContent.set(next);
    this.persistHomeContent(next);
    this.pushContentToApi(next);
  }

  updateSection<K extends keyof HomeContent>(section: K, value: HomeContent[K]): void {
    const nextValue = this.clone(value);
    this._homeContent.update((current) => {
      const updated = this.clone({ ...current, [section]: nextValue });
      this.persistHomeContent(updated);
      this.pushContentToApi(updated);
      return updated;
    });
  }

  updateHomeContent(mutator: (content: HomeContent) => HomeContent): void {
    this._homeContent.update((current) => {
      const clone = this.clone(current);
      const mutated = mutator(clone);
      const next = this.clone(mutated);
      this.persistHomeContent(next);
      this.pushContentToApi(next);
      return next;
    });
  }

  resetHomeContent(): void {
    const next = this.clone(this.initialHomeContent);
    this._homeContent.set(next);
    this.persistHomeContent(next);
    this.pushContentToApi(next);
  }

  private loadHomeContent(): HomeContent {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(this.storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as HomeContent;
          return this.clone(parsed);
        } catch (error) {
          console.error('Failed to parse stored home content', error);
        }
      }
    }
    return this.clone(this.initialHomeContent);
  }

  private persistHomeContent(content: HomeContent): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(this.storageKey, JSON.stringify(content));
  }

  private syncFromApi(): void {
    this.api
      .getHomeContent()
      .pipe(take(1))
      .subscribe({
        next: (content) => {
          const next = this.clone(content);
          this._homeContent.set(next);
          this.persistHomeContent(next);
        },
        error: (error) => {
          console.error('Failed to load home content from API', error);
        },
      });
  }

  private pushContentToApi(content: HomeContent): void {
    this.api
      .updateHomeContent(content)
      .pipe(take(1))
      .subscribe({
        error: (error) => {
          console.error('Failed to update home content via API', error);
        },
      });
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }
}
