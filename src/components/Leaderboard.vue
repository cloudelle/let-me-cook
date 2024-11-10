<template>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <div class="leaderboard-container">
        <!-- Podium Display for Top 5 Cooks -->
        <h1 id="title" class="game-title animate-glow">🏆 Leaderboard 🏆</h1>
        <div class="bg-white/99 flex items-center justify-center h-[75vh]">
            <div class="flex items-end justify-center space-x-2 p-6">
                <!-- Fourth Place Podium -->
                <div v-if="users[3]" id="fourth"
                    class="podium bg-red-200 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl"
                    :style="{ height: `${calculateHeight(users[3].points)}vh` }">
                    <div class="text-2xl font-bold">4</div>
                    <div class="text-lg font-semibold">{{ users[3].name }}</div>
                    <div class="text-sm">{{ users[3].points }}</div>
                </div>

                <!-- Second Place Podium -->
                <div v-if="users[1]" id="second"
                    class="podium bg-red-300 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl"
                    :style="{ height: `${calculateHeight(users[1].points)}vh` }">
                    <div class="text-2xl font-bold">2</div>
                    <div class="text-lg font-semibold">{{ users[1].name }}</div>
                    <div class="text-sm">{{ users[1].points }}</div>
                </div>

                <!-- First Place Podium (Tallest) -->
                <div v-if="users[0]" id="first"
                    class="podium bg-red-400 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl"
                    :style="{ height: `${calculateHeight(users[0].points)}vh` }">
                    <div class="text-3xl font-bold">1</div>
                    <div class="text-lg font-semibold">{{ users[0].name }}</div>
                    <div class="text-sm">{{ users[0].points }}</div>
                </div>

                <!-- Third Place Podium -->
                <div v-if="users[2]" id="third"
                    class="podium bg-red-300 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl"
                    :style="{ height: `${calculateHeight(users[2].points)}vh` }">
                    <div class="text-2xl font-bold">3</div>
                    <div class="text-lg font-semibold">{{ users[2].name }}</div>
                    <div class="text-sm">{{ users[2].points }}</div>
                </div>

                <!-- Fifth Place Podium -->
                <div v-if="users[4]" id="fifth"
                    class="podium bg-red-200 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl"
                    :style="{ height: `${calculateHeight(users[4].points)}vh` }">
                    <div class="text-2xl font-bold">5</div>
                    <div class="text-lg font-semibold">{{ users[4].name }}</div>
                    <div class="text-sm">{{ users[4].points }}</div>
                </div>
            </div>

        </div>
        <!-- Leaderboard Table for Remaining Users -->
        <div class="leaderboard-table mt-5 mx-auto max-w-xl p-4">
            <div class="table-header grid grid-cols-3 gap-4 text-white bg-red-400 p-4 rounded-lg text-center mb-2">
                <div>Rank</div>
                <div>Name</div>
                <div>Total Points</div>
            </div>

            <!-- Table Rows with Alternating Colors -->
            <div v-for="(user, index) in users.slice(5,15)" :key="user.ingredientId" :class="[
                'table-row grid grid-cols-3 gap-4 p-4 rounded-lg mb-2 text-center shadow-md',
                index % 2 === 0 ? 'bg-red-300 text-gray-800' : 'bg-red-400 text-white'
            ]">
                <div>{{ index + 6 }}</div>
                <div>{{ user.name }}</div>
                <div>{{ user.points }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase.js';
// import confetti from 'canvas-confetti';

export default {
    name: 'Leaderboard',
    setup() {
        const users = ref([]);
        // const stopConfetti = ref(false);
        let maxPoints = ref(0);

        // Fetch users from Firestore and sort by points
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, 'user');
                const q = query(usersCollection, orderBy('points', 'desc'));
                const querySnapshot = await getDocs(q);

                // Map the fetched data
                users.value = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    ingredientId: doc.id,
                }));

                // Calculate the maximum score among the top 5 users
                maxPoints.value = Math.max(...users.value.slice(0, 5).map(user => user.points));

                // Trigger confetti animation for the top user
                // if (users.value.length > 0) {
                //     launchConfetti();
                // }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        // Method to calculate height based on points with min and max limits
        const calculateHeight = (points) => {
            if (!maxPoints.value) return 40; // Default height if maxPoints is not set
            const minHeight = 20; // Minimum height in vh
            const maxHeight = 60; // Maximum height in vh
            // Calculate the height proportionally and clamp it between minHeight and maxHeight
            const height = minHeight + (points / maxPoints.value) * (maxHeight - minHeight);
            return Math.min(Math.max(height, minHeight), maxHeight);
        };


        // Confetti animation
        // const launchConfetti = () => {
        //     const colors = ['#FF0B00', '#FFAE00', '#3FFF00', '#00FFAE', '#00B0FF', '#C500FF'];

        //     const frame = () => {
        //         confetti({
        //             particleCount: 5,
        //             angle: 60,
        //             spread: 55,
        //             origin: { x: 0, y: 0 },
        //             colors: colors,
        //         });
        //         confetti({
        //             particleCount: 5,
        //             angle: 120,
        //             spread: 55,
        //             origin: { x: 1, y: 0 },
        //             colors: colors,
        //         });

        //         if (!stopConfetti.value) {
        //             requestAnimationFrame(frame);
        //         }
        //     };

        //     stopConfetti.value = false;
        //     frame();

        //     setTimeout(() => {
        //         stopConfetti.value = true;
        //     }, 15000);
        // };

        onMounted(() => {
            fetchUsers();
        });

        return {
            users,
            calculateHeight,
        };
    },
};

</script>

<style scoped>
.leaderboard-container {
    background-image: url('../../images/leaderboardbackground.jpeg');
    background-size: cover; /* Ensures the image covers the whole container */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    background-attachment: fixed; /* Makes the background image fixed during scrolling */
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: overlay;
}

@keyframes podiumAnimation {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.podium {
    animation: podiumAnimation 2s ease-in-out infinite;
    transform-origin: bottom;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Centers the text vertically */
    padding: 10px;
    gap: 5px;
    /* Adds some space between the rank, name, and points */
    box-sizing: border-box;
}


#title {
    padding-top: 20px;
    margin-bottom: 20px;
}

.game-title {
    font-size: clamp(20px, 8vw, 80px);
    font-family: 'VT323', monospace;
    animation: glow 2s infinite alternate;
    text-align: center;
    color: #FFC107;
    font-weight: bold;
}

@keyframes glow {
    0% {
        text-shadow:
            -1px -1px 2px #000,
            1px -1px 2px #000,
            -1px 1px 2px #000,
            1px 1px 2px #000,
            0 0 10px #FFA500,
            0 0 20px #FF4500,
            0 0 30px #8B0000;
        transform: scale(1);
    }

    50% {
        text-shadow:
            -1px -1px 2px #000,
            1px -1px 2px #000,
            -1px 1px 2px #000,
            1px 1px 2px #000,
            0 0 20px #FFA500,
            0 0 30px #FF0000,
            0 0 40px #8B0000;
        transform: scale(1.1);
    }

    100% {
        text-shadow:
            -1px -1px 2px #000,
            1px -1px 2px #000,
            -1px 1px 2px #000,
            1px 1px 2px #000,
            0 0 10px #FFA500,
            0 0 20px #FF4500,
            0 0 30px #8B0000;
        transform: scale(1);
    }
}

.table-header {
    font-weight: bold;
    background-color: #8B0000;
    /* Darker red for header */
}

.table-row {
    transition: transform 0.2s;
}

.table-row:hover {
    transform: scale(1.05);
    background-color: #FF6347;
    /* Lighter red on hover */
}
</style>