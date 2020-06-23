class Github {
    constructor() {
        this.client_id = '5fc1584280d414f1f375';
        this.client_sdcret = 'b1bdc69afe888f59cfe728280077f0b2e36010bb';
        this.repo_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clint_id =${this.client_id}&client_secret =${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}clint_id =${this.client_id}&client_secret =${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}