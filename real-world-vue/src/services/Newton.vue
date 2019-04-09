<script>
export default {
  name: 'Newton',
  methods: {
    getNewtonConfig() {
      return {
        url: 'https://newton-api-dev.cloudhub.io/api/v1',
        instanceId: '123456',
        basicAuth: { username: 'USER', password: 'PASS' }
      };
    }
  }
};
</script>
