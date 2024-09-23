pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm audit fix'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Code Quality Analysis') {
            steps {
                sh 'npm run lint'
                sh 'sonar-scanner'
            }
        }
        stage('Deploy to Test') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('Release to Production') {
            steps {
                sh 'aws s3 sync ./dist s3://your-production-bucket'
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                sh 'datadog-agent start'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Successfully completed'
        }
        failure {
            echo 'Failed'
        }
    }
}