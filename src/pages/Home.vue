<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Banner Image -->

      <!-- Hero Section -->
      <div class="mb-4">
        <div class="bg-white rounded-lg shadow-sm p-6 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div class="flex-shrink-0">
            <div class="bg-center bg-no-repeat bg-cover rounded-full w-32 h-32 lg:w-36 lg:h-36"
                 style='background-image: url("/src/assets/images/profile02.png");'></div>
          </div>

          <div class="text-center lg:text-left">
            <h1 class="text-[#101418] text-4xl lg:text-3xl font-extrabold mb-2">Hi,</h1>
            <p class="text-[#5c738a] mt-4 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to my blog. My name is Ismail Marmoush. I’m a software engineer and consultant with 12+ years of
              experience, including 8+ years working in Europe.
            </p>
            <p class="text-[#5c738a] mt-4 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              I help companies scale, modernize, and secure their platforms. My work includes high-traffic eCommerce
              systems, cloud-native infrastructure, distributed systems, and developer enablement.
            </p>
            <p class="text-[#5c738a] mt-4 max-w-3xl mx-auto lg:mx-0">
              I have strong experience in the JVM ecosystem and a keen interest in DevOps and security-first design. I
              work closely with engineering teams to build robust, maintainable, and scalable solutions, and I enjoy
              simplifying complexity and improving CI/CD pipelines and overall architecture.
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content Grid (stacked vertically) -->
      <div class="grid grid-cols-1 gap-8 mb-12">
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

      <!--  Contact section    -->
      <div class="mb-4">
        <h2 class="text-[#101418] text-2xl font-bold mb-4">Contact me</h2>
        <div class="bg-white rounded-lg shadow-sm p-6 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div class="flex justify-center">
            <div class="flex flex-1 gap-4 flex-wrap px-6 py-10  justify-center">
              <a href="https://memoria.io/" target="_blank"
                 class="flex items-center justify-center w-20 h-16 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <img src="/src/assets/images/memoria_logo.png" alt="Memoria Logo" class="w-16 h-12 object-contain"/>
              </a>

              <a href="https://www.linkedin.com/in/ismailmarmoush" target="_blank"
                 class="flex items-center justify-center w-16 h-16 bg-[#0077b5] rounded-xl text-white transition-all duration-300 hover:bg-[#005885] hover:scale-110 hover:shadow-lg">
                <svg class="w-12 h-12" viewBox="0 0 32 32" fill="none">
                  <path
                      d="M12 12h4v2h.06c.56-1.06 1.92-2.18 3.95-2.18C24.92 11.82 26 13.1 26 16.08V24h-4v-6.22c0-1.48-.53-2.5-1.85-2.5-1.01 0-1.61.68-1.87 1.34-.1.23-.13.55-.13.87V24h-4V12zm-6 0h4v12H6V12zm2-6a2 2 0 110 4 2 2 0 010-4z"
                      fill="white"/>
                </svg>
              </a>
              <a href="https://github.com/ismailmarmoush" target="_blank"
                 class="flex items-center justify-center w-16 h-16 bg-[#fff] rounded-xl text-white transition-all duration-300  hover:scale-110 hover:shadow-lg">
                <img src="/src/assets/images/github.png" alt="GitHub Logo" class="w-12 h-12 object-contain"/>
              </a>

              <a href="https://stackoverflow.com/users/263215/ismail-marmoush" target="_blank"
                 class="flex items-center justify-center bg-white rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 px-2 py-1">
                <img src="https://stackoverflow.com/users/flair/263215.png?theme=clean" alt="Stack Overflow Profile"
                     class="rounded" style="height:48px; width:auto; display:block;"/>
              </a>
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
