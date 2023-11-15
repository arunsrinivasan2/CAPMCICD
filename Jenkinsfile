@Library('piper-lib-os') _

node(){
  stage('Prepare')   {
      deleteDir()
      checkout scm
      setupCommonPipelineEnvironment script:this
  }

  stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm install -g @sap/cds'
      }
    }  

  stage('Deploy')   {
      cloudFoundryDeploy script:this, deployTool:'mtaDeployPlugin'
  }
}