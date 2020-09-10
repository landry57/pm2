module.exports = {
    apps: [{
        script: 'bin/www',
        watch: '.'
    }, {
        script: './service-worker/',
        watch: ['./service-worker']
    }],

    deploy: {
        production: {
            user: 'digitapps',
            host: '80.241.211.59',
            ref: 'origin/master',
            repo: 'https://github.com/landry57/pm2.git',
            path: '/home/digitapps/pm2node',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};