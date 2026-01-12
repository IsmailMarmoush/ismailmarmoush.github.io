<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Banner Image -->
      <div class="w-full mb-12">
        <img src="/src/assets/images/memoria_banner.png" alt="Memoria Banner"
          class="w-full h-auto rounded-lg shadow-md">
      </div>

      <!-- Hero Section -->
      <div class="mb-12 text-center">
        <h1 class="text-[#101418] text-4xl font-bold mb-4">Cloud-Native by Design</h1>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          We help you deliver better software—faster—through scalable, secure architecture and built-in observability
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Left Column -->
        <div class="space-y-8">
          <section>
            <h2 class="text-[#101418] text-2xl font-bold mb-4">Our Core Consulting Services</h2>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start">
                    <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-lg mr-4">
                      <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-[#101418] font-medium mb-1">Software Development</h3>
                      <p class="text-sm text-[#5c738a]">Custom cloud-native applications, microservices architecture,
                        and API development</p>
                    </div>
                  </div>
                </div>

                <div class="p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start">
                    <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-lg mr-4">
                      <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-[#101418] font-medium mb-1">Data Analytics</h3>
                      <p class="text-sm text-[#5c738a]">Big data processing, real-time analytics, and business
                        intelligence solutions</p>
                    </div>
                  </div>
                </div>

                <div class="p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start">
                    <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-lg mr-4">
                      <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-[#101418] font-medium mb-1">IT Strategy</h3>
                      <p class="text-sm text-[#5c738a]">Digital transformation roadmaps, technology assessment, and
                        modernization planning</p>
                    </div>
                  </div>
                </div>

                <div class="p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start">
                    <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-lg mr-4">
                      <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-[#101418] font-medium mb-1">Cloud Services</h3>
                      <p class="text-sm text-[#5c738a]">Cloud migration, infrastructure automation, and DevOps
                        implementation</p>
                    </div>
                  </div>
                </div>

                <div class="p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start">
                    <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-lg mr-4">
                      <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-[#101418] font-medium mb-1">Cybersecurity and Compliance</h3>
                      <p class="text-sm text-[#5c738a]">Security assessments, compliance frameworks, and threat
                        protection solutions</p>
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
            <h2 class="text-[#101418] text-2xl font-bold mb-4">What We're Building</h2>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <div class="flex-1">
                    <div class="flex items-center gap-3">
                      <span class="text-green-500 flex-shrink-0">●</span>
                      <span class="text-[#101418] font-medium">Project Helium</span>
                    </div>
                    <div class="ml-6 mt-1 text-sm text-[#5c738a]">Cloud-native Java microservice foundation with AI support.
                      <a href="/#/products#helium" target="_blank" rel="noopener noreferrer"
                        class="ml-2 text-[#3f7fbf] hover:text-[#2d5d8f]">
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                    <div class="ml-6 mt-1 text-sm text-[#5c738a]">Composable infrastructure stack for distributed systems
                      <a href="/#/products#argon" target="_blank" rel="noopener noreferrer"
                        class="ml-2 text-[#3f7fbf] hover:text-[#2d5d8f]">
                        <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

      <!-- Clients Section -->
      <section class="mb-12 bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-[#101418] text-2xl font-bold mb-8 text-center">Clients We Serve</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-center p-6 rounded-lg bg-[#3f7fbf] bg-opacity-5 hover:bg-opacity-10 transition-colors">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full mr-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-[#101418] font-medium">Tech-Driven Startups</h3>
              <p class="text-sm text-[#5c738a] mt-1">Launching new products or platforms, looking for high-performance
                backend foundations and fast delivery without heavyweight frameworks.</p>
            </div>
          </div>

          <div class="flex items-center p-6 rounded-lg bg-[#3f7fbf] bg-opacity-5 hover:bg-opacity-10 transition-colors">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full mr-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-[#101418] font-medium">Growing Engineering Teams</h3>
              <p class="text-sm text-[#5c738a] mt-1">Mid-sized companies scaling services or migrating from legacy
                stacks, needing solid architecture, observability, and infrastructure automation.</p>
            </div>
          </div>

          <div class="flex items-center p-6 rounded-lg bg-[#3f7fbf] bg-opacity-5 hover:bg-opacity-10 transition-colors">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full mr-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h3 class="text-[#101418] font-medium">Platform Engineering Teams</h3>
              <p class="text-sm text-[#5c738a] mt-1">Standardizing infrastructure and deployment practices across
                services, with a focus on consistency, scalability, and modern tooling like Kubernetes and GitOps.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Get Started Section -->
      <section class="bg-[#3f7fbf] bg-opacity-5 rounded-lg p-8 text-center">
        <h2 class="text-[#101418] text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-[#5c738a] text-lg mb-6 max-w-2xl mx-auto">
          Learn more about our products and services or get in touch with our team to discuss your needs.
        </p>
        <div class="flex justify-center gap-4">
          <router-link to="/products"
            class="inline-flex items-center px-6 py-3 bg-[#3f7fbf] text-white rounded-lg hover:bg-[#2d5d8f] transition-colors">
            View Products
          </router-link>
          <router-link to="/contact"
            class="inline-flex items-center px-6 py-3 border-2 border-[#3f7fbf] text-[#3f7fbf] rounded-lg hover:bg-[#3f7fbf] hover:text-white transition-colors">
            Contact Us
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any logic or imports here if needed
</script>
