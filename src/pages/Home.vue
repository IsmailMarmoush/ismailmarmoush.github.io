<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Banner Image -->

      <!-- Hero Section -->
      <div class="mb-12 text-center">
        <h1 class="text-[#101418] text-4xl font-bold mb-4">Hi,</h1>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          I'm a software engineer and consultant with 12+ years of experience—8+ in Europe—helping companies scale,
          modernize, and secure their technology platforms. My work spans high-traffic eCommerce systems, cloud-native
          infrastructure, distributed architectures, and developer enablement.
        </p>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          Specializing in the JVM ecosystem, DevOps, and security-first design, I collaborate closely with engineering
          teams to deliver robust, maintainable solutions that balance speed with long-term sustainability.
        </p>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          What drives me is the opportunity to simplify complexity, empower teams with better tools and architecture,
          and build technology that's resilient, robust and scalable.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Left Column -->
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
                      <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-default">Java</span>
                      <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium cursor-default">Kotlin</span>
                      <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium cursor-default">Scala</span>
                      <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium cursor-default">JavaScript</span>
                      <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium cursor-default">Rust</span>
                      <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium cursor-default">Python</span>
                      <span class="px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-medium cursor-default">TypeScript</span>
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
                      <span class="px-4 py-2 bg-stone-100 text-stone-800 rounded-full text-sm font-medium cursor-default">Hexagonal Architecture</span>
                      <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium cursor-default">Event Sourcing</span>
                      <span class="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-full text-sm font-medium cursor-default">CQRS</span>
                      <span class="px-4 py-2 bg-neutral-100 text-neutral-800 rounded-full text-sm font-medium cursor-default">DDD</span>
                      <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium cursor-default">Object-Oriented Programming</span>
                      <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-default">Functional Programming</span>
                      <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium cursor-default">Reactive Programming</span>
                      <span class="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium cursor-default">Event Driven Architecture</span>
                      <span class="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium cursor-default">System Design</span>
                      <span class="px-4 py-2 bg-fuchsia-100 text-fuchsia-800 rounded-full text-sm font-medium cursor-default">Clean Code</span>
                      <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium cursor-default">Refactoring</span>
                      <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium cursor-default">Test-Driven Development</span>
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
                      <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium cursor-default">Reactive Streams</span>
                      <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium cursor-default">Project Reactor</span>
                      <span class="px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium cursor-default">VAVR</span>
                      <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium cursor-default">Spring Framework</span>
                      <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium cursor-default">Maven</span>
                      <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-default">Gradle</span>
                      <span class="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium cursor-default">Oracle Helidon SE</span>
                      <span class="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium cursor-default">Flutter</span>
                      <span class="px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium cursor-default">Web Development</span>
                      <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium cursor-default">12 Factor App</span>
                      <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-default">Kafka</span>
                      <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium cursor-default">Redis</span>
                      <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium cursor-default">MySQL</span>
                      <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium cursor-default">PostgreSQL</span>
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
                      <span class="px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium cursor-default">Linux</span>
                      <span class="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium cursor-default">Bash</span>
                      <span class="px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium cursor-default">Docker</span>
                      <span class="px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium cursor-default">Git</span>
                      <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium cursor-default">GitHub Actions</span>
                      <span class="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium cursor-default">Ansible</span>
                      <span class="px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-medium cursor-default">AWS</span>
                      <span class="px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium cursor-default">Kubernetes</span>
                      <span class="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium cursor-default">CI/CD</span>
                      <span class="px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium cursor-default">Security</span>
                      <span class="px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium cursor-default">Cloud Solutions</span>
                      <span class="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium cursor-default">GCP</span>
                      <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium cursor-default">Debian</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>

        <!-- Right Column -->
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
                      <a href="/#/products#helium" target="_blank" rel="noopener noreferrer"
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
                      <a href="/#/products#argon" target="_blank" rel="noopener noreferrer"
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
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Add any logic or imports here if needed
</script>
