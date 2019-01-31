pipeline {
    agent { docker { image 'node:8' } }
    stages {
        stage('build') {
            steps {
                sh 'docker-compose up'
            }
        }
    }
}