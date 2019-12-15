<template>
    <div class="container">
        <ErrorView :title="'Oooooops, you are not autenticated to visit this page, please login back'"
                   :status="'401'"
                   :navigateToPage="'PageLogin'"
                   :navigateToText="'Navigate to Login Page'"/>
    </div>
</template>

<script>
import ErrorView from '@/components/ErrorView'
export default {
    components: {
        ErrorView
    }
}
</script>

<style scoped>

</style>