<template>
    <div v-if="show" class="Backdrop" @click="close()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        show: { 
            type:Boolean,
            required: true 
        }
    },
    emits: ['closeBackdrop'],
    methods: {
        close() {
            this.$emit('closeBackdrop', true);
        }
    }
}
</script>

<style scoped>
    .Backdrop {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 99;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.4);
        backdrop-filter: blur(8px);
    }
</style>
