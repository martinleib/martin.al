<script>
    import { onMount } from 'svelte';

    let showPreloader = true;
    let fadeOut = false;

    onMount(() => {
        document.body.classList.add('overflow-hidden');
        setTimeout(() => {
            fadeOut = true;
            setTimeout(() => {
                showPreloader = false;
                document.body.classList.remove('overflow-hidden');
            }, 500);
        }, 3500);
    });
</script>

{#if showPreloader}
    <div class="preloader {fadeOut ? 'fade-out' : ''} bg-neutral-900">
        <h1 class="preloader-text text-zinc-200">Martin Leib</h1>
    </div>
{/if}