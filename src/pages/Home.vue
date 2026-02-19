<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Banner Image -->

      <!-- Hero Section -->
      <div class="mb-4">
        <div class="bg-white rounded-lg shadow-sm p-4 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <!-- Hero Section Variant 3: Terminal Aesthetic -->
          <section class="relative overflow-hidden bg-white pb-20 pt-16 lg:pb-32 lg:pt-24">
            <!-- Subtle Background Decorative Elements -->
            <div class="absolute left-0 top-0 -z-10 h-full w-full opacity-[0.03]"
                 style="background-image: radial-gradient(#195de6 1px, transparent 1px); background-size: 40px 40px;"></div>
            <div class="mx-auto max-w-7xl px-6 lg:px-12">
              <div class="grid items-center gap-16 lg:grid-cols-2">
                <!-- Left Content: Value Proposition -->
                <div class="relative z-10 flex flex-col items-start">
                  <div
                      class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    <span class="text-blue-700"><> const EXPERIENCE = 12; // years_of_excellence</span>
                  </div>
                  <h1 class="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                    Simplifying <br/>
                    <span class="relative">
                                Complexity
                                <span class="absolute bottom-2 left-0 -z-10 h-3 w-full bg-primary/10"></span>
                  </span>
                  </h1>
                  <p class="mt-8 max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl">
                    Architecting scalable, secure, and high-performance distributed backend systems.
                  </p>
                  <p class="mt-4 max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl">
                    Experienced in
                    delivering compliant, data-sensitive commerce platforms across Europe.
                  </p>
                  <div class="mt-10 flex flex-wrap gap-4">
                    <router-link
                        to="/blog"
                        class="flex items-center gap-2 rounded-lg bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/25 transition-all hover:translate-y-[-2px]"
                    >
                      Read the Blog
                      <span class="material-symbols-outlined">-></span>
                    </router-link>
                    <button @click="scrollToSection"
                            class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-50">
                      View Projects
                    </button>
                  </div>
                  <!-- Stack Indicators -->
                  <div class="mt-16 flex flex-col gap-4">
                    <p class="text-xs font-bold uppercase tracking-widest text-slate-400">Current focus</p>
                    <div class="flex flex-wrap gap-3">
                      <div
                          class="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-700">
                        <span class="h-2 w-2 rounded-full bg-red-500"></span> Software Architecture
                      </div>
                      <div
                          class="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-700">
                        <span class="h-2 w-2 rounded-full bg-blue-500"></span> DevSecOps
                      </div>
                      <div
                          class="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-700">
                        <span class="h-2 w-2 rounded-full bg-orange-500"></span> Java & Kotlin
                      </div>
                      <div
                          class="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-700">
                        <span class="h-2 w-2 rounded-full bg-green-500"></span> Android
                      </div>
                      <div
                          class="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-700">
                        <span class="h-2 w-2 rounded-full bg-red-500"></span> Rust (early-stage experience)
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Right Content: Visual Identity -->
                <div class="relative">
                  <!-- Code Snippet Decorative Card -->

                  <!-- Main Portrait Container -->
                  <div class="relative mx-auto max-w-md">
                    <div class="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-slate-200"></div>
                    <div class="relative overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-2xl">
                      <img alt="Ismail Portrait" class="h-full w-full object-cover"
                           data-alt="Professional headshot of a smiling male software engineer"
                           src="/images/profile02.png"/>
                      <!-- Floating Insight Tag -->
                      <div
                          class="absolute bottom-6 left-6 right-6 rounded-lg bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Latest Insight</p>
                            <p class="text-sm font-bold text-slate-900">Project Helium in Production</p>
                          </div>
                          <!--                          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">-->
                          <!--                            <span class="material-symbols-outlined text-lg">trending_up</span>-->
                          <!--                          </div>-->
                        </div>
                      </div>
                    </div>
                    <!-- Decorative Dots -->
                    <!--                    <div-->
                    <!--                        class="absolute -bottom-6 -right-6 h-24 w-24 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:12px_12px]"></div>-->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Main Content Grid (stacked vertically) -->
      <!--      What I'm Building        -->
      <div class="grid grid-cols-1 gap-8 mb-20">
        <div class="space-y-8">
          <section>
            <h2 ref="targetSection" class="text-[#101418] text-2xl mb-5 mt-10">
              What I'm Building
            </h2>
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

            <h2 class="text-[#101418] text-2xl mb-5 mt-10">Skills & Interests</h2>
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
        <h2 class="text-[#101418] text-2xl mb-5">Contact & Collaboration</h2>
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <!-- Left: bigger CTA / context -->
            <div class="lg:col-span-2">
              <p class="text-[#5c738a] mt-4 max-w-3xl mx-auto lg:mx-0">I'm available for consulting, short-term
                engagements, and speaking at events. Use the links to the right to view projects, connect
                professionally, or reach out. I typically reply within a few business days.
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

import {ref} from 'vue'

const targetSection = ref<HTMLElement | null>(null)

const scrollToSection = () => {
  targetSection.value?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>
