import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e1011] text-[#e4e8eb] font-sans antialiased selection:bg-[#88a293] selection:text-[#0e1011]">
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e1011]/80 border-b border-[#23282b]/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          <a
            href="#intro"
            className="text-lg font-medium tracking-tight text-[#e4e8eb] hover:text-[#88a293] transition-colors"
          >
            Akshay Bothale
          </a>
          <nav className="flex items-center gap-6 sm:gap-8 text-sm text-[#8e989e]">
            <a
              href="#about"
              className="hover:text-[#e4e8eb] transition-colors hidden sm:inline-block"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-[#e4e8eb] transition-colors"
            >
              Experience
            </a>
            <a
              href="#infrastructure"
              className="hover:text-[#e4e8eb] transition-colors hidden sm:inline-block"
            >
              Scale
            </a>
            <a
              href="#skills"
              className="hover:text-[#e4e8eb] transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-[#88a293] hover:text-white font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Intro Section */}
        <section
          id="intro"
          className="pt-20 sm:pt-32 pb-20 border-b border-[#23282b]"
        >
          <div className="max-w-3xl">
            <p className="text-[#88a293] text-sm uppercase tracking-widest font-medium mb-4">
              Cloud Engineering Lead &amp; IT Infrastructure Manager
            </p>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#e4e8eb] leading-[1.1] mb-8">
              Architecting resilient, large-scale enterprise infrastructure.
            </h1>
            <p className="text-lg sm:text-xl text-[#8e989e] leading-relaxed font-normal mb-10">
              I lead cloud engineering and mission-critical virtualization at{" "}
              <span className="text-[#e4e8eb] font-medium">IDFC FIRST Bank</span>.
              With over 14 years of banking IT infrastructure experience, I govern
              fleets of 3,000+ virtual machines and thousands of enterprise compute nodes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#0e1011] bg-[#88a293] hover:bg-[#9cb6a7] transition-all rounded"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-bothale-850b8169"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#e4e8eb] bg-[#15181a] border border-[#23282b] hover:border-[#88a293] transition-all rounded"
              >
                LinkedIn Profile &rarr;
              </a>
              <a
                href="https://github.com/aabothale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#8e989e] hover:text-[#e4e8eb] transition-colors"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Real Enterprise Scale & Key Metrics */}
        <section id="infrastructure" className="py-20 border-b border-[#23282b]">
          <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-10">
            Scale &amp; Operational Capacity
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-[#23282b] pl-6 py-2">
              <div className="text-3xl sm:text-4xl font-light text-[#e4e8eb] mb-1">
                210
              </div>
              <p className="text-sm text-[#8e989e]">ESXi Hosts Managed</p>
            </div>
            <div className="border-l-2 border-[#23282b] pl-6 py-2">
              <div className="text-3xl sm:text-4xl font-light text-[#e4e8eb] mb-1">
                3,000+
              </div>
              <p className="text-sm text-[#8e989e]">Virtual Machines</p>
            </div>
            <div className="border-l-2 border-[#23282b] pl-6 py-2">
              <div className="text-3xl sm:text-4xl font-light text-[#e4e8eb] mb-1">
                2,000+
              </div>
              <p className="text-sm text-[#8e989e]">Windows Servers</p>
            </div>
            <div className="border-l-2 border-[#23282b] pl-6 py-2">
              <div className="text-3xl sm:text-4xl font-light text-[#e4e8eb] mb-1">
                14+ Years
              </div>
              <p className="text-sm text-[#8e989e]">Enterprise Banking IT</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-b border-[#23282b]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
                About Me
              </h2>
              <p className="text-2xl font-light text-[#e4e8eb]">
                Engineering high availability for critical finance.
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-[#8e989e] text-base sm:text-lg leading-relaxed">
              <p>
                I am a <strong className="text-[#e4e8eb] font-medium">VMware Certified Professional</strong> and{" "}
                <strong className="text-[#e4e8eb] font-medium">IT Infrastructure Project Manager</strong> based in the
                Mumbai Metropolitan Region. Throughout my career at premier financial institutions like IDFC FIRST Bank
                and HDFC Bank, as well as global tech consultancies like TCS and Capgemini, I have specialized in
                delivering uncompromising uptime, automated scaling, and resilient compute platforms.
              </p>
              <p>
                My focus centers on high-density virtualization, hyper-converged hardware estates, multi-site disaster
                recovery, and cloud modernization. I hold a Bachelor of Engineering (B.E.) in Electrical, Electronics and
                Communications Engineering from Nagpur University (2006–2010).
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-20 border-b border-[#23282b]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
                Career History
              </h2>
              <p className="text-3xl font-light text-[#e4e8eb]">
                14+ Years of Professional Growth
              </p>
            </div>
            <p className="text-sm text-[#8e989e]">
              Mumbai Metropolitan Region, India
            </p>
          </div>

          <div className="space-y-12">
            {/* IDFC FIRST Bank */}
            <div className="p-8 rounded-lg bg-[#15181a] border border-[#23282b] hover:border-[#88a293]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-[#e4e8eb]">
                    IDFC FIRST Bank
                  </h3>
                  <p className="text-[#88a293] text-sm">
                    Cloud Engineering Lead &amp; Chief Manager
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-[#8e989e] font-mono sm:text-right">
                  8 yrs 9 mos · Apr 2023 – Present
                </div>
              </div>
              <p className="text-[#8e989e] text-sm sm:text-base leading-relaxed mb-6">
                Leading the core cloud engineering and virtualization strategy. Overseeing enterprise infrastructure
                resiliency, private cloud services, and mission-critical banking workloads across distributed data centers.
              </p>
              <div className="border-t border-[#23282b] pt-4 space-y-3 text-xs text-[#8e989e]">
                <div className="flex justify-between">
                  <span>Cloud Engineering Lead</span>
                  <span className="font-mono">Apr 2023 – Present</span>
                </div>
                <div className="flex justify-between">
                  <span>Chief Manager</span>
                  <span className="font-mono">May 2021 – Present</span>
                </div>
                <div className="flex justify-between">
                  <span>Senior Manager</span>
                  <span className="font-mono">Feb 2018 – May 2021</span>
                </div>
              </div>
            </div>

            {/* Capgemini */}
            <div className="p-8 rounded-lg bg-[#15181a] border border-[#23282b] hover:border-[#88a293]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-medium text-[#e4e8eb]">
                    Capgemini
                  </h3>
                  <p className="text-[#88a293] text-sm">Consultant</p>
                </div>
                <div className="text-xs sm:text-sm text-[#8e989e] font-mono sm:text-right">
                  1 yr 10 mos · Apr 2016 – Jan 2018
                </div>
              </div>
              <p className="text-[#8e989e] text-sm sm:text-base leading-relaxed">
                Consulted on virtualization architecture, enterprise server rollouts, and infrastructure modernization
                engagements for major clients.
              </p>
            </div>

            {/* TCS */}
            <div className="p-8 rounded-lg bg-[#15181a] border border-[#23282b] hover:border-[#88a293]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-medium text-[#e4e8eb]">
                    Tata Consultancy Services
                  </h3>
                  <p className="text-[#88a293] text-sm">IT Analyst</p>
                </div>
                <div className="text-xs sm:text-sm text-[#8e989e] font-mono sm:text-right">
                  2 yrs 2 mos · Feb 2014 – Mar 2016
                </div>
              </div>
              <p className="text-[#8e989e] text-sm sm:text-base leading-relaxed">
                Engineered server virtualization solutions, system administration, and infrastructure performance analysis
                across heterogeneous hardware environments.
              </p>
            </div>

            {/* HDFC Bank */}
            <div className="p-8 rounded-lg bg-[#15181a] border border-[#23282b] hover:border-[#88a293]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-medium text-[#e4e8eb]">
                    HDFC Bank
                  </h3>
                  <p className="text-[#88a293] text-sm">Assistant Manager</p>
                </div>
                <div className="text-xs sm:text-sm text-[#8e989e] font-mono sm:text-right">
                  3 yrs 5 mos · Oct 2010 – Feb 2014
                </div>
              </div>
              <p className="text-[#8e989e] text-sm sm:text-base leading-relaxed">
                Managed day-to-day enterprise banking server infrastructure, VMware implementations, and high-availability
                operations for core banking systems.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects & Achievements */}
        <section className="py-20 border-b border-[#23282b]">
          <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
            Featured Work &amp; Achievements
          </h2>
          <p className="text-3xl font-light text-[#e4e8eb] mb-12">
            Real Infrastructure Milestones
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded border border-[#23282b] bg-[#15181a]">
              <div className="text-[#88a293] text-sm font-medium mb-3">
                Virtualization at Scale
              </div>
              <h3 className="text-lg font-medium text-[#e4e8eb] mb-3">
                3,000+ VM Cluster Management
              </h3>
              <p className="text-sm text-[#8e989e] leading-relaxed">
                Architected and continuously managed a high-density VMware cluster across 210 ESXi hosts, achieving seamless
                banking-grade reliability and zero-unplanned-downtime execution.
              </p>
            </div>

            <div className="p-6 rounded border border-[#23282b] bg-[#15181a]">
              <div className="text-[#88a293] text-sm font-medium mb-3">
                Enterprise Compute Estate
              </div>
              <h3 className="text-lg font-medium text-[#e4e8eb] mb-3">
                2,000+ Windows Server Infrastructure
              </h3>
              <p className="text-sm text-[#8e989e] leading-relaxed">
                Directed lifecycle operations, compliance security baselines, and performance optimization across a fleet of
                over 2,000 enterprise Windows Server instances.
              </p>
            </div>

            <div className="p-6 rounded border border-[#23282b] bg-[#15181a]">
              <div className="text-[#88a293] text-sm font-medium mb-3">
                Hardware Engineering
              </div>
              <h3 className="text-lg font-medium text-[#e4e8eb] mb-3">
                Multi-Vendor Hardware Integration
              </h3>
              <p className="text-sm text-[#8e989e] leading-relaxed">
                Standardized enterprise compute topologies across HP, DELL, IBM, Cisco UCS, and Fujitsu servers, optimizing
                compute density, thermal efficiency, and hardware warranties.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-b border-[#23282b]">
          <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
            Core Competencies
          </h2>
          <p className="text-3xl font-light text-[#e4e8eb] mb-12">
            Technical Skills &amp; Domain Expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-base font-medium text-[#e4e8eb] mb-4 pb-2 border-b border-[#23282b]">
                Virtualization &amp; Cloud
              </h3>
              <ul className="space-y-2 text-sm text-[#8e989e]">
                <li className="text-[#e4e8eb]">VMware Infrastructure</li>
                <li className="text-[#e4e8eb]">VMware ESXi &amp; vCenter</li>
                <li>Cloud Engineering</li>
                <li>Virtual Machine Lifecycle</li>
                <li>High Availability &amp; DRS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-[#e4e8eb] mb-4 pb-2 border-b border-[#23282b]">
                Server &amp; OS Systems
              </h3>
              <ul className="space-y-2 text-sm text-[#8e989e]">
                <li className="text-[#e4e8eb]">Microsoft Windows Servers</li>
                <li>Enterprise Operating Systems</li>
                <li>Server Hardening &amp; Security</li>
                <li>Active Directory &amp; Group Policy</li>
                <li>System Administration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-[#e4e8eb] mb-4 pb-2 border-b border-[#23282b]">
                Hardware Platforms
              </h3>
              <ul className="space-y-2 text-sm text-[#8e989e]">
                <li className="text-[#e4e8eb]">Cisco UCS Architecture</li>
                <li className="text-[#e4e8eb]">HP Enterprise ProLiant</li>
                <li className="text-[#e4e8eb]">DELL PowerEdge Servers</li>
                <li>IBM System x Compute</li>
                <li>Fujitsu Server Infrastructure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-[#e4e8eb] mb-4 pb-2 border-b border-[#23282b]">
                Management &amp; Governance
              </h3>
              <ul className="space-y-2 text-sm text-[#8e989e]">
                <li className="text-[#e4e8eb]">IT Project Management</li>
                <li>Capacity Planning</li>
                <li>Banking IT Compliance</li>
                <li>Disaster Recovery (DR)</li>
                <li>Vendor &amp; SLA Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20 border-b border-[#23282b]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
                Education
              </h2>
              <h3 className="text-xl font-medium text-[#e4e8eb] mb-2">
                Nagpur University
              </h3>
              <p className="text-[#88a293] text-sm mb-2">
                Bachelor of Engineering (B.E.), Electrical, Electronics and Communications Engineering
              </p>
              <p className="text-xs font-mono text-[#8e989e]">2006 – 2010</p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
                Professional Credentials
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-medium text-[#e4e8eb]">
                    VMware Certified Professional (VCP)
                  </h3>
                  <p className="text-sm text-[#8e989e]">
                    Certified in enterprise data center virtualization and VMware infrastructure management.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#e4e8eb]">
                    IT Infrastructure Project Manager Professional
                  </h3>
                  <p className="text-sm text-[#8e989e]">
                    Experienced in delivering enterprise infrastructure migrations and data center operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-widest text-[#88a293] font-medium mb-3">
              Let&apos;s Connect
            </h2>
            <p className="text-4xl sm:text-5xl font-light text-[#e4e8eb] mb-6 leading-tight">
              Looking for a seasoned infrastructure leader?
            </p>
            <p className="text-base sm:text-lg text-[#8e989e] mb-10 leading-relaxed">
              Feel free to reach out directly via email or connect on LinkedIn to discuss cloud engineering,
              infrastructure architecture, or leadership opportunities.
            </p>

            <div className="space-y-4 text-base mb-12">
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#88a293] w-24">Email</span>
                <a
                  href="mailto:aabothale@gmail.com"
                  className="text-lg font-medium text-[#e4e8eb] hover:text-[#88a293] transition-colors"
                >
                  aabothale@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#88a293] w-24">Location</span>
                <span className="text-[#e4e8eb]">Thane / Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#88a293] w-24">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/akshay-bothale-850b8169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#88a293] hover:underline"
                >
                  linkedin.com/in/akshay-bothale-850b8169 &rarr;
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#88a293] w-24">GitHub</span>
                <a
                  href="https://github.com/aabothale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#88a293] hover:underline"
                >
                  github.com/aabothale &rarr;
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-[#23282b] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8e989e] gap-4">
              <p>&copy; 2026 Akshay Bothale. Built with Next.js &amp; Tailwind CSS.</p>
              <a href="#intro" className="hover:text-[#e4e8eb] transition-colors">
                Back to top &uarr;
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
