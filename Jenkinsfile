pipeline {
    agent any //  agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
              sh 'docker-compose up docker-compose.yml run –rm compile'
            }
        }
    }
}
