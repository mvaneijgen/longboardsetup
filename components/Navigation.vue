<template>
  <div class="component-Navigation">
    <nav>
      <button>Back</button>
      <button>Clear</button>
      <button>Toggle info</button>
      <button>Share</button>
    </nav>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'Navigation',
  data() {
    return {
      title: 'Navigation'
    }
  }, // End data
}
</script>