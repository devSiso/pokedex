declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

interface HTMLElement {
    clickOutsideEvent(event: MouseEvent): void;
}
