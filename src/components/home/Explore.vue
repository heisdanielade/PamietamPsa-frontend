
<template>
    <section class="explore overflow-hidden mt-11 bg-purple-50" id="explore">
        <div class="select-none pt-16 pb-16">
            
            <div class="header text-center flex flex-col items-center justify-center w-full">
                <h1 v-scroll-reveal class="not-shown gradient-text-1 text-3xl font-bold w-full lg:text-5xl md:text-4xl">
                    Explore our features
                </h1>
                <p v-scroll-reveal class="not-shown gradient-text-1 font-medium text-xs ml-8 mr-8 text-wrap lg:text-[0.9rem] mt-4">
                    All the features you need to ensure your Pets’ well-being.
                </p>
            </div>

            <div class="features flex flex-wrap justify-center items-center gap-[1.05rem] md:gap-7 lg:gap-10 mt-10 px-2">
                <div v-scroll-reveal class="not-shown card lg:scale-110 custom-cursor p-2 bg-white text-center flex flex-col items-center justify-center w-[10rem] h-[12rem] rounded-[1.25rem]">
                    <div class="icon bg-pink-400 font-bold text-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
                        <i class="fa-solid fa-dog"></i>
                    </div>
                    <div class="name mt-4 font-semibold text-[0.88rem]">Pet Profiles</div>
                    <div class="info mt-2 text-[0.65rem] text-gray-600">Manage profiles for each pet.</div>
                </div>
                <div v-scroll-reveal class="not-shown card lg:scale-110 custom-cursor p-2 bg-purple-400 text-center flex flex-col items-center justify-center w-[10rem] h-[12rem] rounded-[1.25rem]">
                    <div class="icon bg-white text-pink-400 font-bold p-1 rounded-full w-9 h-9 flex items-center justify-center">
                        <i class="fa-regular fa-bell"></i>
                    </div>
                    <div class="name text-white mt-4 font-semibold text-[0.88rem]">Reminders</div>
                    <div class="info text-gray-100 mt-2 text-[0.65rem]">Get reminders for grooming and meds.</div>
                </div>
                <div v-scroll-reveal class="not-shown card lg:scale-110 custom-cursor p-2 bg-white text-center flex flex-col items-center justify-center w-[10rem] h-[12rem] rounded-[1.25rem]">
                    <div class="icon bg-yellow-200 font-bold text-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
                        <i class="fa-solid fa-stethoscope"></i>
                    </div>
                    <div class="name mt-4 font-semibold text-[0.88rem]">Health Tracker</div>
                    <div class="info mt-2 text-[0.65rem] text-gray-600">Track vet visits and health records.</div>
                </div>
                <div v-scroll-reveal class="not-shown card lg:scale-110 custom-cursor p-2 bg-white text-center flex flex-col items-center justify-center w-[10rem] h-[12rem] rounded-[1.25rem]">
                    <div class="icon bg-purple-400 font-bold text-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
                        <i class="fa-regular fa-address-book"></i>
                    </div>
                    <div class="name mt-4 font-semibold text-[0.88rem]">Contact Storage</div>
                    <div class="info mt-2 text-[0.65rem] text-gray-600">Save important pet contacts.</div>
                </div>
            </div>

        </div>
    </section>
</template>



<style scoped>
.explore h1 {
    background: #1b0525;
    background: repeating-linear-gradient(to right, #1b0525 0%, #450f5e 50%, #8f45a3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.explore .card{
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
</style>