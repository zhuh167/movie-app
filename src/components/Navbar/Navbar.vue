<template>
    <header class="header">
        <nav class="nav" :class="{ color: scrollDown > 0 }" id="navHeight">
            <div class="container">
                <div class="nav__container">
                    <router-link class="logo" to="/">
                        <img src="@/assets/images/Logo.svg" alt="" />
                    </router-link>
                    <button class="nav__btn" @click="burgerOn">
                        <img src="@/assets/images/menu.svg" alt="">
                    </button>
                    <ul class="nav__list" :class="{ active: burger }">
                        <li class=" nav__close" @click="burgerOff">
                            <img src="@/assets/images/closeMenu.svg" alt="">
                        </li>
                        <li v-for="link in links" :key="link.title" @click="burger = false">
                            <router-link class="nav__link" :to="link.url">{{
                                    link.title
                            }}</router-link>
                        </li>
                        <li @click="burger = false">
                            <router-link to="/search" class="nav__link">
                              <img src="@/assets/images/search.svg" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { reactive,ref, onMounted } from 'vue'

const links = reactive([
    { title: "Главная", url: "/" },
    { title: "Фильмы", url: "/movie" },
    { title: "Сериалы", url: "/tv" },   
])

const scrollDown = ref(0)
const burger = ref(false)

const updateScroll = () => scrollDown.value = window.scrollY


const burgerOn = () => {
    burger.value = true
    document.body.style.overflow = 'hidden'
}
const burgerOff = () => {
    burger.value = false
    document.body.style.overflow = 'visible'
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})


</script>

<style lang="scss" scoped>

</style>