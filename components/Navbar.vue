<script setup lang="ts">
const TOP_OFFSET = 66;
const showBackground = ref(false);
const showMobileMenu = ref(false);
const showAccountMenu = ref(false);

const toggleMobileMenu = computed(() => {
    showMobileMenu.value = !showMobileMenu.value;
});

const toggleAccountMenu = computed(() => {
    showAccountMenu.value = !showAccountMenu.value;
});

const handleScroll = () => {
    if (window.scrollY >= TOP_OFFSET) {
        showBackground.value = true;
    } else {
        showBackground.value = false;
    }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <nav class="w-full fixed z-40">
        <div :class="`
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
        `">
            <img class="h-4 lg:h-7" src="/assets/images/logo.png" alt="Logo">
            <div class="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
            ">
                <NavbarItem label="Home"/>
                <NavbarItem label="Series"/>
                <NavbarItem label="Films"/>
                <NavbarItem label="New & Popular"/>
                <NavbarItem label="My List"/>
                <NavbarItem label="Browse by languages"/>
            </div>
            <div class="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <div class="text-white text-sm">Browse</div>
                <Icon @click="toggleMobileMenu()" :class="`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`" name="ion:chevron-down" size="30" />
                <MobileMenu :visible="showMobileMenu" />
            </div>
            <div class="flex flex-row ml-auto gap-7 items-center">
                <div class="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <Icon name="material-symbols:search" size="30"/>
                </div>
                <div class="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <Icon name="mdi:bell-outline" size="30"/>
                </div>
                <div @click="toggleAccountMenu()" class="flex flex-row items-center gap-2 cursor-pointer relative">
                    <div class="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                        <img src="/assets/images/default-blue.png" alt="profile">
                    </div>
                    <Icon :class="`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`" name="ion:chevron-down" size="30" />
                    <AccountMenu :visible="showAccountMenu"/>
                </div>
            </div>
        </div>
    </nav>
</template>