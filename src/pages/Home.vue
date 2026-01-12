<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Banner Image -->

      <!-- Hero Section -->
      <div class="mb-12 text-center">
        <h1 class="text-[#101418] text-4xl font-bold mb-4">Hi,</h1>
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
             style='background-image: url("assets/images/profile02.png");'></div>
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
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Add any logic or imports here if needed
</script>
