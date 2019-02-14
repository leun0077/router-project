export default {
  name: 'SideNavigation',
  data() {
    return {
      activeLink: null
    }
  },
  mounted() {
    this.activeLink = this.$route.path
  },
  watch: {
    $route(newVal, oldVal) {
      this.activeLink = newVal.path
    }
  }
}
