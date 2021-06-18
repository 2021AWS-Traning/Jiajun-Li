# run
1. `saml2aws login --profile beach`  
2. `aws cloudformation deploy --template-file ./deployment.yaml --stack-name jiajun-lambda-cf --capabilities CAPABILITY_NAMED_IAM  --profile beach --region ap-southeast-2`
