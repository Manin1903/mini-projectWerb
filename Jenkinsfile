pipeline {
  agent any
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage("build") {
      steps {
        echo "🚀 Building the application"
        sh 'docker build -t next_image .'
      }
    }

    stage("deploy") {
      steps { 
        echo '🚀 Deploying the application'
        sh 'docker start next_image || docker run --name next_container -d -p 3001:3000 next_image'
        sh 'docker ps'
        echo "🚀🚀🚀"
      }
    }
  }
}
