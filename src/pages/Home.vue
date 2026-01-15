<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Banner Image -->

      <!-- Hero Section -->
      <div class="mb-4">
        <div class="bg-white rounded-lg shadow-sm p-4 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div class="flex-shrink-0">
            <div class="bg-center bg-no-repeat bg-cover rounded-full w-32 h-32 lg:w-36 lg:h-36"
                 style="background-image:url('/images/profile02.png');"></div>
          </div>
          <div class="text-center lg:text-left">
            <h2 class="text-[#101418] lg:text-2xl font-extrabold mb-2">Hi,</h2>
            <p class="text-[#5c738a] mt-4 leading-relaxed"> Welcome to my blog, I'm a
              software engineer and consultant with 12+ years of experience, including 8+ years in Europe.</p>
            <p class="text-[#5c738a] mt-4 leading-relaxed">I help companies and teams scale, modernize, and secure their
              platforms. My work includes high-traffic eCommerce systems, cloud-native infrastructure, distributed
              systems, and developer enablement.</p>
            <p class="text-[#5c738a] mt-4">I have strong experience in the JVM ecosystem and a keen interest in DevOps
              and security-first design.</p>
            <p class="text-[#5c738a] mt-4">
              I work closely with engineering teams to build robust, maintainable, and scalable solutions, and I really
              enjoy simplifying complexity, improving production pipelines (CI/CD) and architecture design.</p>

            <p class="text-[#5c738a] mt-4"> I recently started learning Android (3 months now), and very soon
              venturing into Rust as well, no high expectations though. Stay tuned for some posts here about the
              journey.</p>

            <p class="text-[#5c738a] mt-4">Thanks for visiting and please feel free to connect, I love discussing tech,
              business and chess :) </p>

            <p class="text-[#5c738a] mt-4">
              Cheers!,
            </p>
            <p class="text-[#5c738a] mt-4">
              Ismail
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content Grid (stacked vertically) -->
      <!--      What I'm Building        -->
      <div class="grid grid-cols-1 gap-8 mb-12">
        <div class="space-y-8">
          <section>
            <h2 class="text-[#101418] text-2xl font-bold mb-4">What I'm Building</h2>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-green-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Project Helium</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a]">Cloud-native Java microservice foundation with AI
                      support.
                      <a href="https://memoria.io/#/products/helium" target="_blank" rel="noopener noreferrer"
                         class="ml-2 text-[#3f7fbf] hover:text-[#2d5d8f]">
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Release Candidate
                  </div>
                </div>

                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-yellow-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Project Argon</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a]">Composable infrastructure stack for distributed
                      systems
                      <a href="https://memoria.io/#/products/argon" target="_blank" rel="noopener noreferrer"
                         class="ml-2 text-[#3f7fbf] hover:text-[#2d5d8f]">
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Alpha
                  </div>
                </div>

                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-blue-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Nota.sh</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a]">Knowledge management and collaboration</div>
                  </div>
                  <div class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Pre-Alpha
                  </div>
                </div>

                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-gray-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Memoria's Opensource Utilities</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a] flex items-center">
                      Available on GitHub
                      <a href="https://github.com/memoria-io" target="_blank" rel="noopener noreferrer"
                         class="ml-2 text-[#3f7fbf] hover:text-[#2d5d8f]">
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    General Availability
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!--   Skills and Interests     -->
        <div class="space-y-8">
          <section>

            <h2 class="text-[#101418] text-2xl font-bold mb-4">Skills & Interests</h2>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="divide-y divide-gray-200">
                <!-- Programming Languages -->
                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-green-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Programming Languages</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a] flex flex-wrap gap-2">
                      <span class="text-sm text-[#5c738a] mr-4">Java</span>
                      <span class="text-sm text-[#5c738a] mr-4">Kotlin</span>
                      <span class="text-sm text-[#5c738a] mr-4">Scala</span>
                      <span class="text-sm text-[#5c738a] mr-4">JavaScript</span>
                      <span class="text-sm text-[#5c738a] mr-4">Rust</span>
                      <span class="text-sm text-[#5c738a] mr-4">Python</span>
                      <span class="text-sm text-[#5c738a] mr-4">TypeScript</span>
                    </div>
                  </div>
                </div>

                <!-- Architecture & Paradigms -->
                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-blue-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Architecture & Paradigms</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a] flex flex-wrap gap-2">
                      <span class="text-sm text-[#5c738a] mr-4">Hexagonal Architecture</span>
                      <span class="text-sm text-[#5c738a] mr-4">Event Sourcing</span>
                      <span class="text-sm text-[#5c738a] mr-4">CQRS</span>
                      <span class="text-sm text-[#5c738a] mr-4">DDD</span>
                      <span class="text-sm text-[#5c738a] mr-4">Object-Oriented Programming</span>
                      <span class="text-sm text-[#5c738a] mr-4">Functional Programming</span>
                      <span class="text-sm text-[#5c738a] mr-4">Reactive Programming</span>
                      <span class="text-sm text-[#5c738a] mr-4">Event Driven Architecture</span>
                      <span class="text-sm text-[#5c738a] mr-4">System Design</span>
                      <span class="text-sm text-[#5c738a] mr-4">Clean Code</span>
                      <span class="text-sm text-[#5c738a] mr-4">Refactoring</span>
                      <span class="text-sm text-[#5c738a] mr-4">Test-Driven Development</span>
                    </div>
                  </div>
                </div>

                <!-- Tech Stack & Tools -->
                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-yellow-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Tech Stack & Tools</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a] flex flex-wrap gap-2">
                      <span class="text-sm text-[#5c738a] mr-4">Reactive Streams</span>
                      <span class="text-sm text-[#5c738a] mr-4">Project Reactor</span>
                      <span class="text-sm text-[#5c738a] mr-4">VAVR</span>
                      <span class="text-sm text-[#5c738a] mr-4">Spring Framework</span>
                      <span class="text-sm text-[#5c738a] mr-4">Maven</span>
                      <span class="text-sm text-[#5c738a] mr-4">Gradle</span>
                      <span class="text-sm text-[#5c738a] mr-4">Oracle Helidon SE</span>
                      <span class="text-sm text-[#5c738a] mr-4">Flutter</span>
                      <span class="text-sm text-[#5c738a] mr-4">Web Development</span>
                      <span class="text-sm text-[#5c738a] mr-4">12 Factor App</span>
                      <span class="text-sm text-[#5c738a] mr-4">Kafka</span>
                      <span class="text-sm text-[#5c738a] mr-4">Redis</span>
                      <span class="text-sm text-[#5c738a] mr-4">MySQL</span>
                      <span class="text-sm text-[#5c738a] mr-4">PostgreSQL</span>
                    </div>
                  </div>
                </div>

                <!-- DevOps & Cloud -->
                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-pink-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">DevOps & Cloud</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a] flex flex-wrap gap-2">
                      <span class="text-sm text-[#5c738a] mr-4">Linux</span>
                      <span class="text-sm text-[#5c738a] mr-4">Bash</span>
                      <span class="text-sm text-[#5c738a] mr-4">Docker</span>
                      <span class="text-sm text-[#5c738a] mr-4">Git</span>
                      <span class="text-sm text-[#5c738a] mr-4">GitHub Actions</span>
                      <span class="text-sm text-[#5c738a] mr-4">Ansible</span>
                      <span class="text-sm text-[#5c738a] mr-4">AWS</span>
                      <span class="text-sm text-[#5c738a] mr-4">Kubernetes</span>
                      <span class="text-sm text-[#5c738a] mr-4">CI/CD</span>
                      <span class="text-sm text-[#5c738a] mr-4">Security</span>
                      <span class="text-sm text-[#5c738a] mr-4">Cloud Solutions</span>
                      <span class="text-sm text-[#5c738a] mr-4">GCP</span>
                      <span class="text-sm text-[#5c738a] mr-4">Debian</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      <!--  Contact section    -->
      <div class="mb-0">
        <h2 class="text-[#101418] text-2xl font-bold mb-4">Contact & Collaboration</h2>
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <!-- Left: bigger CTA / context -->
            <div class="lg:col-span-2">
              <p class="text-[#5c738a] mt-4 max-w-3xl mx-auto lg:mx-0">I'm available for consulting, short-term
                engagements, and speaking at events. Use the links to the right to view projects, connect
                professionally, or reach out — I typically reply within a few business days.
              </p>
              <p class="text-[#5c738a] mt-4 max-w-3xl mx-auto lg:mx-0">
                If you'd like to discuss a specific project, include a brief summary and your timeline when you reach
                out.</p>
            </div>

            <!-- Right: large, clear action links -->
            <div class="flex flex-col items-center lg:items-end">

              <div class="flex flex-col w-full max-w-xs gap-3">
                <a href="https://www.linkedin.com/in/ismailmarmoush" target="_blank" rel="noopener noreferrer"
                   class="flex items-center justify-center gap-3 bg-[#0077b5] text-white rounded-lg px-4 py-3 font-semibold hover:shadow-lg transition">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.05c.54-1.02 1.86-2.09 3.84-2.09 4.11 0 4.87 2.71 4.87 6.24V24h-4v-7.3c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.9-2.79 3.86V24h-4V8z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a href="https://github.com/ismailmarmoush" target="_blank" rel="noopener noreferrer"
                   class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#111827] font-semibold hover:shadow-lg transition">
                  <svg class="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.15 11.15 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.81 1.2 1.84 1.2 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                          clip-rule="evenodd"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://stackoverflow.com/users/263215/ismail-marmoush" target="_blank"
                   rel="noopener noreferrer"
                   class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#111827] font-semibold hover:shadow-lg transition">
                  <img src="https://stackoverflow.com/users/flair/263215.png?theme=clean" alt="Stack Overflow Profile"
                       class="rounded" style="height:66px; width:auto; display:block;"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
document.title = 'Ismail Marmoush';
</script>
