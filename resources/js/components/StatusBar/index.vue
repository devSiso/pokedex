<template>
    <div class="status-bar">
        <div class="status-bar__wrapper">
            <span class="status-bar__label">
                {{ label }}
            </span>
            <div class="status-bar__tracker">
                <span
                    class="status-bar__tracker status-bar__tracker--value"
                    :class="`--${type}`"
                    :style="`max-width: ${getValuePercentage}%`"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'status-bar',
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        getValuePercentage(): string {
            return ((this.value / 100) * 100).toString();
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';
@import '../../../sass/config/animations';

.status-bar {
    &__wrapper {
        display: flex;
        width: 100%;
        align-items: center;
    }

    &__label {
        font-size: 2rem;
        font-weight: $bold;
        margin-right: 10px;
        text-align: right;
        min-width: 36px;
    }

    &__tracker {
        position: relative;
        width: 100%;
        height: 20px;
        border-radius: 10px;
        background-color: $silver-200;
        overflow: hidden;

        &--value {
            @include status-bar-type-colors;
            position: absolute;
            top: 0;
            left: 0;
            animation: progress 4s;
        }
    }
}
</style>
