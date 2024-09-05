<script>
    import '../app.scss';
    import 'animate.css';
    
    import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
    <title>Martin Leib</title>
    <meta name="description" content="Martin Leib's portfolio">
</svelte:head>

<main>
    <Hero />
    <slot />
</main>