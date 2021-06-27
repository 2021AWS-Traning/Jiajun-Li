# RUN
1. ``saml2aws login --profile beach``
2. `aws cloudformation deploy --template-file ./alarmForCustomizedMetric.yaml  --stack-name jiajun-alarm-for-customized-metric-cf --capabilities CAPABILITY_NAMED_IAM  --profile beach`
3. `aws cloudformation deploy --template-file ./alarmForMetricFilteredLog.yaml  --stack-name jiajun-alarm-for-customized-metric-filter-cf --capabilities CAPABILITY_NAMED_IAM  --profile beach`
