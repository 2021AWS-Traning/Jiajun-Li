# RUN
1. ``saml saml2aws login --profile beach``
2. ``aws cloudformation deploy --template-file ./kms.yaml  --stack-name jiajun-kms-cf --capabilities CAPABILITY_NAMED_IAM  --profile beach``
