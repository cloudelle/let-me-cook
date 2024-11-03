<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter(); // Initialize the router

</script>
    <style>
        /* Animation for podium enlargement and shrinking */
        @keyframes podiumAnimation {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        .podium {
            animation: podiumAnimation 2s ease-in-out infinite;
        }
    </style>

<template>



<body class="bg-white flex items-center justify-center h-screen">
    <div class="text-center">
        <!-- Title -->
        <h1 class="text-xl font-bold mb-4">TOP 5 COOKS</h1>

        <!-- Podium Container -->
        <div class="flex items-end justify-center space-x-4">
            <!-- Second Place Podium -->
            <div class="podium bg-blue-200 rounded-lg p-4 text-center w-24 h-48 flex flex-col items-center justify-end transform transition-all duration-300 hover:scale-105">
                <div class="text-xl font-bold mb-2">2</div>
                <div class="text-lg font-semibold">waffle</div>
                <div class="text-sm">18073</div>
                <div class="text-sm">18 out of 20</div>
            </div>

            <!-- First Place Podium -->
            <div class="podium bg-blue-300 rounded-lg p-4 text-center w-24 h-56 flex flex-col items-center justify-end transform transition-all duration-300 hover:scale-110">
                <div class="text-xl font-bold mb-2">1</div>
                <div class="text-lg font-semibold">BudTheGaming</div>
                <div class="text-sm">18109</div>
                <div class="text-sm">19 out of 20</div>
            </div>

            <!-- Third Place Podium -->
            <div class="podium bg-blue-200 rounded-lg p-4 text-center w-24 h-48 flex flex-col items-center justify-end transform transition-all duration-300 hover:scale-105">
                <div class="text-xl font-bold mb-2">3</div>
                <div class="text-lg font-semibold">wonton</div>
                <div class="text-sm">18060</div>
                <div class="text-sm">18 out of 20</div>
            </div>
        </div>
    </div>
</body>



</template>
