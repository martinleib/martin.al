<script>
    import Arrow from "../icons/Arrow.svelte";
</script>

<section class="flex flex-col md:flex-row pt-5 text-zinc-200 mt-8">
    <span class="md:w-1/2">
        <h3 class="text-zinc-400 mb-3 text-sm">Building</h3>
        <section class="grid-item mb-5">
            <p>asterisk.co</p>
            <p class="text-zinc-400 text-xs mt-2">Digital marketplace for music producers <br /> Under construction</p>
        </section>

        <section class="grid-item">
            <a href="https://mojave.martin.al" target="_blank" class="underline underline-offset-2 decoration-1">mojave</a><Arrow />
            <p class="text-zinc-400 text-xs mt-2">TODO-list web app powered by Svelte</p>
        </section>
    </span>

    <span class="md:w-1/2 mt-10 md:mt-0">
        <h3 class="text-zinc-400 mb-3 text-sm">Built</h3>
        <section class="grid-item">
            <a href="https://davusito.com" target="_blank" class="underline underline-offset-2 decoration-1">davusito.com</a><Arrow />
            <p class="text-zinc-400 text-xs mt-2">Landing page for Davus' album. <br /> Made using Svelte</p>
        </section>
    </span>
</section>