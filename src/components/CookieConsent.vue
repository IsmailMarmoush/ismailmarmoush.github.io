<template>
    <div v-if="!consentSet" class="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg"
        style="font-family: inherit;">
        <div class="max-w-4xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
            <span class="text-sm text-gray-700 flex items-center">
                <span class="mr-2 text-lg">🍪</span>
                We use Google Analytics cookies to improve your experience and understand what our visitors prefer.
            </span>
            <div class="flex gap-2 mt-2 md:mt-0">
                <button
                    class="px-4 py-2 bg-[#3f7fbf] text-white rounded hover:bg-[#2d5d8f] transition-colors text-sm font-medium"
                    @click="acceptConsent">
                    Accept
                </button>
                <button
                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-medium"
                    @click="declineConsent">
                    Decline
                </button>
                <router-link to="/privacy-policy"
                    class="px-4 py-2 text-[#3f7fbf] hover:text-[#2d5d8f] underline text-sm font-medium">
                    Privacy Policy
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const consentSet = ref(false)

onMounted(() => {
    consentSet.value = localStorage.getItem('cookie_consent') !== null
})

function acceptConsent() {
    localStorage.setItem('cookie_consent', 'accepted')
    consentSet.value = true
    if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            ad_storage: 'granted',
            analytics_storage: 'granted'
        });
    }
}

function declineConsent() {
    localStorage.setItem('cookie_consent', 'declined')
    consentSet.value = true
    if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
            analytics_storage: 'denied'
        });
    }
}
</script>