pipeline {
    agent any

  stages { 

        stage('Build Code') {
            steps {
               powershell 'npm install'
            }
        }
        
        stage('Test') {
            steps {
               powershell 'npx cypress run'
            }
        }
    }
}
